import React from "react";
import {View} from "react-native";

import Header from "../components/NewPostHeader";
import UserItemList from "../components/NotificationItem";
import {t} from "i18n-js";
import {materialColors} from "../values/materialColors";
import {ScrollView} from "react-native-gesture-handler";
import {StackNavigator} from "../values/Routing";

const CategoryList = [
    {
        CategoryName: "New",
        UserDetails: [
            {
                UserName: "Mahdi",
                UserStatus: "Liked Your Post",
                LastSeen: "7h ago",
            },
            {
                UserName: "Mahdi",
                UserStatus: "Liked Your Post",
                LastSeen: "7h ago",
            },
            {
                UserName: "Mahdi",
                UserStatus: "Liked Your Post",
                LastSeen: "7h ago",
            },
        ],
    },
    {
        CategoryName: "Today",
        UserDetails: [
            {
                UserName: "Mahdi",
                UserStatus: "Liked Your Post",
                LastSeen: "7h ago",
            },
            {
                UserName: "Mahdi",
                UserStatus: "Liked Your Post",
                LastSeen: "7h ago",
            },
            {
                UserName: "Mahdi",
                UserStatus: "Liked Your Post",
                LastSeen: "7h ago",
            },
        ],
    },
    {
        CategoryName: "This Week",
        UserDetails: [
            {
                UserName: "Mahdi",
                UserStatus: "Liked Your Post",
                LastSeen: "7h ago",
            },
            {
                UserName: "Mahdi",
                UserStatus: "Liked Your Post",
                LastSeen: "7h ago",
            },
            {
                UserName: "Mahdi",
                UserStatus: "Liked Your Post",
                LastSeen: "7h ago",
            },
        ],
    },
    {
        CategoryName: "This Month",
        UserDetails: [
            {
                UserName: "Mahdi",
                UserStatus: "Liked Your Post",
                LastSeen: "7h ago",
            },
            {
                UserName: "Mahdi",
                UserStatus: "Liked Your Post",
                LastSeen: "7h ago",
            },
            {
                UserName: "Mahdi",
                UserStatus: "Liked Your Post",
                LastSeen: "7h ago",
            },
        ],
    },
];

export default ({navigation: navigator, route}: StackNavigator<"MyNotification">) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: materialColors[20],
                paddingTop: 0,
                marginTop: 0,
            }}
        >
            <Header
                url={route.params.uri}
                onBackPressed={navigator.canGoBack() ? navigator.goBack : console.log}
                onUserPressed={() => navigator.navigate("EditProfile")}
                Title={t("notificationHeader")}
            />
            <View
                style={{
                    flex: 7,
                    backgroundColor: materialColors[20],
                }}
            >
                <ScrollView>
                    {CategoryList.map((name, index) => (
                        <UserItemList
                            url={route.params.uri}
                            key={`notification-${index}`}
                            CategoryName={name.CategoryName}
                            UserDetails={name.UserDetails}
                        />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};
