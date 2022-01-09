import React,{useEffect, useState} from "react";
import { film } from "./Components/Films";
import Contactus from "./Components/Contact-us";
import Categoriemaper from "./Components/Categorie-maper";
import Home from "./Components/Films";
import Detail from "./Components/Detail";
import Bar from "./Components/Navbar";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import "./Components/styles.css";
import Acceuil from "./Components/acceuil";
import Series from "./Components/Movielist"
import axios from 'axios'
import Card from './Components/Card'
function App() {


      // console.log(response)
 


  return (
    <div className="App">

      {Bar()}
      
      <Router>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav"></ul>
        </nav>

        <Switch>
          <Route exact path="/" render={() => <Series/>} />
          <Route path="/movie/:id" render={() => <Detail movies={film} />} />
          <Route path="/categorie/:type" render={() => <Categoriemaper />} />
          <Route path="/contact-us" render={() => <Contactus />} />
          <Route exact path="/card" render={() => <Card />} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
