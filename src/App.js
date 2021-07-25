import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Cursos from './pages/Cursos/Cursos';
import Luthier from './pages/Luthier/Luthier';
import Contato from './pages/Contato/Contato';
import CaixasDeSom from './pages/CaixasDeSom/CaixasDeSom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/cursos" component={Cursos} />
        <Route path="/luthier" component={Luthier} />
        <Route path="/contato" component={Contato} />
        <Route path="/caixasDeSom" component={CaixasDeSom} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
