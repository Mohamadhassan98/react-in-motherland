import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {t} from "i18n-js";
import MainPageLayout from "../components/MainPageLayout";
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
});

export default function () {
    return (
        <MainPageLayout active={0}>
            <View style={styles.container}>
                <Text>{t("chat room")}</Text>
            </View>
        </MainPageLayout>
    );
}
