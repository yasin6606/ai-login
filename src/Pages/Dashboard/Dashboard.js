import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../../Components/Header";
import Users from "../Users/Users";
import "./../../Styles/Dashboard.css";

const Dashboard = () => {

    return <>
        <Grid container={true} direction="column" className="h-100 d-grid dashboard-griding">
            <Grid item={true}>
                <Header/>
            </Grid>
            <Grid item={true}>
                <Users/>
            </Grid>
        </Grid>
    </>;
};

export default Dashboard;