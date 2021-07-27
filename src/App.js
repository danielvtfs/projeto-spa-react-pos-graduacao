import React from 'react';
import './styles.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import Cursos from './pages/Cursos/Cursos';
import Luthier from './pages/Luthier/Luthier';
import Contato from './pages/Contato/Contato';
import Album from './pages/Album/Album';
import SaibaMais from './pages/SaibaMais/SaibaMais';
import Videos from './pages/Videos/Videos';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/cursos" component={Cursos} />
        <Route path="/luthier" component={Luthier} />
        <Route path="/contato" component={Contato} />
        <Route path="/album" component={Album} />
        <Route path="/saibaMais" component={SaibaMais} />
        <Route path="/videos" component={Videos} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
