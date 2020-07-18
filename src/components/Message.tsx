import React from "react";
import {Text} from "native-base";
import {MessageProps} from "./types/MessageProps";
import {Col, Grid, Row} from "react-native-easy-grid";
import makeStyles from "../utils/makeStyles";
import Icons8DoubleTickIcon from "../../assets/icons/DoubleTickIcon";
import Icons8CheckmarkIcon from "../../assets/icons/CheckmarkIcon";

const useStyles = makeStyles((theme) => ({
    sentMessage: {
        backgroundColor: theme.palette.Primary,
    },
    sendMessageText: {
        color: theme.palette.textSecondary,
    },
    receiveMessageText: {color: theme.palette.textPrimary},
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
    seenMessage: {},
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
}));

export default function ({message, type, seen, date, showDate}: MessageProps) {
    const styles = useStyles();
    return (
        <Grid
            style={
                type === "send" ? {alignItems: "flex-end", width: "100%"} : {alignItems: "flex-start", width: "100%"}
            }
        >
            <Row
                style={
                    type === "send" ? [styles.sentMessage, styles.padding] : [styles.receivedMessage, styles.padding]
                }
            >
                <Col>
                    <Text style={type === "send" ? styles.sendMessageText : styles.receiveMessageText}>{message}</Text>
                </Col>
            </Row>
            {showDate && (
                <Row style={type !== "send" ? styles.receiveRow : styles.sendRow}>
                    <Text style={styles.textStyle}>{date}</Text>
                    {type === "send" && seen ? (
                        <Icons8DoubleTickIcon style={styles.icon} />
                    ) : (
                        type === "send" && !seen && <Icons8CheckmarkIcon style={styles.icon} />
                    )}
                </Row>
            )}
        </Grid>
    );
}
