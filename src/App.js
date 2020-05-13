import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'antd/dist/antd.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
// React Router Import
import { Switch, Route } from 'react-router-dom';
// Import Pages
import Home from './components/pages/Home';
import Order from './components/pages/Order';
import Feedback from './components/pages/Feedback';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';
import SignUp from "./components/pages/SignUp";
import Admin from "./components/pages/Admin";
import Cart from "./components/pages/Cart";
import Rejister from "./components/pages/Rejister";
import UpdatePizza from "./components/UpdatePizza";
import Account from "./components/pages/Acount";


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={Order} />
          <Route path="/contacts" component={Feedback} />
          <Route path="/details" component={Details} />
          <Route path="/signup" component={SignUp} />
          <Route path="/admin" component={Admin} />
          <Route path="/cart" component={Cart} />
          <Route path="/register" component={Rejister} />
          <Route path="/updatepizza" component={UpdatePizza} />
          <Route path="/account" component={Account} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
