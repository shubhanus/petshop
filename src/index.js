import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory } from "react-router";


import Layout from "./components/Layout";
import bref from "./components/PetBref";
import './assets/styles/styles.scss';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <Route path="/bref" component={bref}/>
        </Route>
    </Router>, 
    document.getElementById('app')
);