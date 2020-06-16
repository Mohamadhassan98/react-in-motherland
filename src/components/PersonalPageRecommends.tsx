import React from "react";
import {Row, Thumbnail} from "native-base";
import {StyleSheet} from "react-native";

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
});

export default function ({images}: {images: string[]}) {
    return (
        <Row style={styles.row}>
            {images.map((uri, index) => (
                <Thumbnail style={styles.images} source={{uri}} circular key={index} />
            ))}
        </Row>
    );
}
