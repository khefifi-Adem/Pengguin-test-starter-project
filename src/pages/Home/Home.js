import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from "@mui/material";
import Carte from "../../components/Card/Card";
import { axiosTMDB } from "../../utils/axios";
import { useSelector } from "react-redux";

const Home = () => {

    const search = useSelector((state) => state.search.find)
    console.log(search)


    const [shows, setShows] = useState([]);



    useEffect(() => {
        if (search === "") {
            const getShows = async () => {
                await axiosTMDB.get('/tv/popular', {
                    params: {
                        api_key: "73b5a128a2448eb8a60b18f2baeb382e"
                    }
                }
                ).then(res => {
                    if (res.status === 200)
                        console.log(res.data.results.id)
                    setShows(res.data.results);

                }).catch((e) => {
                    console.log(e);
                })
            };
            getShows()
        } else {
            const getSearch = async () => {
                await axiosTMDB.get('/search/tv', {
                    params: {
                        api_key: "73b5a128a2448eb8a60b18f2baeb382e",
                        query: search,
                    },
                    timeout:500,
                }
                ).then(res => {
                    if (res.status === 200)

                        console.log(res.data.results)
                    setShows(res.data.results);

                }).catch((e) => {
                    console.log(e);
                })
            };

            // setTimeout(() => {
                getSearch()
            // }, 500)
        }


    }, [search])


    return (
        <Box display="flex" flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center">
            <Box margin={3} width="100%" display="flex" justifyContent="center" alignItems="center">
                {search === "" ? <Typography variant="h3"> TV Shows </Typography> : <Typography variant="h3"> You are searching for ' {search} ' </Typography>}
            </Box>
            <Box sx={{ justifyContent: 'center', alignItems: "center", width: "100%" }}>
                <Stack sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                    , alignItems: "center"
                }} >
                    {
                        shows.map(show =>
                        (

                            <Carte
                                key={show.id}
                                show={show}
                            />))

                    }
                </Stack>
            </Box>
        </Box>
    )
}

export default Home