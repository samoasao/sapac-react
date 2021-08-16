import { Route, Switch } from "react-router-dom"

//Pages
import Home from '../pages/Home'
import Board from '../pages/Board'
import PastShows from '../pages/PastShows/'
import Tickets from '../pages/Tickets'
import Auditions from '../pages/Auditions'
import Founders from '../pages/Founders'
import Contact from "../pages/Contact"
import SupportIndividual from "../pages/SupportIndividual"
import SupportCorporate from "../pages/SupportCorporate"
import ForeverPlaid from "../pages/PastShows/ForeverPlaid"
import NextToNormal from "../pages/NextToNormal"


const MainContainer = () => {
    return (

        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/past-shows">
                <PastShows />
            </Route>
            <Route path="/tickets">
                <Tickets />
            </Route>
            <Route path="/auditions">
                <Auditions />
            </Route>
            <Route path="/founders">
                <Founders />
            </Route>
            <Route path="/board">
                <Board />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/support-individual">
                <SupportIndividual />
            </Route>
            <Route path="/support-corporate">
                <SupportCorporate />
            </Route>
            <Route path="/plaid">
                <ForeverPlaid />
            </Route>
            <Route path="/ntn">
                <NextToNormal />
            </Route>
        </Switch>
    )
}
export default MainContainer;