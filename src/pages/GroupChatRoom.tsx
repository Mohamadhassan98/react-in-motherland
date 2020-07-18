import React from "react";
import {MessageProps} from "../components/types/MessageProps";
import {i17n} from "../values/strings";
import {Container, Content, Footer} from "native-base";
import MainHeader from "../components/MainHeader";
import Message from "../components/Message";
import SendMessageBox from "../components/SendMessageBox";
import {t} from "i18n-js";
import GroupChatRoomHeader from "../components/GroupChatRoomHeader";
import {StackNavigator} from "../values/Routing";
import {GroupMessageProps, isGroupMessage} from "../components/types/GroupMessageProps";
import GroupMessage from "../components/GroupMessage";

export default function ({navigation, route}: StackNavigator<"GroupChatRoom">) {
    const initReceived = new Array<GroupMessageProps>(5).fill({
        visibleName: "Donald the ass",
        date: `10:32 ${i17n.am}`,
        message: "I'm much dumber...",
    });
    const initMessages = new Array<MessageProps>(5).fill({
        message: "سلام به روی ماهت",
        date: `10:32 ${i17n.am}`,
        showDate: true,
        type: "send",
        seen: true,
    });
    const [messages, setMessages] = React.useState([...initMessages, ...initReceived]);
    return (
        <Container>
            <MainHeader size='collapsed'>
                <GroupChatRoomHeader
                    groupImage='https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/15/20/donald-trump-cabinet-room-white-house.jpg'
                    groupName='Us mad presidents'
                    members={12}
                    onlineMembers={3}
                    navigation={navigation}
                />
            </MainHeader>
            <Content>
                {messages.map((value, index) => {
                    if (isGroupMessage(value)) {
                        return <GroupMessage {...value} key={index} />;
                    } else {
                        return <Message {...value} key={index} />;
                    }
                })}
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
