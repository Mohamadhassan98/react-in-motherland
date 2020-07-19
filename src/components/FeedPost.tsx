import React from "react";
import {Button, Right, Row, Text, Thumbnail, View} from "native-base";
import Avatar from "./Avatar";
import makeStyles from "../utils/makeStyles";
import {FeedPostProps} from "./types/FeedPostProps";
import {t} from "i18n-js";

const useStyles = makeStyles((theme) => ({
    p16: {
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 16,
        paddingBottom: 16,
    },
    px16: {
        paddingStart: 16,
        paddingEnd: 16,
    },
    itemsCenter: {
        alignItems: "center",
    },
    pb0: {
        paddingBottom: 0,
    },
    ms8: {
        marginStart: 8,
    },
    userName: {
        fontWeight: "bold",
        fontSize: 12,
        fontFamily: theme.font.body.Bold,
    },
    bodyMedia: {
        width: "100%",
        height: 340,
    },
    bodyText: {
        fontFamily: theme.font.body.Medium,
        fontWeight: "500",
        fontSize: 12,
    },
    publishDate: {
        fontSize: 10,
        fontFamily: theme.font.body.Light,
        fontWeight: "300",
    },
    publishDateWrapper: {
        marginTop: 16,
        paddingStart: 16,
        marginBottom: 19,
    },
    commentsCount: {
        marginTop: 16,
        marginStart: 16,
        fontSize: 10,
        fontWeight: "500",
        fontFamily: theme.font.body.Medium,
    },
    moreComments: {
        textDecorationLine: "underline",
        color: theme.palette.Secondary,
        fontSize: 10,
        fontWeight: "500",
        fontFamily: theme.font.body.Medium,
        marginTop: 4,
        marginEnd: 16,
        marginBottom: 16,
    },
    buttons: {
        flex: 1,
        justifyContent: "center",
        borderColor: "#F1F1F1",
    },
    footer: {
        backgroundColor: "#F1F1F1",
    },
    textLeft: {
        textAlign: "left",
    },
}));

export default function (props: FeedPostProps) {
    const styles = useStyles();
    const {visibleName, navigation, profileImage, postMediaUri, postCaption, datePublished} = props;
    return (
        <>
            <Row style={[styles.itemsCenter, styles.p16, styles.pb0]}>
                <Avatar size={32} visibleName={visibleName} profileImage={profileImage} />
                <Text style={[styles.ms8, styles.userName]}>{visibleName}</Text>
            </Row>
            <View style={styles.p16}>
                <Thumbnail
                    square
                    style={styles.bodyMedia}
                    source={{
                        uri: postMediaUri,
                    }}
                />
            </View>
            <View style={styles.px16}>
                <Text style={[styles.bodyText, styles.textLeft]}>{`${postCaption.slice(0, 20)}${
                    postCaption.length > 19 ? "..." : ""
                }`}</Text>
            </View>
            <View style={styles.publishDateWrapper}>
                <Text style={styles.publishDate}>{datePublished}</Text>
            </View>
            <Row>
                <Right>
                    <Button transparent onPress={() => navigation.navigate("PostPage", {...props} as any)}>
                        <Text style={styles.moreComments}>{t("showMore")}</Text>
                    </Button>
                </Right>
            </Row>
        </>
    );
}
