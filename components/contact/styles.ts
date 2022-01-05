import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme:Theme) => ({
    contactTitle: {
        textAlign: 'center',
        fontSize: '45px',
        fontWeight: 'bold',
        // marignTop: '8rem',
    },

    contactContainer: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '4rem',
        margin: '0.9rem',
        '& a' :{
            textDecoration: 'underline',
        }
  
    }
}));