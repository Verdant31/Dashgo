import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';

import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';
import { Logo } from './Logo';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';


export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" mt="4" align="center" px="6">

      {!isWideVersion && (
        <IconButton
          icon={<Icon
            as={RiMenuLine}
          />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          aria-label="Open Navigation"
          mr="2"
        >
        </IconButton>
      )}

      <Logo />

      {isWideVersion && (
        <SearchBox />
      )}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>

    </Flex>
  );
}