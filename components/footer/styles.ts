import { Theme } from "@mui/material/styles";
import {  makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme:Theme) => ({
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
          

    },
    logo: {
        position: 'relative',
        width: '3rem',
        height: '2rem',
      

    },
    iconsContainer: {
        display: "flex",
        justifyContent: 'center',
        width: '25px',
        height:'25px',  
        '&:socialIcons': {
            objectFit: 'contain',
            flexDirection: 'row',
        },
    },


    copyName: {
        color: theme.palette.common.white,    
      
    },
}));
