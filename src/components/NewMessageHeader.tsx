import React from "react";
import {Col, Icon, Text} from "native-base";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    emptyColumn: {
        flex: 2,
    },
    iconColumn: {
        flex: 2,
        alignItems:'flex-end',
        right:'10%'
    },
    titleColumn: {
        flexGrow: 8,
    },
    titleTextAlign: {
        textAlign: "center",
    },
    backColumn: {
        flex: 2,
    },
    backIcon:{
        alignSelf:'center',
    }
});

export default function () {
    return (
        <>
            <Col style={styles.backColumn}>
                <Icon name='md-arrow-round-back' style={styles.backIcon}/>
            </Col>
            <Col style={styles.titleColumn}>
                <Text style={styles.titleTextAlign}>{t("newMessage")}</Text>
            </Col>
            <Col style={styles.iconColumn}>
                <Icon name='md-search' />
            </Col>
        </>
    );
}
