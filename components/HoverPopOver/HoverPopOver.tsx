import { FC, ReactNode } from 'react';
import { Box, FloatingPosition, Popover, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

type HoverPopOverType = {
  children: ReactNode;
  data?: string;
  position?: FloatingPosition;
};
export const HoverPopOver: FC<HoverPopOverType> = ({
  children,
  data,
  position = 'right-start',
}) => {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover width={240} position={position} withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <Box onMouseEnter={open} onMouseLeave={close}>
          {children}
        </Box>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: 'none' }}>
        <Text size="sm">{data ?? '情報を取得できませんでした'}</Text>
      </Popover.Dropdown>
    </Popover>
  );
};
