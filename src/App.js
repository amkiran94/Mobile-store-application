import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Details from './Components/Details'
import Cart from './Components/Cart/Cart'
import Default from './Components/Default'
import Modal from './Components/Modal'
import { ProductProvider } from './Components/ProductProvider'

function App() {
  return (
    <ProductProvider>
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/cart" component={Cart} />
            <Route path="/details" component={Details} />
            <Route component={Default} />
          </Switch>
          <Modal/>
        </React.Fragment>
      </Router>
    </ProductProvider>
  );
}

export default App;