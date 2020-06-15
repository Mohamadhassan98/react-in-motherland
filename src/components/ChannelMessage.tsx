import React from "react";
import {Container, Header, Content, Card, CardItem, Body, Text, Footer, FooterTab, Button, Icon} from "native-base";
import {ChannelMessageProps} from "./types/ChannelMessageProps";

export default function({message, type, seen, media,
                            profileImage, profileUsername}: ChannelMessageProps) {
    return (
        <Container>
            <Header/>
            <Content>
                <Card>
                    <CardItem header>
                        {/*<Text>NativeBase</Text>*/}
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>//Your text here</Text>
                        </Body>
                    </CardItem>
                    <CardItem footer>
                        {/*<Text>GeekyAnts</Text>*/}
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
}
