import React from 'react'
import {Box, CardMedia, Typography} from "@mui/material";
import {useLocation} from "react-router-dom";


const Show = () => {
    const location = useLocation();
    console.log(location.state);

    return (


        <Box  className="show" display="flex" flexDirection="row" flexWrap="wrap" alignItems="center"  justifyContent="center">
            <CardMedia
                component="img"
                height="100%"
                image={`https://image.tmdb.org/t/p/w1280${location.state.backdrop_path}`}
                alt="green iguana"
            />
            <Box>
               <Typography variant={"h2"} >{location.state.name }</Typography>


            </Box>
            <Box>
                <Typography variant={"h5"} margin={3}> {
                    location.state.overview
                }</Typography>
            </Box>

        </Box>
            )
}

export default Show