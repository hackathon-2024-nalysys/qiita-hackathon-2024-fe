import { FC, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Avatar, Box, Flex, Skeleton, Title } from '@mantine/core';
import { DefaultTemplate } from '@/components/template/DefaultTemplate';
import { HoverPopOver } from '@/components/ui/HoverPopOver/HoverPopOver';
import { SecretHobby } from '@/components/ui/SecretHobby/SecretHobby';
import { fetchFellows } from '@/usecase/find';

type Avatar = { id: string; imageSrc: string };
const TITLE = '探す';

// MEMO: ロジックとUIの分岐は余裕があったら！
export const FindPage: FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['fellows'],
    queryFn: fetchFellows,
  });

  console.log({ data });

  const sortHobby = useMemo(
    () => data?.data.byHobby.sort((a, b) => Number(a.isPublic) - Number(b.isPublic)),
    [data]
  );

  return (
    <DefaultTemplate>
      <Title order={1} size="h2">
        {TITLE}
      </Title>
      <Flex direction="column" gap="16px">
        {isLoading ? (
          <LoadingUI />
        ) : (
          <>
            {data?.data.hotList && data?.data.hotList?.length > 0 && (
              <Box mt={32}>
                <Title order={1} size="h4">
                  あなたの趣味と近い人
                </Title>
                <Flex mt={16} gap={16} wrap="wrap">
                  {data?.data.hotList?.map((account) => (
                    <HoverPopOver key={account.id} data={account}>
                      <Avatar
                        style={{ cursor: 'pointer' }}
                        src={account.icon}
                        size="xl"
                        radius="50%"
                      />
                    </HoverPopOver>
                  ))}
                </Flex>
              </Box>
            )}

            {sortHobby?.map(({ hobby, isPublic, accounts }, index) =>
              accounts.length > 0 ? (
                <Box mt={32} key={`hobby-${index}`}>
                  <Flex gap={8}>
                    <Title order={1} size="h4">
                      {hobby}
                    </Title>
                    {!isPublic && <SecretHobby />}
                  </Flex>
                  <Flex mt={16} gap={16} wrap="wrap">
                    {accounts.map((account) => (
                      <HoverPopOver key={account.id} data={account} isPublic={isPublic}>
                        <Avatar
                          style={{ cursor: 'pointer' }}
                          src={account.icon}
                          size="xl"
                          radius="50%"
                        />
                      </HoverPopOver>
                    ))}
                  </Flex>
                </Box>
              ) : (
                <></>
              )
            )}
          </>
        )}
      </Flex>
    </DefaultTemplate>
  );
};

const LoadingUI: FC = () => (
  <Box mt={32}>
    <Title order={1} size="h4">
      あなたの趣味と近い人
    </Title>
    <Flex mt={16} gap={16} wrap="wrap">
      <Skeleton height={50} circle />
      <Skeleton height={50} circle />
      <Skeleton height={50} circle />
    </Flex>
  </Box>
);
