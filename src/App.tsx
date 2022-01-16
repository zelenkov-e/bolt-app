import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/NavBar"
import { NavbarItems } from "./common/constants";

import './global.scss'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                {Object.keys(NavbarItems).map((key) => {
                    return (
                        <Route exact key={key} path={`/${key}`}>
                            <div>{NavbarItems[`${key}`]}</div>
                        </Route>
                    )
                })}
            </Switch>
        </BrowserRouter>
    )
}

export default App 