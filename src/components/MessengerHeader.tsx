import React from "react";
import {Col, Icon, Text} from "native-base";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    emptyColumn: {
        flex: 2,
    },
    iconColumn: {
        flex: 1,
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
            <Col style={styles.emptyColumn} />
            <Col style={styles.titleColumn}>
                <Text style={styles.titleTextAlign}>{t("chats")}</Text>
            </Col>
            <Col style={styles.iconColumn}>
                <Icon name='md-search' />
            </Col>
            <Col style={styles.iconColumn}>
                <Icon name='group' type='MaterialIcons' />
            </Col>
        </>
    );
}
