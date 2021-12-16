import React from 'react'
import { Container, Fab, makeStyles, Modal, Snackbar, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { TextField } from '@material-ui/core';
// import { MuiAlert } from '@material-ui/lab/Alert';
import MuiAlert from '@material-ui/lab/Alert';

const useStyle = makeStyles((theme) => ({
    fab: {
        margin: theme.spacing(2),
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
    container:{
        width:500,
        height:530,
        backgroundColor:"white",
        borderRadius:10,
        position:"absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        margin:"auto",
        [theme.breakpoints.down("sm")]:{
            width:"100vh",
            height:"100vw",
        },
        position:"fixed",
        top:0,
        [theme.breakpoints.up("sm")]:{
            height:249,
            width:390
        },
        form:{
            padding:theme.spacing(4),
        },
        item:{
            marginBottom:theme.spacing(2)
        },
    },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Adds = () => {
    const classess = useStyle();
    const [open, setOpen] = React.useState(false);
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
        setOpenSnackbar(true);
    };

    const handleClose = (event,reason) => {
        if(reason === "clickway"){
            return;
        }
        setOpen(false);
        setOpenSnackbar(false);
    };
    return (
        <>
            <Tooltip title="Add" aria-label="add">
                <Fab color="secondary" onClick={() => { handleOpen() }} className={classess.absolute}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal open={open} onClose={handleClose}>
                <Container className={classess.container}>
                    <form className={classess.form}>
                    <div className={classess.item}>
                        <TextField id="outlined-basic" label="name" variant="outlined" style={{width:"100%"}}/>
                    </div>
                    <div className={classess.item}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Multiline"
                                multiline
                                rows={4}
                                defaultValue="Default Value"
                                placeholder="tell somehing"
                                variant="outlined"
                            />
                    </div>
                    </form>
                </Container>
            </Modal>
            <Snackbar open={openSnackbar} autoHideDuration={1000} onClose={handleClose}>
                <MuiAlert onClose={handleClose} severity="success">
                    This is a success message!
                </MuiAlert>
            </Snackbar>
        </>
    )
}

export default Adds;
