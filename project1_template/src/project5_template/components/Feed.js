import React from 'react'
import { makeStyles,Container } from '@material-ui/core';
import Post from './post';
const useStyle = makeStyles((theme) => ({
    container:{
        paddingTop:theme.spacing(10),
    },
}))
const Feed = () => {
    const classess = useStyle();
    const arrdata = [1,2,3,4,5,6,7,8,9,10,11,12,1,3,1,41,5,16,17,18,19,20,21,22]
    return (
        <>
            <Container className={classess.container}>
               {
                   arrdata.map((index) => {
                    return <Post random={index}/> 
                   })
               } 
            </Container>
        </>
    )
}

export default Feed;
