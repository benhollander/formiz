import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  ThemeProvider, ColorModeProvider, CSSReset, Box, Stack,
} from '@chakra-ui/core';

import theme from './theme';
import { NavBar } from './layout/NavBar';
import { Wizard } from './pages/Wizard';
import { JobPosting } from './pages/JobPosting';
import { ApplyNow } from './pages/ApplyNow';
import { Billing } from './pages/Billing';
import { ResumeUpload } from './pages/ResumeUpload';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Stack minH="100vh" m="auto" overflow="hidden" flexDirection={{ base: 'column', lg: 'row' }} dir="ltr">
            <NavBar />
            <Box flex="1" w="100%" position="relative">
              <Route path="/wizard" exact>
                <Wizard />
              </Route>
              <Route path="/job-posting" exact>
                <JobPosting />
              </Route>
              <Route path="/apply-now" exact>
                <ApplyNow />
              </Route>
              <Route path="/billing" exact>
                <Billing />
              </Route>
              <Route path="/resume" exact>
                <ResumeUpload />
              </Route>
            </Box>
          </Stack>
        </ColorModeProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
