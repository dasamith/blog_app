import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {
    Link
} from "react-router-dom";

//import MenuIcon from '@material-ui/icons/MenuIcon';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 20,
    },
    menuButton: {
        marginRight: theme.spacing(20),
        marginLeft: theme.spacing(54)
    },
    title: {
        flexGrow: 20,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

                    </IconButton>
                    <Typography variant="h6" className="navbar-brand" href="/">
                        Home Page
          </Typography>
                    <Button variant="h6" color="inherit" className="navbar-brand" to="/about">
                        Creators Bio
      </Button>
                    <Link to="/NewPost"> New Blog Post Page! </Link>
                    <Button variant="h6" color="inherit" >Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}