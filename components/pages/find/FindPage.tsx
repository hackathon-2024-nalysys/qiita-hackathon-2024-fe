import { FC } from 'react';
import { Box, Flex, Image, Title } from '@mantine/core';
import { DefaultTemplate } from '@/components/template/DefaultTemplate';

type Avatar = { id: string; imageSrc: string };
type TopInterestContentType = {
  tag: { id: string; name: string };
  avatarList: Avatar[];
};
const TITLE = 'あなたと同じ趣味を持ってる人リスト';

const TopInterestContent: TopInterestContentType[] = [
  {
    tag: { id: '1111', name: 'VTuber' },
    avatarList: [
      { id: '1111a', imageSrc: 'https://picsum.photos/76/76' },
      { id: '1111b', imageSrc: 'https://picsum.photos/76/76' },
      { id: '1111c', imageSrc: 'https://picsum.photos/76/76' },
      { id: '1111d', imageSrc: 'https://picsum.photos/76/76' },
    ],
  },
  {
    tag: { id: '2222', name: 'サッカー' },
    avatarList: [
      { id: '2222a', imageSrc: 'https://picsum.photos/76/76' },
      { id: '2222b', imageSrc: 'https://picsum.photos/76/76' },
      { id: '2222c', imageSrc: 'https://picsum.photos/76/76' },
      { id: '2222d', imageSrc: 'https://picsum.photos/76/76' },
    ],
  },
  {
    tag: { id: '3333', name: '囲碁' },
    avatarList: [
      { id: '3333a', imageSrc: 'https://picsum.photos/76/76' },
      { id: '3333b', imageSrc: 'https://picsum.photos/76/76' },
      { id: '3333c', imageSrc: 'https://picsum.photos/76/76' },
      { id: '3333d', imageSrc: 'https://picsum.photos/76/76' },
    ],
  },
];

// MEMO: ロジックとUIの分岐は余裕があったら！
export const FindPage: FC = () => {
  const NearHobyPeople: Avatar[] = [
    { id: '1111aaa', imageSrc: 'https://picsum.photos/76/76' },
    { id: '1111aaa', imageSrc: 'https://picsum.photos/76/76' },
    { id: '1111aaa', imageSrc: 'https://picsum.photos/76/76' },
  ];

  return (
    <DefaultTemplate title={TITLE}>
      <Flex direction="column" gap="16px">
        <Box mt={32}>
          <Title order={1} size="h4">
            あなたの趣味と近い人
          </Title>
          <Flex mt="8px" gap="8px">
            {NearHobyPeople.map(({ id, imageSrc }) => (
              <Image key={id} src={imageSrc} alt="Avatar" width="76px" height="76px" radius="50%" />
            ))}
          </Flex>
        </Box>

        {TopInterestContent.map(({ tag, avatarList }) => (
          <Box mt={32} key={tag.id}>
            <Title order={1} size="h4">
              {tag.name}
            </Title>
            <Flex mt={8} gap={8}>
              {avatarList.map(({ id, imageSrc }) => (
                <Image
                  style={{ cursor: 'pointer' }}
                  key={id}
                  src={imageSrc}
                  alt="Avatar"
                  width="76px"
                  height="76px"
                  radius="50%"
                />
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
    </DefaultTemplate>
  );
};
