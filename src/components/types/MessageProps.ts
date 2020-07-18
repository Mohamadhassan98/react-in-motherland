export interface MessageProps {
    date: string;
    message: string;
    seen?: boolean;
    type: "send" | "receive";
    media?: string;
    showDate?: boolean;
}

export function isMessage(a: any): a is MessageProps {
    return typeof a.type !== "undefined";
}
