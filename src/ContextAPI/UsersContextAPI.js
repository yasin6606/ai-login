import {createContext} from "react";

export const defaultValues = {
    isAuthenticated: sessionStorage.getItem("isAuthenticated") || false,
    token: sessionStorage.getItem("token") || undefined
};

const UsersContextAPI = createContext(defaultValues);

export default UsersContextAPI;