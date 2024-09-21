import { FC, ReactNode } from 'react';
import { AppShell, Container, Flex, rem, Title, useMantineTheme } from '@mantine/core';
import { Logo } from '@/components/template/Logo/Logo';

type DefaultTemplateProps = {
  children: ReactNode;
  title: string;
};
const HEADER_HEIGHT = 48;
export const DefaultTemplate: FC<DefaultTemplateProps> = ({ children, title }) => {
  const theme = useMantineTheme();

  return (
    <AppShell header={{ height: { base: HEADER_HEIGHT } }}>
      <AppShell.Header bg={theme.colors.blue[4]}>
        <Flex h="100%" align="center" p={8}>
          <Logo />
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
