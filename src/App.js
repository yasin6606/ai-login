import React, {useReducer} from "react";
import {BrowserRouter} from 'react-router-dom';
import RoutesComponent from "./Routes/RoutesComponent";
import RoutesList from "./Routes/RoutesList";
import Paper from "@material-ui/core/Paper";
import UsersContextAPI, {defaultValues} from "./ContextAPI/UsersContextAPI";
import UsersReducer from "./Reducers/UsersReducer/UsersReducer";

const App = () => {

    const [prevState, dispatch] = useReducer(UsersReducer, defaultValues);

    return <>
        <UsersContextAPI.Provider value={{prevState, dispatch}}>
            <Paper square={true} className="h-100 w-100 overflow-hidden position-absolute bg-img">
                <BrowserRouter>
                    <RoutesComponent routes={RoutesList}/>
                </BrowserRouter>
            </Paper>
        </UsersContextAPI.Provider>
    </>;
};

export default App;