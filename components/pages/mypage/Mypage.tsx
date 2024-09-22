import { FC, useEffect, useState } from 'react';
import router from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { Flex, Loader, Skeleton } from '@mantine/core';
import { DefaultTemplate } from '@/components/template/DefaultTemplate';
import { fetchMe } from '@/usecase/me';
import { patchMe } from '@/usecase/patchMe';
import { ProfileForm, ProfileFormProps } from './ProfileForm';

type AsyncResult<T> = {
  loading: boolean;
  data: T | undefined;
};

type Response = {
  name: string;
  hobbies: string[];
  privateHobbies?: string[];
};

// 非同期ダミー関数
async function dummyAsyncFunction(): Promise<{ data: Response }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          name: 'ほげ',
          hobbies: ['ほげ'],
          privateHobbies: ['ほげ'],
        },
      });
    }, 5000); // 1秒後に解決
  });
}

function useFetchMyProfile(): AsyncResult<ProfileFormProps['defaultValues']> {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ProfileFormProps['defaultValues'] | undefined>(undefined);

  useEffect(() => {
    // データを取得する関数
    const fetchData = async () => {
      try {
        const response = await fetchMe();
        const hobbies = response.data.publicHobbies.map((hobby) => ({ value: hobby }));
        const privateHobbies = response.data.privateHobbies?.map((hobby) => ({ value: hobby }));
        setData({
          name: response.data.displayName,
          hobbies: hobbies.length !== 0 ? hobbies : [{ value: '' }],
          privateHobbies: privateHobbies?.length !== 0 ? privateHobbies : [{ value: '' }],
        });
      } catch (error) {
        console.error('データの取得に失敗しました', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data };
}

export const Mypage: FC = () => {
  const { data, loading } = useFetchMyProfile();
  const { mutate, isPending } = useMutation({
    mutationFn: patchMe,
    onSuccess: () => router.push('/find'),
  });
  const onSubmit: ProfileFormProps['onSubmit'] = (data) => {
    mutate({
      displayName: data.name,
      publicHobbies: data.hobbies.map((hobby) => hobby.value),
      privateHobbies: data.privateHobbies?.map((hobby) => hobby.value) ?? [],
    });
  };
  return (
    <DefaultTemplate>
      {loading ? (
        <Flex direction="column" gap="24px">
          <Skeleton height={36} />
          <Skeleton height={50} />
          <Skeleton height={50} />
          <Skeleton height={50} />
        </Flex>
      ) : (
        <ProfileForm
          onSubmit={onSubmit}
          defaultValues={
            data
              ? data
              : {
                  name: '',
                  hobbies: [{ value: '' }],
                  privateHobbies: [{ value: '' }],
                }
          }
        />
      )}
    </DefaultTemplate>
  );
};
