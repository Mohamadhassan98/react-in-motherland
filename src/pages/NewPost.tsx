import React from "react";
import {Image, TouchableOpacity, View} from "react-native";

import Header from "../components/NewPostHeader";
import Content from "../components/NewPost";
import {materialColors} from "../values/materialColors";
import {StackNavigator} from "../values/Routing";

const data = {
    PostItem: [
        {
            ImageName: require("../../assets/images/post.jpg"),
        },
        {
            ImageName: require("../../assets/images/post.jpg"),
        },
        {
            ImageName: require("../../assets/images/post.jpg"),
        },
        {
            ImageName: require("../../assets/images/post.jpg"),
        },
        {
            ImageName: require("../../assets/images/post.jpg"),
        },
    ],
};
export default ({navigation: navigator}: StackNavigator<"NewPost">) => {
    const PostItemList = data.PostItem.map((Items, index) => {
        return (
            <TouchableOpacity
                key={`item-${index}`}
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: materialColors[19],
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 15,
                    overflow: "hidden",
                }}
            >
                <Image source={Items.ImageName} style={{width: "100%", height: "100%"}} />
            </TouchableOpacity>
        );
    });
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: materialColors[20],
            }}
        >
            <Header
                onBackPressed={navigator.canGoBack() ? navigator.goBack : console.log}
                onUserPressed={() => navigator.navigate("Profile")}
                Title='Post'
            />
            <Content PostItemList={PostItemList} />
        </View>
    );
};
