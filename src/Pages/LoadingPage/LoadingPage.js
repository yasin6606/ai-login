import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingPage = () => {

    return <>
        <Grid container={true} className="h-100 justify-content-center">
            <Grid item={true} className="align-self-center">
                <Box display="flex" alignItems="center">
                    <span className="px-3">
                       <CircularProgress/>
                    </span>
                    <Typography
                        children="Page Loading ..."
                        display="inline"
                    />
                </Box>
            </Grid>
        </Grid>
    </>;
};

export default LoadingPage;