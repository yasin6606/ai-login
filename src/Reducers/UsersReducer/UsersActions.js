// login action
export const loginAction = (prevState, {data: {token}}) => {
    sessionStorage.setItem("isAuthenticated", true);
    sessionStorage.setItem("token", token);

    return {
        ...prevState,
        isAuthenticated: true,
        token
    };
};

// logout action
export const logoutAction = () => {
    sessionStorage.clear();

    return {
        isAuthenticated: false,
        token: undefined
    };
};