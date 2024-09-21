import { ChangeEvent, FC, useState } from 'react';
import { register } from 'module';
import { zodResolver } from '@hookform/resolvers/zod';
import { Control, useFieldArray, useForm, UseFormRegister } from 'react-hook-form';
import * as z from 'zod';
import { Button, Fieldset, Flex, TextInput, Title } from '@mantine/core';

type ProfileFormProps = {
  onSubmit: () => void;
  defaultValues: {
    name: string;
    hobbies: string[];
  };
};

const schema = z.object({
  name: z.string().min(1, '名前は必須です。'),
  hobbies: z.array(z.string()).min(1, '趣味は少なくとも一つは必要です。'), // ["サッカー", "イゴ"]
  privateHobbies: z.array(z.string()).optional(),
});
type ProfileInputType = z.infer<typeof schema>;

export const ProfileForm: FC<ProfileFormProps> = ({ onSubmit, defaultValues }) => {
  const { control, register, handleSubmit } = useForm<ProfileInputType>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <Flex justify="space-between">
        <Title order={1} size="h4">
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
  control: Control<ProfileInputType>;
  register: UseFormRegister<ProfileInputType>;
}> = ({ control, register }) => {
  const { fields, append, prepend, remove } = useFieldArray<ProfileInputType>({
    name: 'hobbies',
    control,
  });

  return (
    <Fieldset legend="趣味・好きなこと">
      {fields.map((field, index) => (
        <TextInput
          key={field.id}
          label="趣味・好きなこと1"
          placeholder="ボウリング"
          {...register(`hobbies.${index}`)}
        />
      ))}
      <Button />
    </Fieldset>
  );
};
