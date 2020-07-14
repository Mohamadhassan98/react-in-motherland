import React, {useState} from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import {TouchableOpacity, ScrollView, StyleSheet, TouchableWithoutFeedback} from "react-native";
import NewMessageHeader from "../components/NewMessageHeader";
import {Container, Content, Button, Thumbnail, Text, View, Fab, Icon} from "native-base";
import {contactList, SearcList} from "../values/strings";
import {t} from "i18n-js";
import GroupAddPeopleHeader from "../components/NewGroupAddPeopleHeader";
import NewGroupAddPeopleHeader from "../components/NewGroupAddPeopleHeader";

const styles = StyleSheet.create({
    FAB: {
        backgroundColor: "#81e38f",
    },
    Info: {
        borderBottomWidth: 1,
        borderColor: "#eeeeee",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "2%",
        width: "78%",
    },
    InfoR: {
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
    choose: {
        alignItems: "center",
        backgroundColor: "#3aba07",
        borderColor: "white",
        borderRadius: 25,
        borderWidth: 1,
        display: "flex",
        end: "1%",
        height: 20,
        justifyContent: "center",
        position: "absolute",
        top: "65%",
        width: 20,
    },
    chooseIcone: {
        color: "#fff",
        fontSize: 20,
    },
    chooseM: {
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "row",
        // height: 30,
        //marginBottom: "2%",
        //marginTop: "2%",
        width: "100%",
    },
    chooseText: {
        marginBottom: "2%",
        marginStart: "5%",
        marginTop: "2%",
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
    people: {
        alignItems: "center",
        // backgroundColor: "red",
        display: "flex",
        width: 80,
        // marginBottom: "10%",
    },
    remove: {
        alignItems: "center",
        backgroundColor: "#3aba07",
        borderColor: "white",
        borderRadius: 25,
        borderWidth: 1,
        display: "flex",
        end: "15%",
        height: 20,
        justifyContent: "center",
        position: "absolute",
        top: "45%",
        width: 20,
    },
    removeIcone: {
        color: "#fff",
        fontSize: 20,
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

export default function NewGroupAddPeople() {
    const [Active, setActive] = useState(false);
    const [SearchText, setSearchText] = useState("");
    const [List, setList] = useState(contactList);

    const [members, setMembers] = useState([
        {
            FirstName: "test",
            LastName: "",
            LastSeen: "lastSeenRecently",
            img: require("../../assets/img_avatar2.png"),
            id: 0,
            choose: false,
        },
    ]);
    return (
        <MainPageLayout active={3}>
            <MainHeader size='collapsed'>
                <NewGroupAddPeopleHeader setSearchText={setSearchText} />
            </MainHeader>
            {/* Rest of code here */}
            <Container>
                <Content>
                    {/*<View style={styles.chooseM}>
                        <Text style={styles.chooseText}>{t("Members")}

                    </View>
                    </Text><View style={{width: "100%", height: 10}} />*/}
                    {SearchText.length === 0 ? (
                        <>
                            <ScrollView horizontal={true}>
                                {List.map(
                                    (item, index) =>
                                        item.choose === true && (
                                            <View style={styles.people}>
                                                <Thumbnail source={item.img} />
                                                <Text style={{marginTop: "5%", fontSize: 13, marginBottom: "10%"}}>
                                                    {`${item.FirstName} ${item.LastName}`}
                                                </Text>
                                                <View style={styles.remove}>
                                                    <Icon
                                                        name='md-close'
                                                        style={styles.removeIcone}
                                                        onPress={() => {
                                                            setList((prev) =>
                                                                prev.map((value1, index1) =>
                                                                    index1 !== index
                                                                        ? value1
                                                                        : {...value1, choose: !value1.choose}
                                                                )
                                                            );
                                                        }}
                                                    />
                                                </View>
                                            </View>
                                        )
                                )}
                            </ScrollView>

                            <View style={styles.chooseM}>
                                <Text style={styles.chooseText}>{t("chooseMembers")}</Text>
                            </View>

                            {List.map((item, index) => (
                                <TouchableWithoutFeedback
                                    key={item.id}
                                    onPress={() => {
                                        setList((prev) =>
                                            prev.map((value1, index1) =>
                                                index1 !== index ? value1 : {...value1, choose: !value1.choose}
                                            )
                                        );
                                    }}
                                >
                                    <View style={styles.listItem} key={item.id}>
                                        <View style={styles.avatar}>
                                            <Thumbnail source={item.img} />

                                            {item.choose === true && (
                                                <View style={styles.choose}>
                                                    <Icon name='md-checkmark' style={styles.chooseIcone} />
                                                </View>
                                            )}
                                        </View>

                                        <View style={styles.Info}>
                                            <Text style={styles.text}>{`${item.FirstName} ${item.LastName}`}</Text>
                                            <Text note style={styles.textLastSeen}>
                                                {t(item.LastSeen)}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            ))}
                        </>
                    ) : (
                        <>
                            {List.map(
                                (item, index) =>
                                    item.FirstName === "zahra" && (
                                        <TouchableWithoutFeedback
                                            key={item.id}
                                            onPress={() => {
                                                setList((prev) =>
                                                    prev.map((value1, index1) =>
                                                        index1 !== index ? value1 : {...value1, choose: !value1.choose}
                                                    )
                                                );
                                            }}
                                        >
                                            <View style={styles.listItem} key={item.id}>
                                                <View style={styles.avatar}>
                                                    <Thumbnail source={item.img} />

                                                    {item.choose === true && (
                                                        <View style={styles.choose}>
                                                            <Icon name='md-checkmark' style={styles.chooseIcone} />
                                                        </View>
                                                    )}
                                                </View>

                                                <View style={styles.Info}>
                                                    <Text
                                                        style={styles.text}
                                                    >{`${item.FirstName} ${item.LastName}`}</Text>
                                                    <Text note style={styles.textLastSeen}>
                                                        {t(item.LastSeen)}
                                                    </Text>
                                                </View>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    )
                            )}
                            <View style={{width: "100%", height: 10}} />
                        </>
                    )}
                </Content>
                <Fab
                    active={false}
                    direction='up'
                    containerStyle={{}}
                    style={styles.FAB}
                    position='bottomRight'
                    onPress={() => {}}
                >
                    <Icon name='md-arrow-forward' />
                </Fab>
            </Container>
        </MainPageLayout>
    );
}