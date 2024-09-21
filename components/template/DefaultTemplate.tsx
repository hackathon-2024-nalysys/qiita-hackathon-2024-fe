import { FC, ReactNode } from 'react';
import { AppShell, rem, useMantineTheme } from '@mantine/core';

type DefaultTemplateProps = {
  children: ReactNode;
};
export const DefaultTemplate: FC<DefaultTemplateProps> = ({ children }) => {
  const theme = useMantineTheme();

  return (
    <AppShell header={{ height: { base: 48 } }}>
      <AppShell.Header bg={{ color: theme.colors.blue[1] }}>Header</AppShell.Header>

      <AppShell.Main pt={`calc(${rem(48)})`}>{children}</AppShell.Main>
    </AppShell>
  );
};
