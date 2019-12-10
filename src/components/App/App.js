import React from "react";
import { Header } from "../Header/Header";
import {  BrowserRouter as Router } from "react-router-dom";
import { Accordion } from "../Accordion/Accordion";
import {Footer} from '../Footer/Footer';
import "./App.css";
import 'bulma/css/bulma.css'
import {Routes} from '../Routes'

const App = props => {
  return (
    <Router>
      <React.Fragment>
        <Header>THE REACT COMMENTS</Header>
        <Routes></Routes>
        <Footer/>
      </React.Fragment>
    </Router>
  );
};

export { App };
