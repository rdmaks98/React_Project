import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
const useStyle = makeStyles((theme) => ({
    card:{
        marginBottom:theme.spacing(5)
    },
    media:{
        height:250,
        [theme.breakpoints.down("sm")]:{
            height:150,
        }
    }
}))
const Post = ({random}) => {
    const classes = useStyle();
    const urls = `https://picsum.photos/400${random}`;
    return (
        <>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={urls}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Post;