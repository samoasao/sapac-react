import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import MainContainer from "./MainContainer";

function App() {
  const reload = () => window.location.reload();

  return (
    <React.Fragment>
      <Switch>
        <Route path="/program">
          <Redirect to={process.env.PUBLIC_URL + "/program.pdf"} />
        </Route>
        <Route
          path="/program.pdf"
          render={() => {
            reload();
            return <React.Fragment />;
          }}
        ></Route>
        <Route path="*">
          <Navbar />
          <MainContainer />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
export default App;
