import React from 'react'
import Navbar from './components/Navbar';
import Leftbar from './components/leftside';
import Rightbar from './components/rightsidebar';
import Add from "./components/addbutton";
import Feed from './components/Feed';
import { Grid,makeStyles } from '@material-ui/core';
const useStyle = makeStyles((theme) => ({
    right:{
        [theme.breakpoints.down("sm")]:{
            display:"none"
        }
    }
}));
// import Post from './components/post';

const Main = () => {
    const classess = useStyle();
    return (<>
            <Navbar />
            <Grid container>
                <Grid item sm={2}>
                    <Leftbar />
                </Grid>
                <Grid item sm={7}>
                    <Feed />
                </Grid>
                <Grid item sm={2} className={classess.right}>
                    <Rightbar />
                </Grid>
            </Grid>
            
            
            <Add/>
        </>) 
}

export default Main;
