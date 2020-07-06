import React from "react";
import {Container, Header, Content, Input, Card} from "native-base";
import {inputBoxEditProfileProps} from "./types/InputBoxEditProfileProps";
export default function ({placeHolderMsg}: inputBoxEditProfileProps) {
    return (
        <Container>
            <Header />
            <Content>
                <Card
                    style={{
                        borderRadius: 15,
                        height: 60,
                    }}
                >
                    <Input placeholder='Rounded Textbox' style={{width: "100%", height: "100%"}} />
                    {/*</CardItem>*/}
                </Card>
            </Content>
        </Container>
    );
}
