import React from "react";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import routes from "./routes";


function AppRouter() {
    return (
        <Router>
            <Switch>
                {
                    routes.map(route => (
                        <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        render={route.component}
                        />
                    ) )
                }
                <Redirect to={"/404"} />
            </Switch>
            
        </Router>
    )
}

export default AppRouter
