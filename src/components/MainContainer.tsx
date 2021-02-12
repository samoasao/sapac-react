import Home from '../pages/Home'
import Founders from '../pages/Founders'
import PastShows from '../pages/PastShows'
import { Route, Switch } from "react-router-dom"
import Tickets from '../pages/Tickets'
import Auditions from '../pages/Auditions'

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
        </Switch>
    )
}
export default MainContainer;