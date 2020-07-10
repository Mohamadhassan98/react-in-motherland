import React from "react";
import {StyleSheet} from "react-native";
import {Body, Button, Card, CardItem, Grid, Left, Row, Text, Thumbnail} from "native-base";
import {ChannelMessageProps} from "./types/ChannelMessageProps";
import commonColor from "../../native-base-theme/variables/commonColor";
import * as Localization from "expo-localization";
import Icons8LoveIcon from "../../assets/icons/LoveIcon";
import Icons8CommentsIcon from "../../assets/icons/CommentsIcon";

const styles = StyleSheet.create({
    body: {
        textAlign: "justify",
    },
    bodyGrid: {
        width: "100%",
    },
    bottomIcons: {
        height: 40,
        width: 40,
    },
    mediaImage: {
        borderRadius: 5,
        flex: 1,
        height: 130,
    },
    padding: {
        paddingEnd: 13,
        paddingStart: 60,
    },
    username: {
        color: commonColor.brandLight,
        textAlign: !Localization.isRTL ? "right" : "left",
    },
});
export default function ({message, media, profileImage, profileUsername, date}: ChannelMessageProps) {
    return (
        <Card style={styles.bodyGrid}>
            <CardItem>
                <Left>
                    <Thumbnail source={{uri: profileImage}} />
                    <Body>
                        <Text style={styles.username}>{profileUsername}</Text>
                        <Text note>{date}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem style={styles.padding}>
                <Grid>
                    <Row>
                        <Text style={styles.body}>{message}</Text>
                    </Row>
                    <Row>
                        <Thumbnail square source={{uri: media}} style={styles.mediaImage} />
                    </Row>
                </Grid>
            </CardItem>
            <CardItem style={styles.padding}>
                <Left>
                    <Button transparent>
                        <Icons8LoveIcon style={styles.bottomIcons} />
                    </Button>
                    <Button transparent>
                        <Icons8CommentsIcon style={styles.bottomIcons} />
                    </Button>
                </Left>
            </CardItem>
        </Card>
    );
}
