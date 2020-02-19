import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  ThemeProvider, ColorModeProvider, CSSReset, Box, Stack,
} from '@chakra-ui/core';

import theme from './theme';
import { NavBar } from './layout/NavBar';
import { Wizard } from './pages/Wizard';
import { JobWizard } from './pages/JobWizard';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Stack minH="100vh" m="auto" overflow="hidden" flexDirection={{ base: 'column', lg: 'row' }}>
            <NavBar />
            <Box flex="1" w="100%" position="relative">
              <Route path="/wizard" exact>
                <Wizard />
              </Route>
              <Route path="/job-wizard" exact>
                <JobWizard />
              </Route>
            </Box>
          </Stack>
        </ColorModeProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
