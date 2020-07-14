import React from "react";
import {Button, Col, Row, Text, View} from "native-base";
import {t} from "i18n-js";
import makeStyles from "../utils/makeStyles";
import NotificationIcon from "../../assets/icons/NotificationIcon";
import Avatar from "./Avatar";
import {PersonalUserInfoProps} from "./types/PersonalUserInfoProps";

const useStyles = makeStyles((theme) => ({
    button: {
        alignItems: "center",
        borderRadius: 50,
        height: 35,
        justifyContent: "center",
        paddingBottom: 0,
        paddingTop: 0,
        width: 35,
    },
    content: {
        flex: 6,
    },
    grid: {
        flexDirection: "row",
        height: 100,
        paddingBottom: 6,
        paddingEnd: 9,
        paddingStart: 16,
        paddingTop: 16,
    },
    icon: {
        marginLeft: 0,
        marginRight: 0,
    },
    image: {
        // flex: 1,
    },
    notification: {
        flex: 1,
        justifyContent: "flex-end",
    },
    numberText: {
        color: theme.palette.Secondary,
        fontSize: 14,
        flex: 1,
        textAlign: "center",
    },
    otherText: {
        fontSize: 14,
        flex: 1,
        textAlign: "center",
    },
    title: {
        fontWeight: "bold",
    },
    flex1: {
        flex: 1,
    },
    flex2: {
        flex: 2,
    },
}));

export default function ({followers, followings, posts, profileImage, visibleName}: PersonalUserInfoProps) {
    const styles = useStyles();
    return (
        <View style={styles.grid}>
            <Avatar profileImage={profileImage} visibleName={visibleName} size={56} />
            <Col style={styles.content}>
                <Row>
                    <Text style={styles.title}>{visibleName}</Text>
                </Row>
                <Row>
                    <Col style={styles.flex1}>
                        <Row>
                            <Text style={styles.numberText}>{posts}</Text>
                        </Row>
                        <Row>
                            <Text style={styles.otherText}>{t("posts")}</Text>
                        </Row>
                    </Col>
                    <Col style={styles.flex2}>
                        <Row>
                            <Text style={styles.numberText}>{followers}</Text>
                        </Row>
                        <Row>
                            <Text style={styles.otherText}>{t("followers")}</Text>
                        </Row>
                    </Col>
                    <Col style={styles.flex2}>
                        <Row>
                            <Text style={styles.numberText}>{followings}</Text>
                        </Row>
                        <Row>
                            <Text style={styles.otherText}>{t("following")}</Text>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col style={styles.notification}>
                <Button icon style={styles.button}>
                    <NotificationIcon />
                </Button>
            </Col>
        </View>
    );
}
