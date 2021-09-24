import React, {useContext, useState, useReducer} from "react";
import RestAPIContext from "../../ContextAPI/ContextAPI";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import {MdPersonAdd} from "react-icons/md"
import {AiOutlineMail} from "react-icons/ai";
import {RiLockPasswordLine} from "react-icons/ri";
import {LOGIN} from "../../Reducers/UsersReducer/UsersTypes";
import {useHistory} from "react-router";
import UsersContextAPI from "./../../ContextAPI/UsersContextAPI";

const Login = () => {

    const [getValues, setGetValue] = useState({
        email: {val: undefined, valid: undefined},
        password: {val: undefined, valid: undefined}
    });

    const [showMsg, setShowMsg] = useState({show: false, msg: ""});

    const [loading, setLoading] = useState(false);

    const {loginRestAPI} = useContext(RestAPIContext);

    const {dispatch} = useContext(UsersContextAPI);

    const {push} = useHistory();

    // get value of email input
    const getEmailHandler = e => {
        const email = e.currentTarget.value;

        if (email.length === 0) {
            setGetValue({...getValues, email: {val: undefined, valid: false}});

            return;
        }

        setGetValue({...getValues, email: {val: email, valid: true}});
    };

    // get value of password input
    const getPasswordHandler = e => {
        const password = e.currentTarget.value;

        if (password.length === 0) {
            setGetValue({...getValues, password: {val: undefined, valid: false}});

            return;
        }

        setGetValue({...getValues, password: {val: password, valid: true}});
    };

    // login handler
    const loginHandler = async () => {
        setLoading(true);

        // if email or password is incorrect show alert and don't send request to server
        if (!getValues.email.valid || !getValues.password.valid) {
            setShowMsg({show: true, msg: "E-mail or Password Is Incorrect"});

            return;
        }

        try {
            const {data} = await loginRestAPI({
                email: getValues.email.val.trim(),
                password: getValues.password.val.trim()
            });
            setLoading(false);

            dispatch({type: LOGIN, data});

            // send user to users page
            push("/dashboard");
        } catch (e) {
            setLoading(false);
            setShowMsg({show: true, msg: "E-mail or Password Is Incorrect"});
            console.error(e);
            // TODO show login error
        }
    };

    return <>
        <Grid container={true} justifyContent="center" className="h-100">
            <Grid item={true} className="d-flex flex-column justify-content-center py-5">
                <Card className="border px-5 h-100 d-grid login-card-background">
                    <CardHeader
                        title="Login To System"
                        subheader="System Name"
                    />
                    <CardContent>
                        <Grid container={true} direction="column">
                            <Grid item={true} className="my-3 d-flex align-items-baseline">
                                <AiOutlineMail className="mx-2"/>
                                <TextField
                                    label="E-mail"
                                    type="email"
                                    fullWidth={true}
                                    onChange={getEmailHandler}
                                    error={getValues.email.valid === false}
                                />
                            </Grid>
                            <Grid item={true} className="my-3 d-flex align-items-baseline">
                                <RiLockPasswordLine className="mx-2"/>
                                <TextField
                                    label="Password"
                                    type="password"
                                    fullWidth={true}
                                    onChange={getPasswordHandler}
                                    error={getValues.password.valid === false}
                                />
                            </Grid>
                            <Grid item={true}>
                                <div className={!showMsg.show ? "d-none" : "alert alert-danger"}>
                                    <Typography
                                        children={showMsg.msg}
                                        variant="subtitle2"
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Grid container={true} direction="column">
                            <Grid item={true} className="py-2 align-self-center">
                                <Link to="" className="text-decoration-none">
                                    <Icon fontSize="small" className="px-2">
                                        <MdPersonAdd/>
                                    </Icon>
                                    <Typography
                                        children="Register"
                                        align="center"
                                        display="inline"
                                    />
                                </Link>
                            </Grid>
                            <Grid item={true} className="align-self-center py-2">
                                <Button
                                    onClick={loginHandler}
                                    variant="outlined"
                                    className="bg-primary text-white"
                                    disabled={loading}
                                >
                                    {
                                        !loading ? <Typography
                                                children="Login"
                                                variant="button"
                                                align="center"
                                            />
                                            :
                                            <div className="spinner-border"/>
                                    }
                                </Button>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </>;
};

export default Login;