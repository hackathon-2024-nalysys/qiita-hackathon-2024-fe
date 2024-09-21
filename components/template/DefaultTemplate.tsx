import { FC, ReactNode } from 'react';
import { AppShell, Avatar, Container, Flex, rem, Title, useMantineTheme } from '@mantine/core';
import { Logo } from './Logo/Logo';

type DefaultTemplateProps = {
  children: ReactNode;
  title: string;
};

const HEADER_HEIGHT = 52;
const AVATAR_ICON = 'https://picsum.photos/76/76';
export const DefaultTemplate: FC<DefaultTemplateProps> = ({ children, title }) => {
  const theme = useMantineTheme();

  return (
    <AppShell header={{ height: { base: HEADER_HEIGHT } }}>
      <AppShell.Header bg={theme.colors.blue[4]}>
        <Flex h="100%" align="center" p={8} justify="space-between">
          <Logo />
          <Avatar src={AVATAR_ICON} size="sm" variant="filled" />
        </Flex>
      </AppShell.Header>
      <AppShell.Main pt={`calc(${rem(HEADER_HEIGHT)})`}>
        <Container h={`calc(${rem(`100vh - ${HEADER_HEIGHT}`)})`} pt={16}>
          <Title order={1} size="h2">
            {title}
          </Title>
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};
