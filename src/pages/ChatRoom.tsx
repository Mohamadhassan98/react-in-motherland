import React from "react";
import {Container, Content, Footer} from "native-base";
import Message from "../components/Message";
import ChatRoomHeader from "../components/ChatRoomHeader";
import SendMessageBox from "../components/SendMessageBox";
import MainHeader from "../components/MainHeader";
import {MessageProps} from "../components/types/MessageProps";
import {StackNavigator} from "../values/Routing";
import {t} from "i18n-js";

export default function Chatroom({navigation, route}: StackNavigator<"ChatRoom">) {
    const initMessages: MessageProps[] = new Array(5).fill({
        message: "سلام به روی ماهت",
        type: "receive",
        date: `10 : 32 ${t("am")}`,
        showDate: true,
    });
    const [messages, setMessages] = React.useState(initMessages);
    return (
        <Container>
            <MainHeader size='collapsed'>
                <ChatRoomHeader
                    profileImage='https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/15/20/donald-trump-cabinet-room-white-house.jpg'
                    profileUsername='donald trump'
                    status='online'
                    navigation={navigation}
                />
            </MainHeader>
            <Content>
                {messages.map((value, index) => (
                    <Message {...value} key={index} />
                ))}
            </Content>
            <Footer style={{backgroundColor: "transparent"}}>
                <SendMessageBox
                    onSubmit={(message) => {
                        setMessages((prevState) => [
                            ...prevState,
                            {
                                message: message,
                                date: t("_justNow"),
                                type: "send",
                                showDate: true,
                                seen: false,
                            },
                        ]);
                    }}
                />
            </Footer>
        </Container>
    );
}
