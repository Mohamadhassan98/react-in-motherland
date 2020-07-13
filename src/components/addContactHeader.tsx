import React from "react";
import {Col, Icon, Text} from "native-base";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    emptyColumn: {
        flex: 2,
    },
    iconColumn: {
        alignItems: "flex-end",
        flex: 2,
        right: "8%",
    },
    titleColumn: {
        flexGrow: 8,
    },
    titleTextAlign: {
        textAlign: "center",
    },
});

export default function () {
    return (
        <>
            <Col style={styles.emptyColumn}>
                <Icon name='md-arrow-back' />
            </Col>
            <Col style={styles.titleColumn}>
                <Text style={styles.titleTextAlign}>{t("addContact")}</Text>
            </Col>
            <Col style={styles.iconColumn}></Col>
        </>
    );
}
