import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import {BsThreeDotsVertical} from "react-icons/bs";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import moment from "moment/moment";
import Grid from "@material-ui/core/Grid";

const UserCard = ({rowData, close}) => {

    // return appropriate key for user's info
    const titleHandler = index => {
        switch (index) {
            case 1:
                return "First Name: ";
            case 2:
                return "Last Name: ";
            case 3:
                return "E-mail: ";
            default:
                return null;
        }
    };

    // each row of user's data
    const contentRows = (userData, index) => {
        if (index === 0)
            return null;

        return <Grid key={userData} item={true} className="d-flex my-1 my-md-3 p-md-2">
            <div className="col col-6">
                <Typography
                    children={titleHandler(index)}
                    className="fw-bold"
                />
            </div>
            <div className="col col-6">
                <Typography
                    children={rowData[index]}
                />
            </div>
        </Grid>;
    };

    return <>
        <Card>
            <CardHeader
                avatar={rowData[0]}
                title={rowData[1]}
                action={
                    <IconButton>
                        <BsThreeDotsVertical title="Edit"/>
                    </IconButton>
                }
                subheader={moment().format("YYYY MMM DD ")}
            />
            <Divider className="bg-primary" variant="middle"/>
            <CardContent>
                <Grid container={true} direction="column">
                    {rowData.map((x, i) => contentRows(x, i))}
                </Grid>
            </CardContent>
            <Divider className="bg-primary" variant="middle"/>
            <CardActions>
                <Button variant="contained" color="secondary" onClick={close}>
                    <Typography
                        children="Close"
                        variant="button"
                    />
                </Button>
            </CardActions>
        </Card>
    </>;
};

export default UserCard;


// <Grid item={true} className="d-flex my-1 my-md-3 p-md-2">
//     <div className="col col-6">
//         <Typography
//             children="First Name: "
//             className="fw-bold"
//         />
//     </div>
//     <div className="col col-6">
//         <Typography
//             children={rowData[1]}
//         />
//     </div>
// </Grid>
// <Grid item={true} className="d-flex my-1 my-md-3 p-md-2">
//     <div className="col col-6">
//         <Typography
//             children="Last Name: "
//             className="fw-bold"
//         />
//     </div>
//     <div className="col col-6">
//         <Typography
//             children={rowData[2]}
//         />
//     </div>
// </Grid>
// <Grid item={true} className="d-flex my-1 my-md-3 p-md-2">
//     <div className="col col-6">
//         <Typography
//             children="E-mail: "
//             className="fw-bold"
//         />
//     </div>
//     <div className="col col-6">
//         <Typography
//             children={rowData[3]}
//         />
//     </div>
// </Grid>