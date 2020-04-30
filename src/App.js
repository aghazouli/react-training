import React from 'react';
import { Navbar } from 'reactstrap';
import './App.css';
import NavbarBrand from "reactstrap/es/NavbarBrand";
import Menu from "./components/MenuComponent";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
        <Menu/>
    </div>
  );
}

export default App;
