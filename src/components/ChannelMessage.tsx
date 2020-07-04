import React from "react";
import {StyleSheet} from "react-native";
import {Body, Button, Card, CardItem, Grid, Icon, Left, Row, Text, Thumbnail} from "native-base";
import {ChannelMessageProps} from "./types/ChannelMessageProps";
import commonColor from "../../native-base-theme/variables/commonColor";

const styles = StyleSheet.create({
    bodyGrid: {
        width: "100%",
    },
    bottomIcons: {
        fontSize: 30,
    },
    cardBody: {
        height: 200,
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
                        <Text>{message}</Text>
                    </Row>
                    <Row>
                        <Thumbnail square source={{uri: media}} style={styles.mediaImage} />
                    </Row>
                </Grid>
            </CardItem>
            <CardItem style={styles.padding}>
                <Left>
                    <Button transparent>
                        <Icon active name='md-heart' style={styles.bottomIcons} />
                    </Button>
                    <Button transparent>
                        <Icon active name='message' type='Entypo' style={styles.bottomIcons} />
                    </Button>
                </Left>
            </CardItem>
        </Card>
    );
}
