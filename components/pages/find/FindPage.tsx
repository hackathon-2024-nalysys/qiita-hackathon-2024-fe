import { FC } from 'react';
import { Avatar, Box, Flex, Image, Title } from '@mantine/core';
import { DefaultTemplate } from '@/components/template/DefaultTemplate';
import { HoverPopOver } from '@/components/ui/HoverPopOver/HoverPopOver';

type Avatar = { id: string; imageSrc: string };
type TopInterestContentType = {
  tag: { id: string; name: string };
  avatarList: Avatar[];
};
const TITLE = 'あなたと同じ趣味を持ってる人リスト';

// MEMO: ロジックとUIの分岐は余裕があったら！
export const FindPage: FC = () => {
  // TODO: APIで取得
  const NearHobyPeople: Avatar[] = [
    { id: '1111aaa', imageSrc: 'https://picsum.photos/76/76' },
    { id: '1111aaa', imageSrc: 'https://picsum.photos/76/76' },
    { id: '1111aaa', imageSrc: 'https://picsum.photos/76/76' },
  ];

  // TODO: APIで取得
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
        { id: '2222e', imageSrc: 'https://picsum.photos/76/76' },
        { id: '2222f', imageSrc: 'https://picsum.photos/76/76' },
        { id: '2222g', imageSrc: 'https://picsum.photos/76/76' },
        { id: '2222h', imageSrc: 'https://picsum.photos/76/76' },
        { id: '2222i', imageSrc: 'https://picsum.photos/76/76' },
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

  return (
    <DefaultTemplate>
      <Title order={1} size="h2">
        {TITLE}
      </Title>
      <Flex direction="column" gap="16px">
        <Box mt={32}>
          <Title order={1} size="h4">
            あなたの趣味と近い人
          </Title>
          <Flex mt={16} gap={16} wrap="wrap">
            {NearHobyPeople.map(({ id, imageSrc }) => (
              <HoverPopOver key={id}>
                <Image src={imageSrc} alt="Avatar" width="76px" height="76px" radius="50%" />
              </HoverPopOver>
            ))}
          </Flex>
        </Box>

        {TopInterestContent.map(({ tag, avatarList }) => (
          <Box mt={32} key={tag.id}>
            <Title order={1} size="h4">
              {tag.name}
            </Title>
            <Flex mt={16} gap={16} wrap="wrap">
              {avatarList.map(({ id, imageSrc }) => (
                <HoverPopOver key={id}>
                  <Avatar style={{ cursor: 'pointer' }} src={imageSrc} size="xl" radius="50%" />
                </HoverPopOver>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
    </DefaultTemplate>
  );
};
