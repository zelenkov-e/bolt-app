import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/NavBar"
import Layout from "./pages/Layout";

import './global.scss'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/:page" component={Layout} />
            </Switch>
        </BrowserRouter>
    )
}

export default App 