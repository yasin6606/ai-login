import axios from "axios";

class APIHelper {
    constructor() {
        const {REACT_APP_HOST} = process.env;

        // base URL of server restful API
        // this.serverAddressAPI = `http://${REACT_APP_HOST}/api`;
        this.serverAddressAPI = `https://reqres.in/api`;

        this.fetchUserInformationHandler();
    };

    // restfull API by axios library (Private method)
    restfulAPIHandler = (method, url, data, isImg, config) => {

        const headers = {
            'Authorization': this.userInformation && this.userInformation.token,
            'permissions': this.userInformation && this.userInformation.permissions,
        };

        Object.assign(headers, config);

        return axios({
            baseURL: this.serverAddressAPI,
            method,
            url,
            data,
            responseType: isImg ? "blob" : null,
            // headers
        });
    };

    // ***     EndPoints Methods      ***

    loginRestAPI = data => {
        return this.restfulAPIHandler("post", "/login", data);
    };

    // fetch user's information from server
    fetchUserInformationHandler = () => {

    };

    // fetch user's information from server
    fetchUsersListRestAPI = (pageNumber = 1) => {
        return this.restfulAPIHandler("get", `/users?page=${pageNumber}`);
    };
}

export default new APIHelper();