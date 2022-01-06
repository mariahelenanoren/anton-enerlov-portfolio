import { PropsWithChildren } from "react";
import { useStyles } from "./styles";




export default function ProjectTextContainer({ children }: PropsWithChildren<{}>) {
    const classes = useStyles();
    return(
        <div className={classes.projectInfoContiner}>{children}</div>
    )
}