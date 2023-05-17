import { CircularProgress, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Personaje from "../personaje/personaje";


const ShowPersonajes = ()=>{

    const [personajes, setPersonajes] = useState([]);
    const [loading,setLoading] = useState(true);
    
    useEffect(()=>{
        getAllPersonajes();
    },[])
    
    const getAllPersonajes = async()=>{

        const response = await axios.get("https://rickandmortyapi.com/api/character")
        
        console.log(response.data.results);

        if(response.status==200){
            setTimeout(()=>{
                setPersonajes(response.data.results);
                setLoading(false);
            },3000)
            
        }
    }

    if(!loading){
        return (
            <Grid container sx={{width:"80%",display:"flex",justifyContent:"center",margin:"0px auto"}}>
                {
                    personajes.map((personaje,idx)=>{
                        return (
                           <Personaje  personaje={personaje}  />
                        )
                    })
                }
            </Grid>
        )
    }
    if(loading){
        return (
            <Grid sx={{width:"50%",margin:"0px auto",display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column",color:"white"}}>
                <p>Cargando datos.....</p>
                <CircularProgress />

            </Grid>
        )
    }

}

export default ShowPersonajes;