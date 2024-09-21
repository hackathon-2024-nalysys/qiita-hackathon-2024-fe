import { ChangeEvent, FC, Fragment, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Control, FieldValues, useFieldArray, useForm, UseFormRegister } from 'react-hook-form';
import * as z from 'zod';
import { Button, Fieldset, Flex, TextInput, Title } from '@mantine/core';

// WHY: objectのarrayじゃないとuseFieldArrayが使えないみたい https://github.com/orgs/react-hook-form/discussions/7586
const schema = z.object({
  name: z.string().min(1, '名前は必須です。'),
  hobbies: z.object({ value: z.string() }).array().min(1, '趣味は少なくとも一つは必要です。'), // ["サッカー", "イゴ"]
  privateHobbies: z.object({ value: z.string() }).array().optional(), // ["サッカー", "イゴ"]
});
type Schema = z.infer<typeof schema>;

type ProfileFormProps = {
  onSubmit: (d: Schema) => void;
  defaultValues: {
    name: string;
    hobbies: { value: string }[];
    privateHobbies?: { value: string }[];
  };
};

export const ProfileForm: FC<ProfileFormProps> = ({ onSubmit, defaultValues }) => {
  const { control, register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex justify="space-between">
        <Title order={1} size="h2">
          プロフィール
        </Title>
        <Button variant="transparent" type="submit">
          完了
        </Button>
      </Flex>
      <TextInput label="ユーザー名" placeholder="趣味 太郎" {...register('name')} />
      <HobbiesFields control={control} register={register} />
    </form>
  );
};

const HobbiesFields: FC<{
  control: Control<Schema>;
  register: UseFormRegister<Schema>;
}> = ({ control, register }) => {
  const { fields, append, remove } = useFieldArray({ control, name: 'hobbies' });

  return (
    <Fieldset legend="趣味・好きなこと">
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          <TextInput
            label={`${index + 1}つ目`}
            placeholder="ボウリング"
            {...register(`hobbies.${index}.value`)}
          />
          <Button onClick={() => remove(index)}>削除</Button>
        </Fragment>
      ))}
      <Button onClick={() => append({ value: '' })}>追加</Button>
    </Fieldset>
  );
};
