import React from "react";
import {View} from "react-native";

import Header from "../components/NewPostHeader";
import UserItemList from "../components/NotificationItem";
import {t} from "i18n-js";
import {materialColors} from "../values/materialColors";
import {ScrollView} from "react-native-gesture-handler";
import {StackNavigator} from "../values/Routing";
import MainHeader from "../components/MainHeader";
import SimpleHeader from "../components/SimpleHeader";

const CategoryList = [
    {
        CategoryName: "new",
        UserDetails: [
            {
                UserName: "Mahdi",
                UserStatus: "likedYourPost",
                LastSeen: "SevenHoursAgo",
            },
            {
                UserName: "Mahdi",
                UserStatus: "likedYourPost",
                LastSeen: "SevenHoursAgo",
            },
            {
                UserName: "Mahdi",
                UserStatus: "likedYourPost",
                LastSeen: "SevenHoursAgo",
            },
        ],
    },
    {
        CategoryName: "today",
        UserDetails: [
            {
                UserName: "Mahdi",
                UserStatus: "likedYourPost",
                LastSeen: "SevenHoursAgo",
            },
            {
                UserName: "Mahdi",
                UserStatus: "likedYourPost",
                LastSeen: "SevenHoursAgo",
            },
            {
                UserName: "Mahdi",
                UserStatus: "likedYourPost",
                LastSeen: "SevenHoursAgo",
            },
        ],
    },
    {
        CategoryName: "thisWeek",
        UserDetails: [
            {
                UserName: "Mahdi",
                UserStatus: "likedYourPost",
                LastSeen: "SevenHoursAgo",
            },
            {
                UserName: "Mahdi",
                UserStatus: "likedYourPost",
                LastSeen: "SevenHoursAgo",
            },
            {
                UserName: "Mahdi",
                UserStatus: "likedYourPost",
                LastSeen: "SevenHoursAgo",
            },
        ],
    },
    {
        CategoryName: "thisMonth",
        UserDetails: [
            {
                UserName: "Mahdi",
                UserStatus: "likedYourPost",
                LastSeen: "SevenHoursAgo",
            },
            {
                UserName: "Mahdi",
                UserStatus: "likedYourPost",
                LastSeen: "SevenHoursAgo",
            },
            {
                UserName: "Mahdi",
                UserStatus: "likedYourPost",
                LastSeen: "SevenHoursAgo",
            },
        ],
    },
];

export default ({navigation, route}: StackNavigator<"MyNotification">) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: materialColors[20],
                paddingTop: 0,
                marginTop: 0,
            }}
        >
            <MainHeader noShadow size='collapsed'>
                <SimpleHeader navigation={navigation} title='notificationHeader' />
            </MainHeader>

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
                            CategoryName={t(name.CategoryName)}
                            UserDetails={name.UserDetails}
                        />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};
