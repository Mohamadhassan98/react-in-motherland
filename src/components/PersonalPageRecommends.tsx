import React from "react";
import {Row, Text, Thumbnail, View} from "native-base";
import {StyleSheet} from "react-native";
import {t} from "i18n-js";

const styles = StyleSheet.create({
    images: {
        marginBottom: 16,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 16,
    },
    row: {
        borderBottomColor: "#F1F1F1",
        borderBottomWidth: 1,
        height: "auto",
    },
    text: {
        fontSize: 12,
        marginStart: 16,
    },
});

export default function ({images}: {images: string[]}) {
    return (
        <View>
            <Text style={styles.text}>{t("suggestions")}</Text>
            <Row style={styles.row}>
                {images.map((uri, index) => (
                    <Thumbnail style={styles.images} source={{uri}} circular key={index} />
                ))}
            </Row>
        </View>
    );
}
