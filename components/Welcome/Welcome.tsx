import { Anchor, Text, Title } from '@mantine/core';
import { DefaultTemplate } from '@/components/template/DefaultTemplate';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <DefaultTemplate title="Welcome">
      <Title className={classes.title} ta="center">
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Mantine
        </Text>
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Next.js project includes a minimal setup for server side rendering, if you want
        to learn more on Mantine + Next.js integration follow{' '}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          this guide
        </Anchor>
        . To get started edit index.tsx file.
      </Text>
    </DefaultTemplate>
  );
}
