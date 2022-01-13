import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

//Pages
import Home from "../pages/Home";
import Board from "../pages/Board";
import PastShows from "../pages/PastShows/";
import Tickets from "../pages/Tickets";
import Auditions from "../pages/Auditions";
import Founders from "../pages/Founders";
import Contact from "../pages/Contact";
import SupportIndividual from "../pages/SupportIndividual";
import SupportCorporate from "../pages/SupportCorporate";
import ForeverPlaid from "../pages/PastShows/pages/ForeverPlaid";
import NextToNormal from "../pages/PastShows/pages/NextToNormal";
import DesertView from "../pages/Venues/DesertView";
import PlaidTidings from "../pages/PastShows/pages/PlaidTidings";

const MainContainer = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Helmet>
          <title>SAPAC</title>
        </Helmet>
        <Home />
      </Route>
      <Route path="/past-shows">
        <Helmet>
          <title>Past Shows | SAPAC</title>
        </Helmet>
        <PastShows />
      </Route>
      <Route path="/tickets">
        <Helmet>
          <title>Tickets | SAPAC</title>
        </Helmet>
        <Tickets />
      </Route>
      <Route path="/desertView">
        <Helmet>
          <title>Desert View Auditorium | SAPAC</title>
        </Helmet>
        <DesertView />
      </Route>
      <Route path="/auditions">
        <Helmet>
          <title>Auditions | SAPAC</title>
        </Helmet>
        <Auditions />
      </Route>
      <Route path="/founders">
        <Helmet>
          <title>Our Founders | SAPAC</title>
        </Helmet>
        <Founders />
      </Route>
      <Route path="/board">
        <Helmet>
          <title>Board of Directors | SAPAC</title>
        </Helmet>
        <Board />
      </Route>
      <Route path="/contact">
        <Helmet>
          <title>Contact Us | SAPAC</title>
        </Helmet>
        <Contact />
      </Route>
      <Route path="/support-individual">
        <Helmet>
          <title>Donations | SAPAC</title>
        </Helmet>
        <SupportIndividual />
      </Route>
      <Route path="/support-corporate">
        <Helmet>
          <title>Donations | SAPAC</title>
        </Helmet>
        <SupportCorporate />
      </Route>
      <Route path="/plaid">
        <Helmet>
          <title>Forever Plaid | SAPAC</title>
        </Helmet>
        <ForeverPlaid />
      </Route>
      <Route path="/ntn">
        <Helmet>
          <title>Next To Normal | SAPAC</title>
        </Helmet>
        <NextToNormal />
      </Route>
      <Route path="/plaidTidings">
        <Helmet>
          <title>Plaid Tidings | SAPAC</title>
        </Helmet>
        <PlaidTidings />
      </Route>
    </Switch>
  );
};
export default MainContainer;
