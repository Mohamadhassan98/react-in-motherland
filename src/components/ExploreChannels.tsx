import React from "react";
import {View} from "native-base";
import {StyleSheet} from "react-native";
import ChannelMessage from "./ChannelMessage";
import {ChannelMessageProps} from "./types/ChannelMessageProps";

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        flexWrap: "wrap",
    },
});

export default function () {
    const messages = new Array<ChannelMessageProps>(5).fill({
        date: "today 03:24 PM",
        message:
            "What is the loop of Creation? How is there something from nothing? In spite of the fact that it is impossible to prove that anythin….",
        profileImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/368px-Donald_Trump_official_portrait.jpg",
        profileUsername: "Donald Trump",
        media: "https://www.animalfactsencyclopedia.com/images/animalextremeclose-up-racoon.jpg",
    });
    return (
        <View style={styles.grid}>
            {messages.map((value, index) => (
                <ChannelMessage {...value} key={index} />
            ))}
        </View>
    );
}
