import { FC, ReactNode } from 'react';
import { IconSearch } from '@tabler/icons-react';
import {
  ActionIcon,
  AppShell,
  Avatar,
  Box,
  Container,
  Flex,
  rem,
  useMantineTheme,
} from '@mantine/core';

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
      footer={{ height: { base: FOOTER_HEIGHT } }}
    >
      <AppShell.Main>
        <Container h={`calc(${rem(`100vh - ${FOOTER_HEIGHT}`)})`} pt={56}>
          {children}
        </Container>
      </AppShell.Main>
      <AppShell.Footer>
        <Flex h="100%" align="center" p="md" justify="space-between">
          <Box size="sm" />
          <ActionIcon color={theme.colors.yellow[4]} variant="subtle" aria-label="Find">
            <IconSearch stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="subtle" aria-label="MyPage">
            <Avatar src={AVATAR_ICON} size="sm" variant="filled" />
          </ActionIcon>
        </Flex>
      </AppShell.Footer>
    </AppShell>
  );
};
