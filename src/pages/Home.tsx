import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {t} from "i18n-js";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
});

export default function () {
    return (
        <View style={styles.container}>
            <Text>{t("messenger")}</Text>
        </View>
    );
}
