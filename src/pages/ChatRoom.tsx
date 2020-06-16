import React from "react";
import {
    Container,
    Body,
    Footer,
} from "native-base";
import Message from "../components/Message";
import ChatRoomHeader from "../components/ChatRoomHeader";
import SendMessageBox from "../components/SendMessageBox";
import MainHeader from "../components/MainHeader";

export default function() {

    return (
        <Container>
            <MainHeader size='collapsed'>
                <ChatRoomHeader
                    profileImage='https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/15/20/donald-trump-cabinet-room-white-house.jpg'
                    profileUsername='donald trump' status='online'
                />
            </MainHeader>
            <Body>

                {/*date :string,*/}
                {/*message :string,*/}
                {/*seen : boolean,*/}
                {/*type : "send" | "receive" ,*/}
                {/*media ?: string,*/}
                {/*showDate ?: boolean*/}
                <Message date='10 : 32 AM' message='سلامممممم' type='receive' />
                <Message date='10 : 32 AM' message='سلامممممم' type='receive' />
                <Message date='10 : 32 AM' message='سلامممممم' type='receive' />
                <Message date='10 : 32 AM' message='سلامممممم' type='receive' />
                <Message date='10 : 32 AM' message='سلامممممم' type='receive' showDate/>
            </Body>

            <Footer>
                <SendMessageBox/>
            </Footer>
        </Container>

    );
}
