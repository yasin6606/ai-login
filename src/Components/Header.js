import React, {useContext, useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import {FaUserCircle} from "react-icons/fa";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {IoMdExit} from "react-icons/io";
import ListItemText from "@material-ui/core/ListItemText";
import UsersContextAPI from "../ContextAPI/UsersContextAPI";
import {LOGOUT} from "../Reducers/UsersReducer/UsersTypes";

const Header = () => {

    const [openMenu, setOpenMenu] = useState(null);

    const {dispatch} = useContext(UsersContextAPI);

    //show menu
    const menuHandler = e => {
        setOpenMenu(e.currentTarget);
    };

    // close menu
    const closeMenuHandler = () => {
        setOpenMenu(null);
    };

    // logout handler by sending dispatch
    const logoutHandler = () => {
        dispatch({type: LOGOUT});
    };

    return <>
        <AppBar position="relative" elevation={10}>
            <Toolbar className="justify-content-between">
                <Box>
                    <Typography
                        children="Users"
                        variant="h6"
                    />
                </Box>
                <Box>
                    <Icon className="mouse-pointer" onClick={menuHandler}>
                        <FaUserCircle/>
                    </Icon>
                    <Menu
                        anchorEl={openMenu}
                        open={!!openMenu}
                        onClose={closeMenuHandler}
                    >
                        <MenuItem>
                            <Typography
                                children="email and password"
                                variant="subtitle2"
                            />
                        </MenuItem>
                        <Divider/>
                        <MenuItem onClick={logoutHandler}>
                            <ListItemIcon>
                                <IoMdExit/>
                            </ListItemIcon>
                            <ListItemText>
                                <Typography
                                    children="Logout"
                                    variant="subtitle2"
                                    color="error"
                                />
                            </ListItemText>
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    </>;
};

export default Header;