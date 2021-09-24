import React, {lazy} from "react";
import LoadingPage from "../Pages/LoadingPage/LoadingPage";

const RoutesList = [
    {
        path: "/",
        exact: true,
        redirect: "/login",
        needAuthenticating: false,
        fallback: <LoadingPage/>
    },
    {
        path: "/login",
        component: lazy(() => import("./../Pages/Login/Index")),
        exact: true,
        needAuthenticating: false,
        fallback: <LoadingPage/>
    },
    {
        path: "/dashboard",
        component: lazy(() => import("./../Pages/Dashboard/Dashboard")),
        exact: true,
        needAuthenticating: true,
        fallback: <LoadingPage/>,
        routes: [
            {
                path: "/dashboard/users",
                component: lazy(() => import("./../Pages/Users/Users")),
                exact: true,
                needAuthenticating: true,
                fallback: <LoadingPage/>
            }
        ]
    },
    {
        path: "/*",
        component: lazy(() => import("./../Pages/NotFound/NotFound")),
        exact: false,
        fallback: <LoadingPage/>,
    }
];

export default RoutesList