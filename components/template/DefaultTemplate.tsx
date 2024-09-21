import { FC, ReactNode } from 'react';
import { AppShell, Flex, rem, useMantineTheme } from '@mantine/core';
import { Logo } from '@/components/template/Logo/Logo';

type DefaultTemplateProps = {
  children: ReactNode;
};
export const DefaultTemplate: FC<DefaultTemplateProps> = ({ children }) => {
  const theme = useMantineTheme();

  return (
    <AppShell header={{ height: { base: 48 } }}>
      <AppShell.Header bg={theme.colors.blue[4]}>
        <Flex h="100%" align="center" p={8}>
          <Logo />
        </Flex>
      </AppShell.Header>
      <AppShell.Main pt={`calc(${rem(48)})`}>{children}</AppShell.Main>
    </AppShell>
  );
};
