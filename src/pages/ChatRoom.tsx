import React from "react";
import {Body, Container, Content, Footer} from "native-base";
import Message from "../components/Message";
import ChatRoomHeader from "../components/ChatRoomHeader";
import SendMessageBox from "../components/SendMessageBox";
import MainHeader from "../components/MainHeader";

export default function () {
    return (
        <Container>
            {/*<MainHeader size='collapsed'>*/}
            {/*    <ChatRoomHeader*/}
            {/*        profileImage='https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/15/20/donald-trump-cabinet-room-white-house.jpg'*/}
            {/*        profileUsername='donald trump'*/}
            {/*        status='online'*/}
            {/*    />*/}
            {/*</MainHeader>*/}
            <Content>
                <Message date='10 : 32 AM' message='سلامممممم' type='receive' showDate />
                <Message date='10 : 32 AM' message='سلامممممم' type='receive' />
                <Message date='10 : 32 AM' message='سلامممممم' type='receive' />
                <Message date='10 : 32 AM' message='سلامممممم' type='receive' />
                <Message date='10 : 32 AM' message='سلامممممم' type='receive' showDate />
            </Content>

            {/*<Footer>*/}
            {/*    <SendMessageBox />*/}
            {/*</Footer>*/}
        </Container>
    );
}
