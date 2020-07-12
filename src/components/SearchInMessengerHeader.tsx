import React from "react";
import {Col, Icon, Text,Input} from "native-base";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    closeColumn: {
        flex: 2,
    },
    backIcon: {
        flex: 2,
    },
    searchColumn: {
        flexGrow: 8,
    },
    closeIcon:{
        alignSelf:'center',
    }
});

export default function () {
    return (
        <>
            <Col style={styles.closeColumn}>
                <Icon name='md-close' style={styles.closeIcon}/>
            </Col>
            <Col style={styles.searchColumn}>
                <Input  placeholder={t("search")}/>
            </Col>
            <Col style={styles.backIcon}>
                <Icon name='md-arrow-back' />
            </Col>
        </>
    );
}
