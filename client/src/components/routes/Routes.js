import { Switch, Route } from 'react-router-dom'

import IndexPage from '../pages/Index/Index'
import Coasters from '../pages/Coasters/Coasters'
import CoasterDetails from '../pages/Coaster-details/Coaster-details'

const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/listado-montañas" render={() => <Coasters />} />
            <Route path="/detalles/:coaster_id" render={props => <CoasterDetails {...props} />} />
        </Switch>
    )
}

export default Routes