
import { Card, Grid,Typography } from "@mui/material";
import React from "react";

const Personaje = (props)=>{
    return (
        <Card sx={{padding:"20px", margin:"10px"}}>
            <Typography>{props.personaje.name}</Typography>
            <img src={props.personaje.image} alt="" />
        </Card>
    )
}

export default Personaje;