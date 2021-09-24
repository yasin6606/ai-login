import React from "react";
import {Switch} from "react-router";
import RoutesManagementComponent from "./RoutesManagementComponent";

const RoutesComponent = ({routes}) => {

    return <>
        <Switch>
            {
                routes.map(eachRoute => <RoutesManagementComponent key={eachRoute.path} {...eachRoute} />)
            }
        </Switch>
    </>
};

export default RoutesComponent;