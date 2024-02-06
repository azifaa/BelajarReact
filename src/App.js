import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import NavbarComp  from './pages/NavbarComp';
// import TesJson from './pages/json';



const App = () => {
  return (
    <Router>
      <NavbarComp/>
      {/* <TesJson/> */}
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/product" component={ProductDetail} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;
