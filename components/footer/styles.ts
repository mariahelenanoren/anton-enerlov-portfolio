import { Theme } from "@mui/material/styles";
import {  makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme:Theme) => ({
    footer: {
        backgroundColor: '#000000',
        height: '7rem',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        
    },
    socialIcons: {
        height: '24px',
        width: '24px',
    },

}));
