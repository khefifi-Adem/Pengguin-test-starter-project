import React from 'react'
import {AppBar, Box, FormControlLabel, Stack, TextField} from "@mui/material";
import MaterialUISwitch from "../../Function/MaterialUISwitch"
import Buttonn from "../shared/Button/Button";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../../redux/search.slice";
import {setThemeMode} from "../../redux/theme.slice";



const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const theme = useSelector((state)=>state.theme.mode)
    console.log(theme)

    return (
        <AppBar position="sticky">
            <Stack direction="row" spacing={2} margin={2} justifyContent="space-between">
                <Box
                    display="flex"
                    sx={{
                        alignItems:"center",
                        justifyContent:{xs: 'flex-start',sm:"flex-end"},
                    width:"70%"
                }}>
                    <TextField
                        id="outlined-search"
                        label="Search"
                        type="search"
                        margin={"dense"}
                        color="secondary"
                        sx={{
                            width:'60%',
                            borderBlockColor:"#3b5998",
                        }}
                        onChange={(e)=> dispatch(
                            setSearch(
                                e.target.value
                            ))}

                    />
                </Box>
                <Box
                    display="flex"
                    justifyContent="flex-end"
                    sx={{
                    width:"30%"
                }}>

                    {
                        location.pathname ==='/' ? <Buttonn path="/watchlist" name="WATCH LIST"/> : <Buttonn path="/" name="HOME"/>
                    }


                    <FormControlLabel
                        control={<MaterialUISwitch sx={{
                            m: 2
                        }} />}
                        onChange={()=>dispatch(
                            theme === 'browser' ? setThemeMode("dark") : theme ==="dark" ? setThemeMode("light") : setThemeMode("dark") )}
                        label={theme}
                    />
                </Box>
            </Stack>
        </AppBar>
    )
}

export default Header