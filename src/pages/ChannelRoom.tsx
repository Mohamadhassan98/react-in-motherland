import React from "react";
import {ChannelMessageProps} from "../components/types/ChannelMessageProps";
import {t} from "i18n-js";
import {Button, Container, Content, Footer, Text} from "native-base";
import ChannelMessage from "../components/ChannelMessage";
import MainHeader from "../components/MainHeader";
import GroupChatRoomHeader from "../components/GroupChatRoomHeader";
import {StackNavigator} from "../values/Routing";

export default function ({navigation, route}: StackNavigator<"ChannelRoom">) {
    const messages = new Array<Omit<ChannelMessageProps, "navigation" | "route">>(5).fill({
        date: t("_todayChannelPost"),
        message:
            "What is the loop of Creation? How is there something from nothing? In spite of the fact that it is impossible to prove that anythin….",
        profileImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/368px-Donald_Trump_official_portrait.jpg",
        profileUsername: "Donald Trump",
        media: "https://www.animalfactsencyclopedia.com/images/animalextremeclose-up-racoon.jpg",
        isLiked: false,
    });
    const [mute, setMute] = React.useState(false);
    const {params} = route;

    return (
        <Container>
            <MainHeader size='collapsed'>
                <GroupChatRoomHeader {...params} navigation={navigation} />
            </MainHeader>
            <Content>
                {messages.map((value, index) => (
                    <ChannelMessage
                        {...value}
                        navigation={navigation}
                        media={index % 2 === 0 ? undefined : value.media}
                        key={index}
                        route={route}
                    />
                ))}
            </Content>
            <Footer style={{backgroundColor: "transparent"}}>
                <Button
                    block
                    style={{width: "100%", elevation: 0, height: "100%"}}
                    onPress={() => setMute((prevState) => !prevState)}
                >
                    <Text>{mute ? t("mute") : t("unmute")}</Text>
                </Button>
            </Footer>
        </Container>
    );
}
