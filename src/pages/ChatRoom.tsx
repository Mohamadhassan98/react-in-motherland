import React from "react";
import {Container, Content, Footer} from "native-base";
import Message from "../components/Message";
import ChatRoomHeader from "../components/ChatRoomHeader";
import SendMessageBox from "../components/SendMessageBox";
import MainHeader from "../components/MainHeader";
import {MessageProps} from "../components/types/MessageProps";
import {StackNavigator} from "../values/Routing";
import {t} from "i18n-js";
import {i17n} from "../values/strings";

export default function Chatroom({navigation, route}: StackNavigator<"ChatRoom">) {
    const initMessages: MessageProps[] = new Array(5).fill({
        message: "سلام به روی ماهت",
        type: "receive",
        date: `10:32 ${i17n.am}`,
        showDate: true,
    });
    const [messages, setMessages] = React.useState(initMessages);
    const {params} = route;
    return (
        <Container>
            <MainHeader size='collapsed'>
                <ChatRoomHeader
                    profileImage={params.profileImage}
                    profileUsername={params.visibleName}
                    status='online'
                    navigation={navigation}
                    local={params.local}
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
