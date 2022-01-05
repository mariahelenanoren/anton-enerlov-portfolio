import { StructuredTextDocument } from "react-datocms";


export interface IContact {
    contactPage: {
        title: string
        body: {
            value: StructuredTextDocument
        }
    }
}