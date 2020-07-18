import React, {useState} from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import {Alert, ScrollView, TouchableOpacity} from "react-native";
import SearchInMessengerHeader from "../components/SearchInMessengerHeader";
import {Badge, Content, Icon, Text, Thumbnail, View} from "native-base";
import {t} from "i18n-js";
import {peopleList, Recent} from "../values/strings";
import {StackNavigator} from "../values/Routing";
import makeStyles from "../utils/makeStyles";
import Avatar from "../components/Avatar";

const useStyles = makeStyles((theme) => ({
    Info: {
        borderBottomWidth: 1,
        borderColor: "#eeeeee",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "2%",
        width: "65%",
        fontFamily: theme.font.Body,
    },
    InfoEnd: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "2%",
        width: "65%",
    },
    avatar: {
        width: "15%",
    },
    close: {
        alignSelf: "center",
        textAlign: "center",
        width: "5%",
    },
    end: {
        alignSelf: "flex-end",
    },
    listItem: {
        alignItems: "flex-end",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "2%",
        width: "100%",
    },
    notif1: {
        fontSize: 1,
        height: 25,
        position: "absolute",
        top: ".01%",
        end: "5%",
        backgroundColor: "#b4b4b4",
    },
    notif2: {
        fontSize: 1,
        height: 25,
        position: "absolute",
        top: ".01%",
        end: "5%",
        backgroundColor: "#67c074",
    },
    notification: {
        borderBottomWidth: 1,
        borderColor: "#eeeeee",
        justifyContent: "center",
        width: "10%",
        paddingBottom: "4%",
    },
    online: {
        backgroundColor: "#50e016",
        borderColor: "white",
        borderRadius: 25,
        borderWidth: 1,
        end: "15%",
        height: 10,
        position: "absolute",
        top: "55%",
        width: 10,
    },
    people: {
        alignItems: "center",
        display: "flex",
        width: 80,
    },
    peopleList: {
        direction: "rtl",
    },
    recent: {
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "row",

        width: "100%",
    },
    recentText: {
        marginBottom: "2%",
        marginStart: "5%",
        marginTop: "2%",
        fontFamily: theme.font.Body,
    },
    right_end: {
        alignSelf: "flex-end",
        height: "100%",
    },
    text: {
        textAlign: "left",
        fontFamily: theme.font.Body,
    },
    textLastSeen: {
        marginBottom: "5%",
        textAlign: "left",
        fontFamily: theme.font.Body,
    },
    time: {
        borderBottomWidth: 1,
        borderColor: "#eeeeee",
        height: "90%",
        paddingBottom: "4%",
        width: "10%",
        fontFamily: theme.font.Body,
    },
    timeEnd: {
        height: "90%",
        paddingBottom: "4%",
        width: "10%",
        fontFamily: theme.font.Body,
    },
    trash: {
        color: "#5f5e5e",
        end: "5%",
        marginTop: "1%",
        position: "absolute",
    },
    FirstNameText: {
        marginTop: "5%",
        fontSize: 13,
        fontFamily: theme.font.Body,
    },
    textMessageNumber: {
        fontSize: 13,
        fontFamily: theme.font.Body,
    },
    notificationText: {
        fontFamily: theme.font.Body,
    },
}));

