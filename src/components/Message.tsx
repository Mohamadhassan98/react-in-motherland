import React from "react";
import {Container, Header, Content, Card, CardItem, Body, Text, Footer, FooterTab, Button, Icon} from "native-base";
import {MessageProps} from "./types/MessageProps";
export default function ({message, type, seen, media}: MessageProps) {
    return (
        <Container>
            <Header/>
            <Content>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>{message}</Text>
                        </Body>
                        <Footer>
                        </Footer>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
}
