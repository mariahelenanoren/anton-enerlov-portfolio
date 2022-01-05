import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme:Theme) => ({
    contactContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& a' :{
            textDecoration: 'underline',
        }
  
    }
}));