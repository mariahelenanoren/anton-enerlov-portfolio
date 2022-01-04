import Link from "next/link";
import { Image } from "react-datocms";
import { useStyles } from "./styles";
import { IFooter } from "./types";

export default function Footer({footer}: IFooter){
    const classes = useStyles();
   
    console.log(footer)
	return(
        <div className={classes.footer}>
            {footer.socialLinks.map((link, index) => 
            <>

          
            <Image 
                data={link.icon.responsiveImage}
                className={classes.socialIcons}
                key={index}>{link.link} 
            </Image> 
          

       
        </>       
      )};
            </div>
        )};
      
            {/* <p key={index}>{link.link}</p>   */}
         