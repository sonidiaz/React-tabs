import React from "react";
import { Header } from "../Header/Header";
import { Accordion } from "../Accordion/Accordion";
import {Footer} from '../Footer/Footer';
import "./App.css";
import 'bulma/css/bulma.css'

const App = props => {
  return (
    <React.Fragment>
      <Header>THE REACT COMMENTS</Header>
      <Accordion />
      <Footer/>
    </React.Fragment>
  );
};

export { App };
