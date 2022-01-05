import { request } from "../api";
import { CONTACT_DATA } from "./query";


export const getContactData = async () => {
    const contactData = await request ({ query: CONTACT_DATA });
    return contactData;
}