import Home from '../pages/Home'
import Founders from '../pages/Founders'
import PastShows from '../pages/PastShows'
import { Route, Switch } from "react-router-dom"
import Tickets from '../pages/Tickets'

const MainContainer = () => {
    return (
        
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/founders">
                <Founders />
            </Route>
            <Route path="/past-shows">
                <PastShows />
            </Route>
            <Route path="/tickets">
                <Tickets />
            </Route>
        </Switch>
    )
}
export default MainContainer;