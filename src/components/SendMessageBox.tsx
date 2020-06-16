import React from "react";
import {Image, StyleSheet} from "react-native";
import {Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from "native-base";
import CommonColor from "../../native-base-theme/variables/commonColor";
import {Col, Row, Grid} from "react-native-easy-grid";
import {MessageProps} from "./types/MessageProps";
import {t} from "i18n-js";

const styles = StyleSheet.create({
    sendMessageIcon: {
        backgroundColor: CommonColor.brandPrimary,
        color : CommonColor.inverseTextColor,
    },

});

export default function() {
    return (
        <Container>
            <Header/>
            <Grid>
                <Col style={{height: 50, width: 50}}>
                    <Icon name='add-outline'/>
                </Col>
                <Col style={{height: 50, width: 50}}>
                    <Text>
                        {t("messageBoxPlaceHolder")}
                    </Text>
                </Col>
                <Col style={{height: 50, width: 50}}>
                    <Icon name='SendIcon' type='MaterialIcons' style={styles.sendMessageIcon}/>
                </Col>
            </Grid>
        </Container>
    );
}