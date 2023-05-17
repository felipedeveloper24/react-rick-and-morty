import { Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../components/header/header"
import ShowPersonajes from "../components/showPersonajes/showPersonajes";
const Home = ()=>{
    return (
        <Grid sx={{
            width:"100%",
            minHeight:"100vh",
            height:"auto",
            display:"flex",
            flexDirection:"column",
            backgroundColor:"#1e293b"
        }}>
            <Header/>
            <Typography
                sx={{
                    fontSize:"25px",
                    textAlign:"center",
                    color:"white"
                }}
            >Listado de personajes</Typography>
            <ShowPersonajes/>
        </Grid>
    )
};

export default Home;