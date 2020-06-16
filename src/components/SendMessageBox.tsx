import React from "react";
import {Image, StyleSheet} from "react-native";
import {Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from "native-base";
import CommonColor from "../../native-base-theme/variables/commonColor";
import {Col, Row, Grid} from "react-native-easy-grid";
import {MessageProps} from "./types/MessageProps";
import {t} from "i18n-js";

const styles = StyleSheet.create({
    sendMediaIcon: {
        color: CommonColor.brandInfo,
    },

    sendMessageButton: {
        backgroundColor: CommonColor.brandPrimary,
    },

    sendMessageIcon: {
        color: CommonColor.inverseTextColor,
    },


});

export default function() {
    return (
            <Grid>
                <Col style={{height: 50, width: 50}}>
                    <Button>
                        <Icon name='md-add'/>
                    </Button>
                </Col>
                <Col style={{height: 50, width: 50}}>
                    <Text>
                        {t("messageBoxPlaceHolder")}
                    </Text>
                </Col>
                <Col style={{height: 50, width: 60}}>
                    <Button style={styles.sendMessageButton}>
                        <Icon name='SendIcon' type='MaterialIcons' style={styles.sendMessageIcon}/>
                    </Button>
                </Col>
            </Grid>
    );
}