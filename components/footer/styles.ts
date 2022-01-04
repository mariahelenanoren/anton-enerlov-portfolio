import { Theme } from "@mui/material/styles";
import {  makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme:Theme) => ({
    footer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column', 

    },
    logo: {
        position: 'relative',
        width: '3rem',
        height: '2rem',  

    },
    socialIcons: {
        objectFit: 'contain',
        width: '25px',
        height:'25px',  
    },
    
    copyName: {
        color: theme.palette.common.white,    
 
    },
}));
