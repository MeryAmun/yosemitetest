import { Box, Container, Grid } from '@chakra-ui/react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './components/home';
import MyTeam from './components/myTeam';
import Navigation from './components/navigation';
import PokemonDetails from './components/pokemonDetails';
import React from 'react';
import Search from './components/search';

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
            <Route path="/team" component={MyTeam} />
            <Route path="/search" component={Search} />
          </Switch>
        </Box>
      </Container>
    </HashRouter>
  );
}

export default App;
