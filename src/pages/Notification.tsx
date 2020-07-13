import React from "react";
import {View} from "react-native";

import Header from "../components/NewPostHeader";
import UserItemList from "../components/NotificationItem";

import {materialColors} from "../values/materialColors";
import {StackNavigationProp} from "@react-navigation/stack";
import {ScrollView} from "react-native-gesture-handler";

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

export default ({navigation: navigator}: {navigation: StackNavigationProp<NavigationPages, "NewPost">}) => {
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
                onBackPressed={navigator.canGoBack() ? navigator.goBack : console.log}
                onUserPressed={() => navigator.navigate("Profile")}
                Title='Notification'
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
