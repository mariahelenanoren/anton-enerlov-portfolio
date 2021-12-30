import { request } from "../api";
import { FOOTER_DATA } from "./query";


export const getFooterData = async () => {
    const footerData = await request ({ query: FOOTER_DATA });
    return footerData;
}