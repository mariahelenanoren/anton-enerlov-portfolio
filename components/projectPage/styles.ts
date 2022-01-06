import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme:Theme) => ({
    projectContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

    },

    titleContainer: {
        padding: '8rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },

    category: {
        fontSize: '12px',
        textTransform: 'uppercase', 
    },

    firstImage: {

    }
}));