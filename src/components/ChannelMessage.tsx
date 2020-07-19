import React, {useState} from "react";
import {Body, Button, Card, CardItem, Grid, Left, Row, Text, Thumbnail} from "native-base";
import {ChannelMessageProps} from "./types/ChannelMessageProps";
import commonColor from "../../native-base-theme/variables/commonColor";
import FilledIcons8LoveIcon from "../../assets/icons/FilledLoveIcon";
import Icons8CommentsIcon from "../../assets/icons/CommentsIcon";
import makeStyles from "../utils/makeStyles";
import LoveOutline from "../../assets/icons/LoveOutline";
import {TouchableOpacity} from "react-native";

const useStyles = makeStyles(() => ({
    body: {
        textAlign: "left",
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
        textAlign: "left",
    },
    media: {
        borderRadius: 5,
        flex: 1,
        height: 130,
        paddingTop: 10,
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
    route,
}: ChannelMessageProps) {
    const styles = useStyles();

    const [liked, setLiked] = useState<boolean>(isLiked);
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate("ChannelRoom", {
                    onlineMembers: 0,
                    members: 12,
                    groupImage: profileImage,
                    groupName: profileUsername,
                })
            }
            style={styles.bodyGrid}
            disabled={route.name === "ChannelRoom"}
        >
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
                        {!!media && (
                            <Row>
                                <Thumbnail square source={{uri: media}} style={styles.media} />
                            </Row>
                        )}
                    </Grid>
                </CardItem>
                <CardItem style={styles.padding}>
                    <Grid>
                        <Row>
                            <Button transparent onPress={() => setLiked(!liked)} style={{marginEnd: 10}}>
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
        </TouchableOpacity>
    );
}
