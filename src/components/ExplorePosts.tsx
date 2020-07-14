import React from "react";
import {Button, Thumbnail, View} from "native-base";
import {StyleSheet} from "react-native";
import {ExplorePostsProps} from "./types/ExplorePostsProps";
import {t} from "i18n-js";

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
        height: "100%",
        width: "100%",
    },
});

export default function ({navigation}: ExplorePostsProps) {
    const fakeData = new Array<string>(15).fill(
        "https://www.animalfactsencyclopedia.com/images/animalextremeclose-up-groundhog.jpg"
    );
    return (
        <View style={styles.grid}>
            {fakeData.map((uri, index) => (
                <View key={index} style={styles.gridItem}>
                    <Button
                        transparent
                        style={{height: 100, width: 100}}
                        onPress={() => {
                            navigation!.navigate("PostPage", {
                                profileImage:
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/368px-Donald_Trump_official_portrait.jpg",
                                visibleName: "Donald Trump",
                                likes: 345,
                                postCaption: "this is a test",
                                postMediaUri: uri,
                                datePublished: t("_tenMinutesAgo"),
                                shares: 123,
                                comments: new Array(5).fill({
                                    body: "Please delay the project deadline.",
                                    datePublished: t("_3MinutesAgo"),
                                    profileImage:
                                        "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
                                    visibleName: "Amir reza",
                                }),
                            });
                        }}
                    >
                        <Thumbnail square source={{uri}} style={styles.thumbnail} />
                    </Button>
                </View>
            ))}
        </View>
    );
}
