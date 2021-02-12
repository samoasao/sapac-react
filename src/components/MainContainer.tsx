import Home from '../pages/Home'
import Founders from '../pages/Founders'
import { Route, Switch } from "react-router-dom"

const MainContainer = () => {
    return (
        
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/founders">
                <Founders />
            </Route>
        </Switch>
    )
}
export default MainContainer;