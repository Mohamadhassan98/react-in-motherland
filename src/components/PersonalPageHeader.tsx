import React from "react";
import {Col, Icon, Text} from "native-base";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    emptyColumn: {
        flex: 1,
    },
    iconColumn: {
        flex: 1,
    },
    titleColumn: {
        flexGrow: 10,
    },
    titleTextAlign: {
        textAlign: "center",
    },
});

export default function () {
    return (
        <>
            <Col style={styles.emptyColumn} />
            <Col style={styles.titleColumn}>
                <Text style={styles.titleTextAlign}>{t("you")}</Text>
            </Col>
            <Col style={styles.iconColumn}>
                <Icon name='new-message' type='Entypo' />
            </Col>
        </>
    );
}
