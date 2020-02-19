import React, { useRef } from 'react';
import {
  Flex,
  Box,
  Button,
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/core';
import { FaBars } from 'react-icons/fa';
import IndeedLogo from '@indeed/frontend-components-react-transpiled/dist/esm/IndeedLogo';

import { Menu } from './Menu';
import { useDarkTheme } from '../hooks/isDarkTheme';

export const NavBar = () => {
  const isDarkTheme = useDarkTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Flex
      py={{ base: 2, lg: 4 }}
      px={{ base: 4, lg: 0 }}
      borderRightWidth={{ base: 0, lg: 1 }}
      borderBottomWidth={{ base: 1, lg: 0 }}
      borderColor={isDarkTheme ? 'gray.900' : 'gray.200'}
      flexDir={{ lg: 'column' }}
      minW="15rem"
      maxH="100vh"
      overflowY="auto"
      overflowX="hidden"
      align={{ base: 'center', lg: 'flex-end' }}
      backgroundColor={{
        base: isDarkTheme ? 'gray.900' : 'white',
        lg: isDarkTheme ? 'gray.700' : 'gray.50',
      }}
      shadow={{ base: 'md', lg: 'none' }}
    >
      <Flex
        textAlign="right"
        px="6"
        flexDir="column"
        align="flex-end"
        mb={{ lg: 6 }}
      >
        <Box
          fontWeight="bold"
          fontSize={{ base: '0.6rem', lg: 'xs' }}
          color="brand.500"
          mt={-2}
        >
          <IndeedLogo />
        </Box>
      </Flex>

      <Box d={{ base: 'none', lg: 'block' }}>
        <Menu direction="right" />
      </Box>

      <Box d={{ lg: 'none' }} ml="auto">
        <Button ref={btnRef} onClick={onOpen} variant="ghost">
          <Box as={FaBars} size="1rem" mb="1px" mr="2" />
          Menu
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Examples</DrawerHeader>
            <DrawerBody pl="0">
              <Menu />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
};
