import { Box, Container, Grid } from '@chakra-ui/react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './components/home';
import Navigation from './components/navigation';
import React from 'react';

function App() {
  return (
    <HashRouter>
      <Navigation />

      <Box textAlign="center" fontSize="xl">
        <Grid minH="10vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>
      </Box>
      <Container>
        <Box>
          <Routes>
            <Route path="/welcome" exact={true} element={<Home />} />
          </Routes>
        </Box>
      </Container>
    </HashRouter>
  );
}

export default App;
