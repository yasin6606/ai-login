import React from "react";
import Grid from "@material-ui/core/Grid";
import Login from "./Login";
import Divider from "@material-ui/core/Divider";
import poster from "./../../Public/Images/AI-Ransbotham-Speed-Artificial-Intelligence-1200.jpg";

const Index = () => {
    return <>
        <Grid container={true} className="h-100 align-items-center justify-content-center">
            <Grid item={true} className="h-75 w-75 bg-transparency-color rounded rounded-3">
                <Grid container={true}
                      className="h-100 justify-content-center justify-content-lg-between px-lg-2 justify-content-xl-around">
                    <Grid className="d-none d-lg-flex w-50 h-100">
                        <img src={poster} className="py-5 rounded h-100 w-100"/>
                    </Grid>
                    <Divider variant="fullWidth"/>
                    <Grid>
                        <Login/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>;
};

export default Index;