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
import SimpleHeader from "../components/SimpleHeader";
import {StackNavigator} from "../values/Routing";
import makeStyles from "../utils/makeStyles";



const useStyles = makeStyles((theme) => ({
    Info: {
        borderBottomWidth: 1,
        borderColor: "#eeeeee",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "2%",
        width: "65%",
        fontFamily:theme.font.Body,
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

        width: "100%",
    },

    recentText: {
        marginBottom: "2%",
        marginStart: "5%",
        marginTop: "2%",
        fontFamily:theme.font.Body,
    },
    right_end: {

        alignSelf: "flex-end",
        height: "100%",
    },
    text: {
        textAlign: "left",
        fontFamily:theme.font.Body,
    },
    textLastSeen: {
        marginBottom: "5%",
        textAlign: "left",
        fontFamily:theme.font.Body,
    },
    time: {
        borderBottomWidth: 1,
        borderColor: "#eeeeee",
        height: "90%",
        paddingBottom: "4%",
        width: "10%",
        fontFamily:theme.font.Body,
    },
    timeEnd: {

        height: "90%",
        paddingBottom: "4%",
        width: "10%",
        fontFamily:theme.font.Body,
    },
    trash: {
        color: "#5f5e5e",
        end: "5%",
        marginTop: "1%",
        position: "absolute",
    },
    FirstNameText:{
        marginTop: "5%",
        fontSize: 13,
        fontFamily:theme.font.Body,
    },
    textMessageNumber:{
        fontSize: 13,
        fontFamily:theme.font.Body,
    },
    notificationText:{
        fontFamily:theme.font.Body,
    }
}));

export default function SearchInMessenger({navigation, route}: StackNavigator<"SearchInMessenger">) {
    const [Empty, setEmpty] = useState(false);
    const [RecentList, setRecentList] = useState(Recent);
    const [SearchText, setSearchText] = useState("");
    const styles = useStyles();
    return (
        <MainPageLayout active={3} navigation={navigation}>
            <MainHeader size='collapsed'>
                <SearchInMessengerHeader setSearchText={setSearchText} navigation={navigation}/>
            </MainHeader>
            {/* Rest of code here */}

            <Content>
                {SearchText.length === 0 ? (
                    <>
                        <View style={styles.recent}>
                            <Text style={styles.recentText}>{t("People")}</Text>
                        </View>
                        <View style={{width: "100%", height: 10}} />

                        <ScrollView horizontal={true}>
                            {peopleList.map((item) => (
                                <View style={styles.people} key={item.id}>
                                    <Thumbnail source={item.img} />
                                    <Text style={styles.FirstNameText}>{item.firstName}</Text>
                                    {item.messageNumber !== 0 && (
                                        <Badge style={item.mute ? styles.notif1 : styles.notif2}>
                                            <Text style={styles.textMessageNumber}>{item.messageNumber}</Text>
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
                                            <Text style={styles.notificationText}>{item.notification}</Text>
                                        </Badge>
                                    )}
                                </View>
                            </View>
                        ))}
                    </>
                ) : (
                    <>
                        {/*نتیجه ی سرچ*/}
                        <View style={styles.listItem}>
                            <View style={styles.avatar}>
                                <Thumbnail source={require("../../assets/img_avatar2.png")} />
                            </View>

                            <View style={styles.Info}>
                                <Text style={styles.text}>zahra kml</Text>
                                <Text note style={styles.textLastSeen}>
                                    last seen
                                </Text>
                            </View>

                            <View style={styles.time}>
                                <Text note>3:54</Text>
                            </View>
                        </View>

                        <View style={styles.listItem}>
                            <View style={styles.avatar}>
                                <Thumbnail source={require("../../assets/img_avatar2.png")} />
                            </View>

                            <View style={styles.Info}>
                                <Text style={styles.text}>zahra </Text>
                                <Text note style={styles.textLastSeen}>
                                    last seen
                                </Text>
                            </View>

                            <View style={styles.time}>
                                <Text note>3:54</Text>
                            </View>
                        </View>

                        <View style={styles.listItem}>
                            <View style={styles.avatar}>
                                <Thumbnail source={require("../../assets/img_avatar2.png")} />
                            </View>

                            <View style={styles.Info}>
                                <Text style={styles.text}>zahra a</Text>
                                <Text note style={styles.textLastSeen}>
                                    last seen
                                </Text>
                            </View>

                            <View style={styles.time}>
                                <Text note>3:54</Text>
                            </View>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.avatar}>
                                <Thumbnail source={require("../../assets/img_avatar2.png")} />
                            </View>

                            <View style={styles.InfoEnd}>
                                <Text style={styles.text}>zahra gh</Text>
                                <Text note style={styles.textLastSeen}>
                                    last seen
                                </Text>
                            </View>

                            <View style={styles.timeEnd}>
                                <Text note>3:54</Text>
                            </View>
                        </View>
                        <View style={{width: "100%", height: 10}} />
                        <View style={styles.recent}>
                            <Text style={styles.recentText}>{t("messages")}</Text>
                        </View>
                        <View style={{width: "100%", height: 10}} />

                        <View style={styles.listItem}>
                            <View style={styles.avatar}>
                                <Thumbnail source={require("../../assets/img_avatar2.png")} />
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
                        </View>

                        <View style={styles.listItem}>
                            <View style={styles.avatar}>
                                <Thumbnail source={require("../../assets/img_avatar2.png")} />
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
                        </View>
                    </>
                )}
            </Content>
        </MainPageLayout>
    );
}
