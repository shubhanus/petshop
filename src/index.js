import React from "react";
import {render} from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

import {Router, Route, hashHistory } from "react-router";

import Layout from "./components/Layout";
import bref from "./components/PetBref";
import './assets/styles/styles.scss';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <Route path="/bref" component={bref}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);