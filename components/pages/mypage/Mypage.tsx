import { FC } from 'react';
import { Button, Flex, TextInput, Title } from '@mantine/core';
import { DefaultTemplate } from '@/components/template/DefaultTemplate';
import { ProfileForm } from './ProfileForm';

export const Mypage: FC = () => {
  return (
    <DefaultTemplate>
      <Flex direction="column" gap="32px">
        <ProfileForm
          onSubmit={() => console.log('hoge')}
          defaultValues={{
            name: '',
            hobbies: [],
          }}
        />
      </Flex>
    </DefaultTemplate>
  );
};
