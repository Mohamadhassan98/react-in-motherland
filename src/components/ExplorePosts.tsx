import React from "react";
import {Thumbnail, View} from "native-base";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    gridItem: {
        flex: 1,
        flexBasis: "33%",
        maxWidth: "33%",
        width: "33%",
        padding: 9,
    },
    thumbnail: {
        borderRadius: 15,
        height: 100,
        width: 100,
    },
});

export default function () {
    const fakeData = new Array<string>(15).fill(
        "https://www.animalfactsencyclopedia.com/images/animalextremeclose-up-groundhog.jpg"
    );
    return (
        <View style={styles.grid}>
            {fakeData.map((uri, index) => (
                <View key={index} style={styles.gridItem}>
                    <Thumbnail square source={{uri}} style={styles.thumbnail} />
                </View>
            ))}
        </View>
    );
}
