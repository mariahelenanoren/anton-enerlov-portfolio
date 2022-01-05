import { Box } from "@mui/material";
import { StructuredText } from "react-datocms";
import { PaddingComponent } from "../paddingComponent";
import { useStyles } from "./styles";
import { IContact } from "./types";



export default function Contact({contactPage}: IContact) {
    const classes = useStyles();

    return (
        <>
        <PaddingComponent>
            <div className={classes.contactContainer}>
                <p>{contactPage.title}</p>
                <Box>
                    <StructuredText data={contactPage.body.value} />
                </Box>
            </div>
        
        </PaddingComponent>
    </>
    )
}