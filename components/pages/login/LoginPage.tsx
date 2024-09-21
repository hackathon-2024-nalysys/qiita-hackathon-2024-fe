import { FC, useCallback } from 'react';
import { useRouter } from 'next/router';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Box, Button, PasswordInput, TextInput, Title } from '@mantine/core';
import { DefaultTemplate } from '@/components/template/DefaultTemplate';
import { login, LoginFormType, schema } from '@/usecase/login';

const TITLE = 'ログインする';

export const LoginPage: FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: undefined,
      password: undefined,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: () => router.push('/find'),
  });

  const onSubmit = useCallback(
    handleSubmit((formData) => mutate(formData)),
    []
  );

  return (
    <DefaultTemplate>
      <Title order={1} size="h2">
        {TITLE}
      </Title>
      <Box mt={32}>
        <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TextInput
            label="ユーザー名"
            withAsterisk
            error={errors.name?.message}
            {...register('name')}
            disabled={isPending}
          />
          <PasswordInput
            label="パスワード"
            type="password"
            withAsterisk
            error={errors.password?.message}
            {...register('password')}
            disabled={isPending}
          />
          <Button variant="transparent" type="submit" loading={isPending}>
            ログイン
          </Button>
        </form>
      </Box>
    </DefaultTemplate>
  );
};
