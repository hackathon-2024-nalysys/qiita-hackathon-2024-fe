import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconUserSearch } from '@tabler/icons-react';
import { ActionIcon, AppShell, Avatar, Container, Flex, useMantineTheme } from '@mantine/core';
import { Logo } from './Logo/Logo';

type DefaultTemplateProps = {
  children: ReactNode;
};

const FOOTER_HEIGHT = 60;
const AVATAR_ICON = '/avatarImg/me.jpg';
export const DefaultTemplate: FC<DefaultTemplateProps> = ({ children }) => {
  const theme = useMantineTheme();
  const isLoginPage = useRouter().pathname === '/login';

  return (
    <AppShell
      style={{ overflow: 'auto' }}
      bg={theme.colors.yellow[0]}
      header={{ height: { base: FOOTER_HEIGHT } }}
    >
      <AppShell.Header>
        <Flex align="center" justify="space-between" p="md" bg={theme.colors.yellow[2]}>
          <Logo />
          {!isLoginPage && (
            <Flex align="center" justify="flex-end" gap="12px">
              <Link href="/find" style={{ display: 'flex', alignItems: 'center' }}>
                <ActionIcon size="lg" color="white" variant="subtle" aria-label="Find">
                  <IconUserSearch stroke={2} />
                </ActionIcon>
              </Link>
              <Link href="/mypage" style={{ display: 'flex', alignItems: 'center' }}>
                <ActionIcon
                  size="lg"
                  style={{ border: '2px solid white' }}
                  radius="xl"
                  variant="outline"
                  aria-label="MyPage"
                >
                  <Avatar src={AVATAR_ICON} size="md" variant="filled" />
                </ActionIcon>
              </Link>
            </Flex>
          )}
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
