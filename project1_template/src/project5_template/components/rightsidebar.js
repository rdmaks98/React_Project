import React from 'react'
import { makeStyles, Container, Typography, Avatar, ImageList, ImageListItem, Link, Divider } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
const useStyle = makeStyles((theme) => ({
    container:{
        paddingTop:theme.spacing(10),
        position:"sticky",
        top:0
    },
    title:{
        fontSize:"16x",
        fontWeight:"200",
        color:'#483'
    },
    link:{
        fontSize:"18px",
        marginRight:theme.spacing(2),
        color:'#937'
    }
}))
const Rightbar = () => {
    const classess = useStyle();
    const arrdata = [1,2,3,4,5,6,7,8];
    return (
        <>  
            <Container className={classess.container}>
                <Typography className={classess.title} gutterBottom>Online friends</Typography>
                <AvatarGroup max={6}>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
                </AvatarGroup>
                <Typography className={classess.title}>Gallery</Typography>
                <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={4}>
                    
                    {arrdata.map((gallery,index) => {
                        return (
                            <ImageListItem>
                                <img src={`https://picsum.photos/200${index}`} alt={`gallery${index}`}/>
                            </ImageListItem>
                        )
                    })}
                </ImageList>
                <Typography className={classess.title} gutterBottom>Category</Typography>
                <Link className={classess.link} variant="body">Sports</Link>
                <Link className={classess.link} variant="body">Games</Link>
                <Divider flexItem style={{marginBottom:4}}/>
                <Link className={classess.link} variant="body">marketing</Link>
                <Link className={classess.link} variant="body">Ecommerce</Link>
                <Divider flexItem style={{ marginBottom: 4 }} />
                <Link className={classess.link} variant="body">Tvshow</Link>
                <Link className={classess.link} variant="body">Technology</Link>
            </Container>
        </>
    )
}

export default Rightbar;
