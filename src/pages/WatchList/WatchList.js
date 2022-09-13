import React, {useEffect, useState} from 'react'
import {Box, Stack, Typography} from "@mui/material";
import Carte from "../../components/Card/Card";
import {axiosTMDB} from "../../utils/axios";

const WatchList = () => {


    const [shows, setShows] = useState([]);

    useEffect(()=>{
        axiosTMDB.get('/tv/popular', {
                params:{
                    api_key:"73b5a128a2448eb8a60b18f2baeb382e"
                }
            }
        ).then(res=>{
            console.log(res.data.results)
            setShows(res.data.results);
        })

    },[])



    return (
        <Box display="flex" flexDirection="row" flexWrap="wrap" alignItems="center"  justifyContent="center">
            <Box margin={3} width="100%" display="flex" justifyContent="center" alignItems="center">
                <Typography   variant="h3"> TV Shows </Typography>
            </Box>
            <Box sx={{justifyContent: 'center', width:"100%"}}>
                <Stack sx={{
                    display:"flex",
                    flexDirection:"row",
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }} >
                    {
                        shows.map(show=>(
                            <Carte
                                key={show.id}
                                show={show}
                            />
                        ))}
                </Stack>
            </Box>
        </Box>
    )
}

export default WatchList