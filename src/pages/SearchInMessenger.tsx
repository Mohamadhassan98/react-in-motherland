import React, {useState} from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import {ScrollView, StyleSheet} from "react-native";
import SearchInMessengerHeader from "../components/SearchInMessengerHeader";
import {
    Badge,
    Body,
    Container,
    Content,
    Icon,
    Left,
    List,
    ListItem,
    Right,
    Text,
    Thumbnail,
    View,
    Button,
} from "native-base";
import {t} from "i18n-js";
import {Recent, peopleList} from "../values/strings";

const styles = StyleSheet.create({
    Info: {
        borderBottomWidth: 1,
        borderColor: "#eeeeee",
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
        //height:'100%'
    },
    listItem: {
        alignItems: "flex-end",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
    notif1: {
        fontSize: 1,
        height: 25,
        //minWidth: 20,
        position: "absolute",
        top: ".01%",
        end: "5%",
        backgroundColor: "#b4b4b4",
    },
    notif2: {
        fontSize: 1,
        height: 25,
        //minWidth: 20,
        position: "absolute",
        top: ".01%",
        end: "5%",
        backgroundColor: "#67c074",
    },
    notification: {
        //backgroundColor: "#67c074",
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
        //backgroundColor: "red",
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
        // height: 30,
        //marginBottom: "2%",
        //marginTop: "2%",
        width: "100%",
    },

    recentText: {
        marginBottom: "2%",
        marginStart: "5%",
        marginTop: "2%",
    },
    text: {
        textAlign: "left",
    },
    textLastSeen: {
        marginBottom: "5%",
        textAlign: "left",
    },
    trash: {
        color: "#5f5e5e",
        end: "5%",
        marginTop: "1%",
        position: "absolute",
    },
});

export default function SearchInMessenger() {
    const [Empty, setEmpty] = useState(false);
    const [RecentList, setRecentList] = useState(Recent);
    return (
        <MainPageLayout active={3}>
            <MainHeader size='collapsed'>
                <SearchInMessengerHeader />
            </MainHeader>
            {/* Rest of code here */}

            <Content>
                <View style={{width: "100%", height: 10}} />
                <ScrollView horizontal={true}>
                    {peopleList.map((item) => (
                        <View style={styles.people} key={item.id}>
                            <Thumbnail source={item.img} />
                            <Text style={{marginTop: "5%", fontSize: 13}}>{item.firstName}</Text>
                            {item.messageNumber !== 0 && (
                                <Badge style={item.mute ? styles.notif1 : styles.notif2}>
                                    <Text style={{fontSize: 13}}>{item.messageNumber}</Text>
                                </Badge>
                            )}
                            {item.online === true && <View style={styles.online} />}
                        </View>
                    ))}
                </ScrollView>

                <View style={{width: "100%", height: 10}} />
                <View style={styles.recent}>
                    <Text style={styles.recentText}>{t("recent")}</Text>
                    <Icon
                        name='md-trash'
                        style={styles.trash}
                        onPress={() => {
                            let List = RecentList.filter((Item) => Item.id < 0);
                            setRecentList(List);
                            List.length > 0 ? setEmpty(false) : setEmpty(true);
                        }}
                    />
                </View>

                <View style={{width: "100%", height: 10}} />
                {Empty ? (
                    <></>
                ) : (
                    <>
                        {RecentList.map((item) => (
                            <View style={styles.listItem} key={item.id}>
                                <View style={styles.close}>
                                    <Icon
                                        style={{fontSize: 15, color: "#a39f9f"}}
                                        name='md-close'
                                        onPress={() => {
                                            let List = RecentList.filter((Item) => Item.id !== item.id);
                                            setRecentList(List);
                                            List.length > 0 ? setEmpty(false) : setEmpty(true);
                                        }}
                                    />
                                </View>
                                <View style={styles.avatar}>
                                    <Thumbnail source={item.img} />
                                </View>
                                <View style={styles.Info}>
                                    <Text style={styles.text}>{`${item.FirstName} ${item.LastName}`}</Text>
                                    <Text note style={styles.textLastSeen}>
                                        {item.numberOfMembers
                                            ? item.numberOfMembers + t(item.Description)
                                            : t(item.Description)}
                                    </Text>
                                </View>
                                <View style={styles.notification}>
                                    {item.notification !== "" && (
                                        <Badge
                                            style={
                                                item.mute ? {backgroundColor: "#b4b4b4"} : {backgroundColor: "#67c074"}
                                            }
                                        >
                                            <Text>{item.notification}</Text>
                                        </Badge>
                                    )}
                                </View>
                            </View>
                        ))}
                    </>
                )}
            </Content>
        </MainPageLayout>
    );
}
