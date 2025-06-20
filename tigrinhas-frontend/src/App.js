import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CadastroAcompanhante from './components/CadastroAcompanhante';
import CadastroCriadorOnlyFans from './components/CadastroCriadorOnlyFans';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/cadastro-acompanhante" component={CadastroAcompanhante} />
          <Route path="/cadastro-criador-onlyfans" component={CadastroCriadorOnlyFans} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
