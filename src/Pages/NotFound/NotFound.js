import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {BiFileFind} from "react-icons/bi";

const NotFound = () => {

    return <>
        <Grid container={true} className="h-100 justify-content-center">
            <Grid item={true} className="align-self-center">
                <Box display="flex" alignItems="center">
                    <span className="px-3">
                       <BiFileFind className="text-danger" fontSize="xx-large"/>
                    </span>
                    <Typography
                        children="Page Not Found"
                        display="inline"
                        className="text-danger"
                        variant="h5"
                    />
                </Box>
            </Grid>
        </Grid>
    </>;
};

export default NotFound;