import { FC, ReactNode } from 'react';
import { Box, FloatingPosition, Popover, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Account } from '@/usecase/find';

type HoverPopOverType = {
  children: ReactNode;
  data?: Account;
  position?: FloatingPosition;
};
export const HoverPopOver: FC<HoverPopOverType> = ({
  children,
  data,
  position = 'right-start',
}) => {
  const { displayName, affiliation, publicHobbies } = data ?? {};

  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover width={240} position={position} withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <Box onMouseEnter={open} onMouseLeave={close}>
          {children}
        </Box>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: 'none' }}>
        {data ? (
          <>
            <Text size="sm">・ユーザー名: {displayName}</Text>
            {affiliation && <Text size="sm">・所属: {affiliation}</Text>}
            {publicHobbies && <Text size="sm">・趣味: {publicHobbies.join(',')}</Text>}
          </>
        ) : (
          <Text size="sm"> 情報を取得できませんでした</Text>
        )}
      </Popover.Dropdown>
    </Popover>
  );
};
