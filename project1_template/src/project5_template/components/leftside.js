import React from 'react';
import "../../css/p5style.css";
import { makeStyles,Container, Typography } from '@material-ui/core';
import { Bookmark, ExitToApp, List, Home, Person, PhotoCamera, Settings, Storefront, TabletMac } from '@material-ui/icons';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const useStyle = makeStyles((theme) => ({
    container:{
        paddingTop:theme.spacing(10),
        height:"100vh",
        color:"white",
        backgroundColor:theme.palette.primary.main,
        position:"sticky",
        top:0,
        "& :hover":{
            color:"#740",

        },
        [theme.breakpoints.up("sm")]:{
            backgroundColor:"#fff",
            color:"#000",
            border:"1px solid #ff22",
            "& :hover":{
                color:theme.palette.primary.main,
                cursor:"pointer",
            }
        }

    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]:{
            cursor:"pointer",
            marginBottom:theme.spacing(2),
        }
    },
    icon:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.up("sm")]:{
            fontSize:18,
        }
    },
    text:{
        fontWeight:400,
        [theme.breakpoints.down("sm")]:{
            display:"none",
            backgroundColor:"none"
        },
    },
}))
const Leftbar = () => {
    const classess = useStyle();
    return (
        <>
            <Container className={classess.container}>
                <div className={classess.item}>
                    <Home className={classess.icon}/>
                    <Typography className={classess.text}>Home page</Typography>
                </div>
                <div className={classess.item}>
                    <Person className={classess.icon} />
                    <Typography className={classess.text}>Friends</Typography>
                </div>
                <div className={classess.item}>
                    <List className={classess.icon} />
                    <Typography className={classess.text}>Lists</Typography>
                </div>
                <div className={classess.item}>
                    <PhotoCamera className={classess.icon} />
                    <Typography className={classess.text}>Camera</Typography>
                </div>
                <div className={classess.item}>
                    <PlayCircleFilledIcon className={classess.icon} />
                    <Typography className={classess.text}>Videos</Typography>
                </div>
                <div className={classess.item}>
                    <TabletMac className={classess.icon} />
                    <Typography className={classess.text}>Apps</Typography>
                </div>
                <div className={classess.item}>
                    <Bookmark className={classess.icon} />
                    <Typography className={classess.text}>Collection</Typography>
                </div>
                <div className={classess.item}>
                    <Storefront className={classess.icon} />
                    <Typography className={classess.text}>Marketplace</Typography>
                </div>
                <div className={classess.item}>
                    <Settings className={classess.icon} />
                    <Typography className={classess.text}>Settings</Typography>
                </div>
                <div className={classess.item}>
                    <ExitToApp className={classess.icon} />
                    <Typography className={classess.text}>Exit</Typography>
                </div>
            </Container>
        </>
    )
}

export default Leftbar;
