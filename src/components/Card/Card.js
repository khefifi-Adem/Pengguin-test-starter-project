import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardMedia} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import {Add, RemoveCircleOutline} from "@mui/icons-material";

const card = ({show,id, title,poster,desc, location}) => (

    <React.Fragment >
        <CardContent sx={{padding:0, height:400, width:300}}>
            <Link to={`/watchlist/${id}`} state={show}>
            <CardMedia
                component="img"
                height="194"
                image={`https://image.tmdb.org/t/p/w500${poster}`}
                alt="Poster"
                sx={{
                    width:'100%',
                    height: '100%',
                    alignSelf:"center"
                }}
            />
                </Link>
            <Typography variant="h6" component="div" margin={1}>
                {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} margin={2} color="text.secondary">
                {desc} ... Read More
            </Typography>

        </CardContent>
        <CardActions>
            {location.pathname ==='/'? <Button size="small" sx={{mt:19}} ><Add/> ADD TO WATCH LIST</Button> :<Button size="small" sx={{mt:19}} ><RemoveCircleOutline/> REMOVE FROM WATCH LIST </Button>}
        </CardActions>
    </React.Fragment>
);

export default function Carte({show}) {
    const location = useLocation();
    const descri = show.overview.split(" ");
    const desc = descri.splice(0,16).join(" ");
    const id = show.id;
    const title= show.name;
    const poster = show.poster_path;

    console.log(show.id);
    return (
        <Box
            sx={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:"center",
                width: {xs:"50%",ms:"30%",md:"23%"},
                height:600,
                m:2
        }}
        >
            <Card variant="outlined">{card({show,id, title, poster,desc, location})}</Card>
        </Box>
    );
}
