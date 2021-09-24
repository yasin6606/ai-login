import {LOGIN, LOGOUT} from "./UsersTypes";
import {loginAction, logoutAction} from "./UsersActions";
import {defaultValues} from "../../ContextAPI/UsersContextAPI";

const UsersReducer = (prevState = defaultValues, action) => {
    switch (action.type) {
        case LOGIN:
            return loginAction(prevState, action);
        case LOGOUT:
            return logoutAction();
        default:
            return prevState;
    }
};

export default UsersReducer;