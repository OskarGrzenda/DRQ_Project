import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//joining header, footer and content classes to App.js
import { Addnewitem } from './components/addnewitem';
import { Wishlist } from './components/wishlist';
import { Headphones } from './components/headphones';
import { Phones } from './components/phones';
import { Home } from './components/home';
import { Update } from './components/update';

import 'bootstrap/dist/css/bootstrap.min.css';
//importing navbar
import {Navbar, Nav} from 'react-bootstrap';
//importing browserrouter
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      //router encapsulates the whole div
      <Router>
      <div className="App">
        <Navbar  bg="light" variant="light">
          <Navbar.Brand href="#home">MyTech</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="/phones">Phones</Nav.Link> */}
            <Nav.Link href="/headphones">HeadPhones</Nav.Link>
            <Nav.Link href="/wishlist">Wishlist</Nav.Link>
            <Nav.Link href="/addnewitem">Addnewitem</Nav.Link>
          </Nav>
        </Navbar>

        <br/>
        <switch>
        <Route path ='/' component={Home} exact/>
        <Route path ='/phones' component={Phones} exact/>
        <Route path ='/headphones' component={Headphones} exact/>
        <Route path ='/wishlist' component={Wishlist} exact/>
        <Route path ='/addnewitem' component={Addnewitem} exact/>
        <Route path='/update/:id' component={Update}></Route>
        </switch>

      </div>
      </Router>
    );
  }
}
export default App;
