import { FC } from 'react';
import { Button, Flex, TextInput, Title } from '@mantine/core';
import { DefaultTemplate } from '@/components/template/DefaultTemplate';
import { ProfileForm } from './ProfileForm';

type Avatar = { id: string; imageSrc: string };
const TITLE = 'あなたと同じ趣味を持ってる人リスト';

export const Mypage: FC = () => {
  const NearHobyPeople: Avatar[] = [
    { id: '1111aaa', imageSrc: 'https://picsum.photos/76/76' },
    { id: '1111aaa', imageSrc: 'https://picsum.photos/76/76' },
    { id: '1111aaa', imageSrc: 'https://picsum.photos/76/76' },
  ];

  return (
    <DefaultTemplate title={TITLE}>
      <Flex direction="column" gap="32px">
        <ProfileForm
          onSubmit={() => console.log('hoge')}
          defaultValues={{
            userName: '',
            hobbies: [],
          }}
        />
      </Flex>
    </DefaultTemplate>
  );
};
