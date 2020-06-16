import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {t} from "i18n-js";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import ExploreHeader from "../components/ExploreHeader";

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
            <MainHeader size='collapsed'>
                <ExploreHeader />
            </MainHeader>
            <View style={styles.container}>
                <Text>{t("messenger")}</Text>
            </View>
        </MainPageLayout>
    );
}
