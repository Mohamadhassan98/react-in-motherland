import React from "react";
import {StyleSheet} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../values/Routing";
import {t} from "i18n-js";
import {View} from "native-base";
import FeedPost from "./FeedPost";
import {FeedPostProps} from "./types/FeedPostProps";

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        flexWrap: "wrap",
    },
});

export default function ({
    navigation,
}: {
    navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}) {
    const messages = new Array<Omit<FeedPostProps, "navigation">>(3).fill({
        datePublished: t("_todayChannelPost"),
        postCaption:
            "What is the loop of Creation? How is there something from nothing? In spite of the fact that it is impossible to prove that anythin….",
        profileImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/368px-Donald_Trump_official_portrait.jpg",
        visibleName: "Donald Trump",
        postMediaUri: "https://www.animalfactsencyclopedia.com/images/animalextremeclose-up-racoon.jpg",
    });
    return (
        <View style={styles.grid}>
            {messages.map((value, index) => (
                <FeedPost {...value} navigation={navigation} key={index} />
            ))}
        </View>
    );
}
