import { Route, Switch } from "react-router-dom"

//Pages
import Home from '../pages/Home'
import Board from '../pages/Board'
import PastShows from '../pages/PastShows'
import Tickets from '../pages/Tickets'
import Auditions from '../pages/Auditions'
import Founders from '../pages/Founders'
import Contact from "../pages/Contact"

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
        </Switch>
    )
}
export default MainContainer;