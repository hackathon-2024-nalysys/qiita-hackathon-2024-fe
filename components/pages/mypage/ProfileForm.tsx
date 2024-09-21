import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconPlus, IconTrash } from '@tabler/icons-react';
import { Control, useFieldArray, useForm, UseFormRegister } from 'react-hook-form';
import * as z from 'zod';
import {
  ActionIcon,
  Button,
  Fieldset,
  Flex,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from '@mantine/core';

// WHY: objectのarrayじゃないとuseFieldArrayが使えないみたい https://github.com/orgs/react-hook-form/discussions/7586
const schema = z.object({
  name: z.string().min(1, '名前は必須です。'),
  hobbies: z.object({ value: z.string() }).array().min(1, '趣味は少なくとも一つは必要です。'), // ["サッカー", "イゴ"]
  privateHobbies: z.object({ value: z.string() }).array().optional(), // ["サッカー", "イゴ"]
});
type Schema = z.infer<typeof schema>;

export type ProfileFormProps = {
  onSubmit: (d: Schema) => void;
  defaultValues: {
    name: string;
    hobbies: { value: string }[];
    privateHobbies?: { value: string }[];
  };
};

export const ProfileForm: FC<ProfileFormProps> = ({ onSubmit, defaultValues }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });
  console.dir({ errors }, { depth: 2 });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex justify="space-between">
        <Title order={1} size="h2">
          プロフィール
        </Title>
        <Button pr={0} variant="transparent" type="submit">
          完了
        </Button>
      </Flex>
      <Flex direction={'column'} gap={32} mt={24}>
        <TextInput
          size="lg"
          label="ユーザー名"
          placeholder="趣味 太郎"
          error={errors.name?.message}
          {...register('name')}
        />
        <HobbiesFields
          control={control}
          register={register}
          name={'hobbies'}
          legend="趣味・好きなこと"
        />
        <HobbiesFields
          control={control}
          register={register}
          name={'privateHobbies'}
          legend="秘密の趣味・好きなこと"
        />
      </Flex>
    </form>
  );
};

const HobbiesFields: FC<{
  control: Control<Schema>;
  register: UseFormRegister<Schema>;
  name: 'hobbies' | 'privateHobbies';
  legend: string;
}> = ({ control, register, name, legend }) => {
  const theme = useMantineTheme();
  const { fields, append, remove } = useFieldArray({ control, name });

  return (
    <Fieldset
      style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
      variant="unstyled"
      legend={<Text>{legend}</Text>}
    >
      {fields.map((field, index) => (
        <TextInput
          key={field.id}
          label={`${index + 1}つ目`}
          placeholder="ボウリング"
          size="lg"
          {...register(`${name}.${index}.value`)}
          rightSection={
            fields.length === 1 ? null : (
              <ActionIcon
                size="sm"
                variant="subtle"
                color={theme.colors.yellow[2]}
                style={{ cursor: 'pointer' }}
                onClick={() => remove(index)}
              >
                <IconTrash />
              </ActionIcon>
            )
          }
        />
      ))}
      {/* <Button size="lg" variant="outline" bg={'white'} onClick={() => append({ value: '' })}> */}
      <Button
        size="lg"
        variant="outline"
        bg={'white'}
        onClick={() => append({ value: '' })}
        color={theme.colors.yellow[2]}
      >
        <IconPlus />
      </Button>
    </Fieldset>
  );
};