export default function SearchInMessenger({navigation, route}: StackNavigator<"SearchInMessenger">) {
    const [RecentList, setRecentList] = useState(Recent);
    const [SearchText, setSearchText] = useState<string | undefined>();
    const styles = useStyles();
    return (
        <MainPageLayout active={3} navigation={navigation}>
            <MainHeader size='collapsed'>
                <SearchInMessengerHeader
                    setSearchText={setSearchText}
                    searchText={SearchText}
                    navigation={navigation}
                />
            </MainHeader>
            {/* Rest of code here */}
            <Content>
                {!SearchText ? (
                    <>
                        <View style={styles.recent}>
                            <Text style={styles.recentText}>{t("People")}</Text>
                        </View>
                        <View style={{width: "100%", height: 10}} />
                        <ScrollView horizontal={true}>
                            {peopleList.map(
                                ({firstName, id, img: profileImage, lastName, messageNumber, mute, online}) => (
                                    <TouchableOpacity
                                        onPress={() =>
                                            navigation.navigate("ChatRoom", {
                                                profileImage,
                                                visibleName: `${firstName} ${lastName}`,
                                                local: !!profileImage,
                                            })
                                        }
                                        style={styles.people}
                                        key={id}
                                    >
                                        {/*<Thumbnail source={item.img} />*/}
                                        <Avatar
                                            profileImage={profileImage}
                                            local
                                            visibleName={`${firstName} ${lastName}`}
                                            size={56}
                                        />
                                        <Text style={styles.FirstNameText}>{firstName}</Text>
                                        {messageNumber !== 0 && (
                                            <Badge style={mute ? styles.notif1 : styles.notif2}>
                                                <Text style={styles.textMessageNumber}>{messageNumber}</Text>
                                            </Badge>
                                        )}
                                        {online && <View style={styles.online} />}
                                    </TouchableOpacity>
                                )
                            )}
                        </ScrollView>
                        {RecentList.length !== 0 && (
                            <View>
                                <View style={{width: "100%", height: 10}} />
                                <View style={styles.recent}>
                                    <Text style={styles.recentText}>{t("recent")}</Text>
                                    <Icon
                                        name='md-trash'
                                        style={styles.trash}
                                        onPress={() => {
                                            Alert.alert(t("ClearSearchHistory"), t("ClearSearchHistoryMessage"), [
                                                {
                                                    text: t("cancel"),
                                                    style: "cancel",
                                                },
                                                {
                                                    text: t("Clear"),
                                                    onPress: () => setRecentList([]),
                                                },
                                            ]);
                                        }}
                                    />
                                </View>
                                <View style={{width: "100%", height: 10}} />
                                {RecentList.map(
                                    ({
                                        Description,
                                        FirstName,
                                        LastName,
                                        id,
                                        img: profileImage,
                                        mute,
                                        notification,
                                        numberOfMembers,
                                    }) => (
                                        <TouchableOpacity
                                            onPress={() => {
                                                switch (Description) {
                                                    case "publicChannel":
                                                    case "privateChannel":
                                                        navigation.navigate("ChannelRoom", {
                                                            onlineMembers: 0,
                                                            members: 12,
                                                            groupName: `${FirstName} ${LastName}`,
                                                            groupImage: profileImage,
                                                            local: !!profileImage,
                                                        });
                                                        break;
                                                    case "members":
                                                        navigation.navigate("GroupChatRoom", {
                                                            onlineMembers: 1,
                                                            members: Number(numberOfMembers),
                                                            groupName: `${FirstName} ${LastName}`,
                                                            groupImage: profileImage,
                                                            local: !!profileImage,
                                                        });
                                                        break;
                                                    case "lastSeenRecently":
                                                        navigation.navigate("ChatRoom", {
                                                            visibleName: `${FirstName} ${LastName}`,
                                                            profileImage,
                                                            local: !!profileImage,
                                                        });
                                                        break;
                                                }
                                            }}
                                            style={styles.listItem}
                                            key={id}
                                        >
                                            <View style={styles.close}>
                                                <Icon
                                                    style={{fontSize: 15, color: "#a39f9f"}}
                                                    name='md-close'
                                                    onPress={() => {
                                                        setRecentList((prevState) =>
                                                            prevState.filter((Item) => Item.id !== id)
                                                        );
                                                    }}
                                                />
                                            </View>
                                            <View style={styles.avatar}>
                                                <Thumbnail source={profileImage} />
                                            </View>
                                            <View style={styles.Info}>
                                                <Text style={styles.text}>{`${FirstName} ${LastName}`}</Text>
                                                <Text note style={styles.textLastSeen}>
                                                    {numberOfMembers
                                                        ? numberOfMembers + t(Description)
                                                        : t(Description)}
                                                </Text>
                                            </View>
                                            <View style={styles.notification}>
                                                {notification !== "" && (
                                                    <Badge
                                                        style={
                                                            mute
                                                                ? {backgroundColor: "#b4b4b4"}
                                                                : {backgroundColor: "#67c074"}
                                                        }
                                                    >
                                                        <Text style={styles.notificationText}>{notification}</Text>
                                                    </Badge>
                                                )}
                                            </View>
                                        </TouchableOpacity>
                                    )
                                )}
                            </View>
                        )}
                    </>
                ) : (
                    <>
                        {/*نتیجه ی سرچ*/}
                        <View style={styles.recent}>
                            <Text style={styles.recentText}>{t("People")}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("ChatRoom", {
                                    profileImage: require("../../assets/img_avatar2.png"),
                                    visibleName: "zahra kml",
                                    local: true,
                                })
                            }
                            style={styles.listItem}
                        >
                            <View style={styles.avatar}>
                                <Avatar
                                    size={56}
                                    visibleName='zahra kml'
                                    profileImage={require("../../assets/img_avatar2.png")}
                                    local
                                />
                            </View>
                            <View style={styles.Info}>
                                <Text style={styles.text}>zahra kml</Text>
                                <Text note style={styles.textLastSeen}>
                                    {t("lastSeen")}
                                </Text>
                            </View>
                            <View style={styles.time}>
                                <Text note>3:54</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("ChatRoom", {
                                    visibleName: "zahra",
                                })
                            }
                            style={styles.listItem}
                        >
                            <View style={styles.avatar}>
                                <Avatar size={56} visibleName='zahra' local />
                            </View>
                            <View style={styles.Info}>
                                <Text style={styles.text}>zahra</Text>
                                <Text note style={styles.textLastSeen}>
                                    {t("lastSeen")}
                                </Text>
                            </View>
                            <View style={styles.time}>
                                <Text note>3:54</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("ChatRoom", {
                                    profileImage: require("../../assets/img_avatar2.png"),
                                    visibleName: "zahra a",
                                    local: true,
                                })
                            }
                            style={styles.listItem}
                        >
                            <View style={styles.avatar}>
                                <Avatar
                                    size={56}
                                    visibleName='zahra a'
                                    profileImage={require("../../assets/img_avatar2.png")}
                                    local
                                />
                            </View>
                            <View style={styles.Info}>
                                <Text style={styles.text}>zahra a</Text>
                                <Text note style={styles.textLastSeen}>
                                    {t("lastSeen")}
                                </Text>
                            </View>
                            <View style={styles.time}>
                                <Text note>3:54</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("ChatRoom", {
                                    visibleName: "zahra gh",
                                })
                            }
                            style={styles.listItem}
                        >
                            <View style={styles.avatar}>
                                <Avatar size={56} visibleName='zahra gh' local />
                            </View>
                            <View style={styles.InfoEnd}>
                                <Text style={styles.text}>zahra gh</Text>
                                <Text note style={styles.textLastSeen}>
                                    {t("lastSeen")}
                                </Text>
                            </View>
                            <View style={styles.timeEnd}>
                                <Text note>3:54</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{width: "100%", height: 10}} />
                        <View style={styles.recent}>
                            <Text style={styles.recentText}>{t("messages")}</Text>
                        </View>
                        <View style={{width: "100%", height: 10}} />
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("ChatRoom", {
                                    visibleName: "faezeh",
                                })
                            }
                            style={styles.listItem}
                        >
                            <View style={styles.avatar}>
                                <Avatar size={56} visibleName='faezeh' />
                            </View>
                            <View style={styles.Info}>
                                <Text style={styles.text}>faezeh</Text>
                                <Text note style={styles.textLastSeen}>
                                    zahra kojai
                                </Text>
                            </View>
                            <View style={styles.time}>
                                <Text note>3:54</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("ChatRoom", {
                                    visibleName: "zahra gh",
                                })
                            }
                            style={styles.listItem}
                        >
                            <View style={styles.avatar}>
                                <Avatar size={56} visibleName='zahra gh' local />
                            </View>
                            <View style={styles.Info}>
                                <Text style={styles.text}>zahra gh</Text>
                                <Text note style={styles.textLastSeen}>
                                    salam zahra
                                </Text>
                            </View>
                            <View style={styles.time}>
                                <Text note>3:54</Text>
                            </View>
                        </TouchableOpacity>
                    </>
                )}
            </Content>
        </MainPageLayout>
    );
}
