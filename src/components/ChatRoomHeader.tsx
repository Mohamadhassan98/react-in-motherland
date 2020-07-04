import React from "react";
import {StyleSheet} from "react-native";
import {Body, Card, CardItem, Left, Text, Thumbnail} from "native-base";
import {ChatRoomHeadersProps} from "./types/ChatRoomHeadersProps";
import commonColor from "../../native-base-theme/variables/commonColor";
import {t} from "i18n-js";

const styles = StyleSheet.create({
    username: {
        color: commonColor.textColor,
    },
});
export default function ({profileImage, profileUsername, status}: ChatRoomHeadersProps) {
    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{uri: profileImage}} />
                    <Body>
                        <Text style={styles.username}>{profileUsername}</Text>
                        <Text note>{t(status)}</Text>
                    </Body>
                </Left>
            </CardItem>
        </Card>
    );
}
