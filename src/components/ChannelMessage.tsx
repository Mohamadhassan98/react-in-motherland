import React, {useState} from "react";
import {Body, Button, Card, CardItem, Grid, Left, Row, Text, Thumbnail} from "native-base";
import {ChannelMessageProps} from "./types/ChannelMessageProps";
import commonColor from "../../native-base-theme/variables/commonColor";
import FilledIcons8LoveIcon from "../../assets/icons/FilledLoveIcon";
import Icons8CommentsIcon from "../../assets/icons/CommentsIcon";
import makeStyles from "../utils/makeStyles";
import LoveOutline from "../../assets/icons/LoveOutline";

const useStyles = makeStyles(() => ({
    body: {
        paddingBottom: 10,
        textAlign: "left",
    },
    bodyGrid: {
        width: "100%",
    },
    bottomIcons: {
        height: 40,
        width: 40,
    },
    icon: {
        paddingLeft: 17,
        paddingRight: 17,
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
        textAlign: "left",
    },
}));

export default function ({
    message,
    media,
    profileImage,
    profileUsername,
    date,
    isLiked,
    navigation,
}: ChannelMessageProps) {
    const styles = useStyles();

    const [liked, setLiked] = useState<boolean>(isLiked);
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
                        <Thumbnail square source={{uri: media}} style={{flex: 1, height: 130}} />
                    </Row>
                </Grid>
            </CardItem>
            <CardItem style={styles.icon}>
                <Grid>
                    <Row>
                        <Button transparent onPress={() => setLiked(!liked)}>
                            {liked ? (
                                <FilledIcons8LoveIcon style={styles.bottomIcons} />
                            ) : (
                                <LoveOutline style={styles.bottomIcons} />
                            )}
                        </Button>
                        <Button transparent onPress={() => navigation.navigate("AddCommentChannel")}>
                            <Icons8CommentsIcon style={styles.bottomIcons} />
                        </Button>
                    </Row>
                </Grid>
            </CardItem>
        </Card>
    );
}
