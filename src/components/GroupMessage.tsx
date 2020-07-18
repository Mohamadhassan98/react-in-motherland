import React from "react";
import {Col, Grid, Row, Text} from "native-base";
import makeStyles from "../utils/makeStyles";
import {GroupMessageProps} from "./types/GroupMessageProps";
import Avatar from "./Avatar";

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: "flex-end",
        width: "100%",
    },
    sentMessage: {
        backgroundColor: theme.palette.Primary,
    },
    sendMessageText: {
        color: theme.palette.textSecondary,
    },
    receiveMessageText: {
        color: theme.palette.textPrimary,
    },
    receivedMessage: {
        backgroundColor: "#EDEEF2",
    },
    padding: {
        paddingStart: 7,
        paddingEnd: 7,
        borderRadius: 5,
        paddingBottom: 8,
        paddingTop: 8,
        marginTop: 5,
        marginEnd: 7,
        marginStart: 7,
        maxWidth: "70%",
    },
    textStyle: {
        fontFamily: theme.font.Body,
        color: "#9FA3B0",
        fontSize: 12,
    },
    icon: {
        width: 15,
        height: 15,
    },
    sendRow: {
        justifyContent: "flex-start",
        alignItems: "center",
        marginEnd: 7,
        marginStart: 7,
    },
    receiveRow: {
        justifyContent: "flex-end",
        alignItems: "center",
        marginEnd: 7,
        marginStart: 7,
    },
    senderName: {
        color: theme.palette.Secondary,
        fontSize: 12,
        fontFamily: theme.font.body.Bold,
        fontWeight: "bold",
        textAlign: "left",
    },
    avatarCol: {
        flex: 1,
        flexGrow: 1,
        marginStart: 7,
    },
    avatarColDate: {
        paddingBottom: 20,
    },
    avatarColNoDate: {
        paddingBottom: 5,
    },
    restCol: {
        flexGrow: 9,
        flex: 9,
    },
}));

export default function ({date, message, showDate, profileImage, visibleName}: GroupMessageProps) {
    const styles = useStyles();
    return (
        <Grid style={styles.root}>
            <Col style={[styles.avatarCol, showDate ? styles.avatarColDate : styles.avatarColNoDate]}>
                <Avatar visibleName={visibleName} size={40} profileImage={profileImage} />
            </Col>
            <Col style={styles.restCol}>
                <Row style={[styles.receivedMessage, styles.padding]}>
                    <Col>
                        <Text style={styles.senderName}>{visibleName}</Text>
                        <Text style={styles.receiveMessageText}>{message}</Text>
                    </Col>
                </Row>
                {showDate && (
                    <Row style={styles.sendRow}>
                        <Text style={styles.textStyle}>{date}</Text>
                    </Row>
                )}
            </Col>
        </Grid>
    );
}
