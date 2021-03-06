import React from "react";
import {View} from "native-base";
import {StyleSheet} from "react-native";
import ChannelMessage from "./ChannelMessage";
import {ChannelMessageProps} from "./types/ChannelMessageProps";
import {t} from "i18n-js";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../values/Routing";

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        flexWrap: "wrap",
    },
});

export default function ({
    navigation,
    route,
}: {
    navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
    route: {name: string};
}) {
    const messages = new Array<Omit<ChannelMessageProps, "navigation" | "route">>(5).fill({
        date: t("_todayChannelPost"),
        message:
            "What is the loop of Creation? How is there something from nothing? In spite of the fact that it is impossible to prove that anythin….",
        profileImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/368px-Donald_Trump_official_portrait.jpg",
        profileUsername: "Donald Trump",
        media: "https://www.animalfactsencyclopedia.com/images/animalextremeclose-up-racoon.jpg",
        isLiked: false,
    });
    return (
        <View style={styles.grid}>
            {messages.map((value, index) => (
                <ChannelMessage {...value} navigation={navigation} key={index} route={route} />
            ))}
        </View>
    );
}
