import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { IconSearch } from '@tabler/icons-react';
import { ActionIcon, AppShell, Avatar, Box, Container, Flex, useMantineTheme } from '@mantine/core';
import { Logo } from './Logo/Logo';

type DefaultTemplateProps = {
  children: ReactNode;
};

const FOOTER_HEIGHT = 60;
const AVATAR_ICON = 'https://picsum.photos/76/76';
export const DefaultTemplate: FC<DefaultTemplateProps> = ({ children }) => {
  const theme = useMantineTheme();

  return (
    <AppShell
      style={{ overflow: 'auto' }}
      bg={theme.colors.yellow[0]}
      header={{ height: { base: FOOTER_HEIGHT } }}
    >
      <AppShell.Header>
        <Flex align="center" justify="space-between" p="md" bg={theme.colors.yellow[2]}>
          <Logo />
          <Flex align="center" justify="flex-end" gap="8px">
            <Link href="/find" style={{ display: 'flex', alignItems: 'center' }}>
              <ActionIcon size="lg" color={'white'} variant="subtle" aria-label="Find">
                <IconSearch stroke={2} />
              </ActionIcon>
            </Link>
            <Link href="/mypage" style={{ display: 'flex', alignItems: 'center' }}>
              <ActionIcon
                size="lg"
                style={{ border: '2px solid white' }}
                radius={'xl'}
                variant="outline"
                aria-label="MyPage"
              >
                <Avatar src={AVATAR_ICON} size="md" variant="filled" />
              </ActionIcon>
            </Link>
          </Flex>
        </Flex>
      </AppShell.Header>
      <AppShell.Main>
        <Container pt={32} pb={40}>
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};
