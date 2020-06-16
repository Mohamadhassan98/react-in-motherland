import React from "react";
import {Container, Header, Content, Card, CardItem, Body, Text, Footer, FooterTab, Button, Icon} from "native-base";
import {MessageProps} from "./types/MessageProps";
import {Col, Row, Grid} from "react-native-easy-grid";
import CommonColor from "../../native-base-theme/variables/commonColor";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    messageCardItemReceive: {
        backgroundColor: CommonColor.brandInfo,
        maxWidth: 300,
    },
    messageCardItemSend: {
        backgroundColor: CommonColor.brandPrimary,
        maxWidth: 300,
    },
    messageSeen: {
        color: CommonColor.brandPrimary,
    },
    messageTextReceive: {
        color: CommonColor.textColor,
    },
    messageTextSend: {
        color: CommonColor.inverseTextColor,
    },
    messageUnseen: {
        color: CommonColor.brandLight,
    },
    sentMessage: {
        alignSelf: "flex-end",
    },
    receivedMessage: {
        alignSelf: "flex-start",
    },
    sentRow: {
        alignItems: "flex-end",
    },
    receivedRow: {
        alignItems: "flex-start",
    },
});

export default function({message, type, seen, date, showDate}: MessageProps) {
    return (
        <Grid style={type === "send" ? styles.sentMessage : styles.receivedMessage}>
            <Row>
                <Card>
                    <CardItem style={type === "send" ? styles.messageCardItemSend : styles.messageCardItemReceive}>
                        <Body>
                            <Text style={type === "send" ? styles.messageTextSend : styles.messageTextReceive}>{message}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </Row>
            <Row style={type === "send" ? styles.sentRow : styles.receivedRow}>
                {type === "send" && showDate && (
                    <Col style={{height: 50, width: 50}}>
                        <Icon name='md-checkmark-done' style={seen ? styles.messageSeen : styles.messageUnseen}/>
                    </Col>
                )}
                {showDate && (
                    <Col style={{height: 50, width: 50}}>
                    <Text>
                        {date}
                    </Text>
                </Col>
                )}
            </Row>
        </Grid>
    );
}
