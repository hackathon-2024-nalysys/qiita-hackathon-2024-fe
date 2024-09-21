import { FC, ReactNode } from 'react';
import { AppShell, Avatar, Container, Flex, rem, useMantineTheme } from '@mantine/core';
import { theme } from '@/theme';
import { Logo } from './Logo/Logo';

type DefaultTemplateProps = {
  children: ReactNode;
};

const FOOTER_HEIGHT = 60;
const AVATAR_ICON = 'https://picsum.photos/76/76';
export const DefaultTemplate: FC<DefaultTemplateProps> = ({ children }) => {
  const theme = useMantineTheme();

  return (
    <AppShell bg="#FFFBEF" footer={{ height: { base: FOOTER_HEIGHT } }}>
      <AppShell.Main>
        <Container h={`calc(${rem(`100vh - ${FOOTER_HEIGHT}`)})`} pt={56}>
          {children}
        </Container>
      </AppShell.Main>
      <AppShell.Footer bg={theme.colors.blue[4]}>
        <Flex h="100%" align="center" p={8} justify="space-between">
          <Logo />
          <Avatar src={AVATAR_ICON} size="sm" variant="filled" />
          <Avatar src={AVATAR_ICON} size="sm" variant="filled" />
        </Flex>
      </AppShell.Footer>
    </AppShell>
  );
};
