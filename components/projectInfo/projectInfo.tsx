
import { PaddingComponent } from "../paddingComponent";
import { useStyles } from "./styles";
import { IProjectInfo } from "./types";


export default function ProjectInfo({
    client,
    productionCompany,
    models,
    producer,
    retusch,
}: IProjectInfo) {
    const classes= useStyles();   
    
    const createSubstrings = (name: string) => {
        return name.split(' ');
      };

return(
    <PaddingComponent>
    <div className={classes.information}>
        {client.name} 
        {productionCompany.name}
        {models.name}
        {producer.name}
        {retusch.name}
    </div>
   </PaddingComponent>

)
};


