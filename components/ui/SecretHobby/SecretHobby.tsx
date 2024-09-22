import { FC } from 'react';
import { IconLock } from '@tabler/icons-react';
import { Box, FloatingPosition, Popover, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

type SecretHobbyrType = {
  position?: FloatingPosition;
};
export const SecretHobby: FC<SecretHobbyrType> = ({ position = 'top' }) => {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover width={120} position={position} withArrow shadow="md" opened={opened} offset={0}>
      <Popover.Target>
        <Box onMouseEnter={open} onMouseLeave={close}>
          <IconLock />
        </Box>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: 'none' }}>
        <Text size="sm">秘密の趣味</Text>
      </Popover.Dropdown>
    </Popover>
  );
};
