import { Image } from "react-datocms";
import { IFooter } from "./types";


export default function Footer({footer}: IFooter) {
    console.log(footer)
	return(
        <div>
            {footer.socialLinks.map((link, index) => 
            <>
            <p key={index}>{link.link}</p>
            <Image data={link.icon.responsiveImage}/>   
            </>
            )}
        </div>
    )
    }