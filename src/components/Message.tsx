import React from "react";
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Body,
    Text,
    Footer,
    FooterTab,
    Button,
    Icon,
    Thumbnail,
} from "native-base";
import {MessageProps} from "./types/MessageProps";
import {Col, Row, Grid} from "react-native-easy-grid";
import CommonColor from "../../native-base-theme/variables/commonColor";
import {StyleSheet} from "react-native";
import seenMessage from "../../assets/seen.svg";
import makeStyles from "../utils/makeStyles";
import login from "../../assets/login.png";
import Svg, {G, Path} from "react-native-svg";
import Icons8DoubleTickIcon from "../../assets/icons/DoubleTickIcon";
const useStyles = makeStyles((theme) => ({
    sentMessage: {
        backgroundColor: theme.palette.Primary,
        borderRadius: 5,
        paddingLeft: 7,
    },
    sendMessageText: {
        color: theme.palette.textSecondary,
    },
    receiveMessageText: {color: theme.palette.textPrimary},
    receivedMessage: {
        backgroundColor: "#EDEEF2",
        borderRadius: 5,
        paddingLeft: 7,
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
    },
    receiveRow: {
        justifyContent: "flex-end",
        alignItems: "center",
    },
}));
export default function ({message, type, seen, date, showDate}: MessageProps) {
    const styles = useStyles();
    return (
        // <Grid style={type === "send" ? styles.sentMessage : styles.receivedMessage}>
        //     <Row>
        //         <Card>
        //             <CardItem style={type === "send" ? styles.messageCardItemSend : styles.messageCardItemReceive}>
        //                 <Body>
        //                     <Text style={type === "send" ? styles.messageTextSend : styles.messageTextReceive}>{message}</Text>
        //                 </Body>
        //             </CardItem>
        //         </Card>
        //     </Row>
        //     <Row style={type === "send" ? styles.sentRow : styles.receivedRow}>
        //         {type === "send" && showDate && (
        //             <Col style={{height: 50, width: 50}}>
        //                 <Icon name='md-checkmark-done' style={seen ? styles.messageSeen : styles.messageUnseen}/>
        //             </Col>
        //         )}
        //         {showDate && (
        //             <Col style={{height: 50, width: 50}}>
        //             <Text>
        //                 {date}
        //             </Text>
        //         </Col>
        //         )}
        //     </Row>
        // </Grid>
        <Grid style={{maxWidth: "70%"}}>
            <Row style={type === "send" ? styles.sentMessage : styles.receivedMessage}>
                <Col>
                    <Text style={type === "send" ? styles.sendMessageText : styles.receiveMessageText}>{message}</Text>
                </Col>
            </Row>
            <Row style={type !== "send" ? styles.receiveRow : styles.sendRow}>
                {type === "send" && <Icons8DoubleTickIcon style={styles.icon} />}
                {showDate && <Text style={styles.textStyle}>{date}</Text>}
            </Row>
        </Grid>
    );
}
