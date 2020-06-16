export interface MessageProps {
    date :string,
    message :string,
    seen ?: boolean,
    type : "send" | "receive" ,
    media ?: string,
    showDate ?: boolean

}