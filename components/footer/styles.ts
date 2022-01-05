import { Theme } from "@mui/material/styles";
import {  makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme:Theme) => ({
    footer: {
      width: '100%',
        
    },
    logo: {
        position: 'relative',
        width: '3rem',
        height: '2rem',
       
    },
    iconsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
   
    },
    socialIcons: {
        top: '0.8rem',
        marginBottom: '2rem',
        margin: '0.5rem',
        height: 'auto',
        width: '2rem',
    },

    copyName: {
        color: theme.palette.common.white,  
    
         
    },

    column : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
}));
