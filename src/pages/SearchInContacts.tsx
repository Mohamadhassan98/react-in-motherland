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
import SearchInContactsHeader from "../components/SearchInContactsHeader";

const styles = StyleSheet.create({
    Info: {
        borderBottomWidth: 1,
        borderColor: "#eeeeee",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "2%",
        width: "75%",
    },
    avatar: {
        width: "15%",
    },
    listItem: {
        alignItems: "flex-end",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        //marginBottom: "3%",
        width: "100%",
        marginTop: "2%",
    },
    result: {
        display: "flex",
        width: "100%",
        height: 450,
        //backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        textAlign: "left",
    },
    textLastSeen: {
        marginBottom: "5%",
        textAlign: "left",
    },
});

export default function SearchInContacts() {
    const [SearchText, setSearchText] = useState("");
    return (
        <MainPageLayout active={3}>
            <MainHeader size='collapsed'>
                <SearchInContactsHeader setSearchText={setSearchText} />
            </MainHeader>
            {/* Rest of code here */}

            <Content>
                {SearchText.length !== 0 ? (
                    <>
                        <View style={styles.listItem}>
                            <View style={styles.avatar}>
                                <Thumbnail source={require("../../assets/img_avatar2.png")} />
                            </View>

                            <View style={styles.Info}>
                                <Text style={styles.text}>zahra</Text>
                                <Text note style={styles.textLastSeen}>
                                    {t("lastSeenRecently")}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.avatar}>
                                <Thumbnail source={require("../../assets/img_avatar2.png")} />
                            </View>

                            <View style={styles.Info}>
                                <Text style={styles.text}>zahra kml</Text>
                                <Text note style={styles.textLastSeen}>
                                    {t("lastSeenRecently")}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.listItem}>
                            <View style={styles.avatar}>
                                <Thumbnail source={require("../../assets/img_avatar2.png")} />
                            </View>

                            <View style={styles.Info}>
                                <Text style={styles.text}>zahra l</Text>
                                <Text note style={styles.textLastSeen}>
                                    {t("lastSeenRecently")}
                                </Text>
                            </View>
                        </View>

                        <View style={{width: "100%", height: 10}} />
                    </>
                ) : (
                    <View style={styles.result}>
                        <Text>{t("NoResultsFound")}</Text>
                    </View>
                )}
            </Content>
        </MainPageLayout>
    );
}
