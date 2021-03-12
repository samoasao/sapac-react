import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import MainContainer from "./MainContainer";

function App() {

  return (
    <React.Fragment>
      <Switch>
        <Route path="/program">
          <Redirect to={process.env.PUBLIC_URL + "/program.pdf"} />
        </Route>
        <Route
          path={process.env.PUBLIC_URL + "/program.pdf"}
          render={() => {
            window.location.reload();
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
