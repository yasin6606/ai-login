import React, {useEffect, useState, useContext} from "react";
import ContextAPI from "../../ContextAPI/ContextAPI";
import Grid from "@material-ui/core/Grid";
import MUIDataTables from "mui-datatables";
import {Avatar, DialogContent} from "@material-ui/core";
import UserCard from "./UserCard";
import Dialog from '@material-ui/core/Dialog';

const Users = () => {

    const [tableAPIs, setTableAPIs] = useState({
        columns: [],
        options: {}
    });
    const [users, setUsers] = useState({
        data: [],
        page: 0,
        per_page: 6,
        total: 12
    });
    const [dialog, setDialog] = useState({show: false, content: undefined});

    const {fetchUsersListRestAPI} = useContext(ContextAPI);

    // fetch users data from server
    const fetchData = (pageNum = 1) => {
        (
            async () => {
                const {data} = await fetchUsersListRestAPI(pageNum);

                setUsers({...users, data: [...users.data, ...data.data], page: --data.page});
            }
        )();
    };

    const tableOptions = {
        count: users.total,
        elevation: 24,
        filter: false,
        page: users.page,
        rowsPerPage: users.per_page,
        rowsPerPageOptions: [2, 4, 6],
        search: false,
        onRowClick: rowData => {
            setDialog({show: !dialog.show, content: <UserCard rowData={rowData} close={closeDialog}/>});
        },
        onChangePage: currentPageNum => {
            fetchData(++currentPageNum);
        }
    };

    const closeDialog = () => {
        setDialog({show: false, content: undefined});
    };

    useEffect(() => {
        const columns = [
            {
                name: "avatar",
                label: "Avatar",
                options: {
                    filter: true,
                    sort: true,
                    customBodyRender: value => {
                        return <Avatar src={value}/>
                    },
                },
            },
            {
                name: "first_name",
                label: "First Name",
                options: {
                    filter: true,
                    sort: true
                },
            },
            {
                name: "last_name",
                label: "Last Name",
                options: {
                    filter: true,
                    sort: true
                },
            },
            {
                name: "email",
                label: "E-mail",
                options: {
                    filter: true,
                    sort: true
                },
            }
        ];

        setTableAPIs({columns, options: tableOptions});

        fetchData();
    }, []);

    return <>
        <Grid container={true} direction="column" className="h-100 align-items-center justify-content-center">
            <Grid item={true} className="w-75 border">
                <MUIDataTables
                    title="List of Users"
                    columns={tableAPIs.columns}
                    data={users.data}
                    options={tableOptions}
                />
                <Dialog
                    open={dialog.show}
                    onClose={closeDialog}
                    fullWidth={true}
                    classes={{paper: "bg-transparent"}}
                >
                    <DialogContent>
                        {dialog.content}
                    </DialogContent>
                </Dialog>
            </Grid>
        </Grid>
    </>;
};

export default Users;