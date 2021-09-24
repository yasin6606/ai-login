import React, {Suspense, useContext} from "react";
import {Route, Redirect} from 'react-router-dom';
import UsersContextAPI from "./../ContextAPI/UsersContextAPI";

const RoutesManagementComponent = route => {

    const {prevState} = useContext(UsersContextAPI);

    // handler for PRIVATE routes
    const protectedRoutesHandler = props => {

        return <route.component {...props} routes={route.routes}/>
    };

    // handler for PUBLIC routes
    const publicRoutesHandler = props => {

        // if users that logged in successfully want to go to login route, redirect them to dashboard route (dashboard route here is users route)
        if (prevState.token && route.path === "/login")
            return <Redirect to="/users"/>

        // if user doesn't authenticated and wants to go to private routes, redirect to login route
        if (!prevState.token && route.needAuthenticating)
            return <Redirect to="/login"/>

        if (route.redirect)
            return <Redirect to={route.redirect}/>

        return <route.component {...props} routes={route.routes}/>
    };

    return <>
        <Suspense fallback={route.fallback}>
            <Route
                path={route.path}
                render={prevState.token && route.needAuthenticating ? protectedRoutesHandler : publicRoutesHandler}
            />
        </Suspense>
    </>
};
export default RoutesManagementComponent;