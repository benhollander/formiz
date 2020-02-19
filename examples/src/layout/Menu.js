import React from 'react';
import PropTypes from 'prop-types';
import {
  Stack, Icon, Link, useColorMode, Flex, Switch,
} from '@chakra-ui/core';
import { MenuItem } from './MenuItem';

const propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
};
const defaultProps = {
  direction: 'left',
};

export const Menu = ({ direction }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack spacing="0" w="100%">
      <MenuItem
        direction={direction}
        to="/wizard"
      >
        Wizard
      </MenuItem>
      <MenuItem
        direction={direction}
        to="/job-posting"
      >
        Job Posting 🧙‍♂️
      </MenuItem>

      <MenuItem
        direction={direction}
        to="/billing"
      >
        billing
      </MenuItem>
      <MenuItem
        direction={direction}
        to="/resume"
      >
        resume
      </MenuItem>
      <MenuItem
        direction={direction}
        to="/apply-now"
      >
        apply-now
      </MenuItem>
      <Flex justifyContent={direction === 'left' ? 'flex-start' : 'flex-end'} px="6" pt="8">
        <Stack isInline align="center" mb="1">
          <Icon name="moon" size="14px" opacity={colorMode !== 'dark' ? '0.3' : null} />
          <Switch
            size="md"
            isChecked={colorMode === 'light'}
            onChange={toggleColorMode}
            color="none"
          />
          <Icon name="sun" size="14px" opacity={colorMode !== 'light' ? '0.3' : null} />
        </Stack>
      </Flex>
    </Stack>
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
