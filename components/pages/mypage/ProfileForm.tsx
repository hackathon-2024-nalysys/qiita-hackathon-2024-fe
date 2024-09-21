import { ChangeEvent, FC, Fragment, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Control, FieldValues, useFieldArray, useForm, UseFormRegister } from 'react-hook-form';
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

export const ProfileForm: FC<ProfileFormProps> = ({ onSubmit, defaultValues }) => {
  const { control, register, handleSubmit } = useForm({
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
  control: Control;
  register: UseFormRegister<FieldValues>;
}> = ({ control, register }) => {
  const { fields, append, remove } = useFieldArray({ control, name: 'hobbies' });

  return (
    <Fieldset legend="趣味・好きなこと">
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          <TextInput
            label={`${index + 1}つ目`}
            placeholder="ボウリング"
            {...register(`hobbies.${index}`)}
          />
          <Button onClick={() => remove(index)}>削除</Button>
        </Fragment>
      ))}
      <Button onClick={() => append('')}>追加</Button>
    </Fieldset>
  );
};
