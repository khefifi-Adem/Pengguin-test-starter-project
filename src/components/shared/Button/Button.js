import {Button} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";



const Buttonn = ({path,name}) => {
    return (
        <Button
            sx={{
                margin:2
            }}
            variant="contained"
            color="error"
            size="large"

        >
           <Link className="link" to={path}> {name}</Link>
        </Button>
    )
}

export default Buttonn;