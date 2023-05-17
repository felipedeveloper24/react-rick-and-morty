import { Grid, Typography } from "@mui/material";
import React from "react";

const Header = ()=>{
    return(
        <Grid sx={{
            width:"100%",
            height:"50px",
            backgroundColor:"#0f172a",
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center"
        }}>
            <Typography
                sx={{
                    color:"white",
                    fontSize:"30px",
                    padding:"10px"
                }}
            >RickAndMorty</Typography>

        </Grid>
    )
}

export default Header;