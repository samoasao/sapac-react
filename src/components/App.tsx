import React from 'react';

import { Route, Switch } from "react-router-dom"

import Navbar from "./Navbar";
import MainContainer from "./MainContainer";
import Program from "../pages/Program"

function App() {
    return (
        <React.Fragment>
            <Route path="/program">
                <Program />
            </Route>
            <Navbar />
            <MainContainer />
        </React.Fragment>
    );
}
export default App;