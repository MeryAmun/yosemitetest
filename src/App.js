import { Box, Container, Grid } from '@chakra-ui/react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './components/home';
import Navigation from './components/navigation';
import PokemonDetails from './components/pokemonDetails';
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
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/pokemon/:id" component={PokemonDetails} />
          </Switch>
        </Box>
      </Container>
    </HashRouter>
  );
}

export default App;
