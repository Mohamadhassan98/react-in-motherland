import React from "react";
import {StyleSheet} from "react-native";
import {Button, Icon, Input, Item} from "native-base";
import CommonColor from "../../native-base-theme/variables/commonColor";
import {Col, Grid} from "react-native-easy-grid";
import {t} from "i18n-js";

const styles = StyleSheet.create({
    addButton: {
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
    },
    addCol: {
        alignItems: "center",
        justifyContent: "center",
        width: 30,
    },
    addIcon: {
        color: "rgba(22, 31, 61, 0.5)",
        marginLeft: 0,
        marginRight: 0,
    },
    grid: {
        alignItems: "center",
        justifyContent: "space-around",
        paddingLeft: 7,
        paddingRight: 7,
        width: "100%",
    },
    input: {
        height: 36,
        marginRight: 6,
    },
    sendCol: {
        height: 40,
        paddingLeft: 0,
        paddingRight: 0,
        width: 40,
    },
    sendMessageButton: {
        alignItems: "center",
        backgroundColor: CommonColor.brandPrimary,
        borderRadius: 50,
        height: 40,
        justifyContent: "center",
        width: 40,
    },
    sendMessageIcon: {
        color: CommonColor.inverseTextColor,
        marginLeft: 0,
        marginRight: 0,
    },
});

export default function () {
    return (
        <Grid style={styles.grid}>
            <Col style={styles.addCol}>
                <Icon name='md-add' style={styles.addIcon} />
            </Col>
            <Col>
                <Item rounded style={styles.input}>
                    <Input placeholder={t("messageBoxPlaceHolder")} />
                </Item>
            </Col>
            <Col style={styles.sendCol}>
                <Button style={styles.sendMessageButton}>
                    <Icon name='send' type='MaterialIcons' style={styles.sendMessageIcon} />
                </Button>
            </Col>
        </Grid>
    );
}
