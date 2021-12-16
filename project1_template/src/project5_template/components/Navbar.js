import React from 'react'
import {alpha, makeStyles} from '@material-ui/core';
import {AppBar, Toolbar, Typography,InputBase,Badge,Avatar,IconButton} from '@material-ui/core'
import { Search} from '@material-ui/icons';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import CancelIcon from '@material-ui/icons/Cancel';
const useStyle = makeStyles((theme) => ({
    Toolbar:{
        display:"flex",
        justifyContent:"space-between",
    },
    logolg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    logosm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    },
    search:{
        display:"flex",
        alignItems:"center",
        borderRadius : theme.shape.borderRadius,
        backgroundColor:alpha(theme.palette.common.white,0.15),
        width: "50%",
        marginLeft:theme.spacing(2),
        '& :hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        [theme.breakpoints.down("sm")]:{
            display:(props)=>(props.sropen ? 'flex' : 'none'),
            width:"70%",
        },
    },
    cancel:{
        [theme.breakpoints.up("sm")]:{
            display:"none",
        }
    },
    input:{
        color:"white",
        marginLeft:theme.spacing(1)
    },
    icon:{
        display:"flex",
        alignItems:"center",
    },
    badges:{
        marginRight:theme.spacing(2)
    },
    searchbutton:{
        marginRight:theme.spacing(2)
    }
}));
const Navbar = () => {
    const [sropen,setsropen] = React.useState(false)
    const classess = useStyle({sropen});
    return (
        <>
            <AppBar position="fixed">
                <Toolbar className={classess.Toolbar}>
                    <Typography variant="h4" component="span" className={classess.logolg}>Instagram</Typography>
                    <Typography variant="h4" component="span" className={classess.logosm}>Inst</Typography>
                    <div className={classess.search}>
                        <Search/>
                        <InputBase placeholder="Serach post" className={classess.input} />
                        <CancelIcon className={classess.cancel} onClick={() => setsropen(false)} />
                     </div>
                    <div className={classess.icon}>
                        <Search className={classess.searchbutton} onClick={() => {setsropen(true)}} />
                        <IconButton aria-label="show 4 mail" color="inherit" className={classess.badges}>
                            <Badge badgeContent={4} color="secondary">
                                <LabelImportantIcon />
                            </Badge>
                        </IconButton>
                        <IconButton edge="start" aria-label="show 8 notification" color="inherit" className={classess.badges}>
                            <Badge badgeContent={8} color="secondary">
                                <NotificationsActiveIcon />
                            </Badge>
                        </IconButton>
                        <IconButton className={classess.badges}>
                            <Badge color="danger">
                                <Avatar alt="Travis Howard" src="images/2.jpg" />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
