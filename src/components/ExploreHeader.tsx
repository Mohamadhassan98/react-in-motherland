import React from "react";
import {Col, Icon, Text} from "native-base";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    explore: {
        flex: 5,
    },
    icon: {
        flex: 1,
    },
    rest: {
        flexGrow: 8,
    },
});

export default function () {
    return (
        <>
            <Col style={styles.icon}>
                <Icon name='chevron-left' type='MaterialIcons' />
            </Col>
            <Col style={styles.explore}>
                <Text>{t("explore")}</Text>
            </Col>
            <Col style={styles.rest} />
            <Col style={styles.icon}>
                <Icon name='md-search' />
            </Col>
        </>
    );
}
