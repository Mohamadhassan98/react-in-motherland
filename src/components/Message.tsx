import React from "react";
import {Container, Header, Content, Card, CardItem, Body, Text, Footer, FooterTab, Button, Icon} from "native-base";
import {MessageProps} from "./types/MessageProps";
import {Col, Row, Grid} from "react-native-easy-grid";
import CommonColor from "../../native-base-theme/variables/commonColor";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    messageCardItemReceive: {
        backgroundColor : CommonColor.brandInfo
    },
    messageCardItemSend: {
        backgroundColor : CommonColor.brandPrimary
    },
    messageSeen :{
        color : CommonColor.brandPrimary
    },
    messageTextReceive : {
        color : CommonColor.textColor
    },
    messageTextSend : {
        color : CommonColor.inverseTextColor
    },
    messageUnseen: {
        color: CommonColor.brandLight
    }
});

export default function({message, type, seen, date}: MessageProps) {
    return (
        <Container>
            <Header/>
            <Grid>
                <Row>
                    <Content>
                        <Card>
                            <CardItem style={type==="send" ?styles.messageCardItemSend : styles.messageCardItemReceive}>
                                <Body>
                                    <Text style={type==="send" ? styles.messageTextSend : styles.messageTextReceive}>{message}</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </Row>
                <Row>
                    <Col style={{height: 50, width: 50}}>
                        <Icon name='md-checkmark-done' style={seen ? styles.messageSeen : styles.messageUnseen}/>
                    </Col>
                    <Col style={{height: 50, width: 50}}>
                        <Text>
                            {date}
                        </Text>
                    </Col>
                </Row>
            </Grid>
        </Container>
    );
}
