import React from "react";
import {Image, StyleSheet} from "react-native";
import {Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from "native-base";
import {ChatRoomHeadersProps} from "./types/ChatRoomHeadersProps";
import commonColor from "../../native-base-theme/variables/commonColor";
import {t} from "i18n-js";

const styles = StyleSheet.create({
    username: {
        color: commonColor.brandLight,
    }
});
export default function({ profileImage, profileUsername, status}: ChatRoomHeadersProps) {
    return (
        <Container>
            <Header/>
            <Content>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{uri: profileImage}}/>
                            <Body>
                                <Text style={styles.username}>{profileUsername}</Text>
                                <Text note>{t(status)}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
}
