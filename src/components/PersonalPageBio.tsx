import React from "react";
import {Row, Text} from "native-base";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    row: {
        borderBottomColor: "#F1F1F1",
        borderBottomWidth: 1,
        maxHeight: 50,
        minHeight: 30,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
    },
    text: {
        fontSize: 14,
    },
});

export default function ({bio}: {bio: string}) {
    return (
        <Row style={styles.row}>
            <Text style={styles.text}>{bio}</Text>
        </Row>
    );
}
