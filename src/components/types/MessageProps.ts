export interface MessageProps {
    message :string,
    seen : boolean,
    type : "send" | "receive" ,
    media ?: string

}