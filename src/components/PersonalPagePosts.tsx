import React from "react";
import {Content, Row, Text, View} from "native-base";
import {t} from "i18n-js";
import ExplorePosts from "./ExplorePosts";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    primary: {
        height: 250,
    },
    title: {
        height: "auto",
    },
});

export default function () {
    return (
        <View style={styles.primary}>
            <Row style={styles.title}>
                <Text>{t("posts")}</Text>
            </Row>
            <Row>
                <Content>
                    <ExplorePosts navigation={undefined} />
                </Content>
            </Row>
        </View>
    );
}
