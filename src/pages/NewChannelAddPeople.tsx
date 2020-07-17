import React, {useState} from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import {TouchableOpacity, ScrollView, StyleSheet, TouchableWithoutFeedback} from "react-native";
import NewMessageHeader from "../components/NewMessageHeader";
import {Container, Content, Button, Thumbnail, Text, View, Fab, Icon, Col} from "native-base";
import {contactList, SearcList} from "../values/strings";
import {t} from "i18n-js";
import NewChannelAddPeopleHeader from "../components/NewChannelAddPeopleHeader";
import {StackNavigator} from "../values/Routing";
import Icons8ForwardIcon from "../../assets/icons/ForwardIcon";
import Icons8BackIcon from "../../assets/icons/BackIcon";
import useTheme from "../values/theme";
import makeStyles from "../utils/makeStyles";



const useStyles = makeStyles((theme) => ({
    FAB: {
        backgroundColor: theme.palette.Primary,
    },
    disableFAB:{
        backgroundColor:"#eae6e6"
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
        fontFamily:theme.font.Body,
    },
    listItem: {
        alignItems: "flex-end",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        marginTop: "2%",
    },
    people: {
        alignItems: "center",
        display: "flex",
        width: 80,

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
        justifyContent: "center",
        alignItems: "center",
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
    FLName:{
        marginTop: "5%",
        fontSize: 13,
        marginBottom: "10%",
        fontFamily:theme.font.Body,
    }
}));

export default function NewChannelAddPeople({navigation, route}: StackNavigator<"NewChannelAddPeople">) {
    const [Active, setActive] = useState(false);
    const [SearchText, setSearchText] = useState("");
    const [List, setList] = useState(contactList);
    const [disable,setDisable] = useState(true);
    const theme = useTheme();
    const styles = useStyles();

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
        <MainPageLayout active={3} navigation={navigation}>
            <MainHeader size='collapsed'>
                <NewChannelAddPeopleHeader setSearchText={setSearchText} navigation={navigation}/>
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
                                                <Text style={styles.FLName}>
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
                                        setDisable(false);
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
                                                setDisable(false);
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
                {
                    disable===true ?
                        <Fab
                            active={false}
                            direction='up'
                            containerStyle={{}}
                            style={styles.disableFAB}
                            position='bottomRight'
                            onPress={() => {

                            }}
                        >
                            {theme.localize.language === "fa" ? <Icons8BackIcon fill='white' />:<Icons8ForwardIcon fill='white'/>}
                        </Fab>
                        :
                        <Fab
                            active={false}
                            direction='up'
                            containerStyle={{}}
                            style={styles.FAB}
                            position='bottomRight'
                            onPress={() => {
                                navigation.navigate("NewChannelName", {} as any);
                            }}
                        >
                            {theme.localize.language === "fa" ? <Icons8BackIcon fill='white' />:<Icons8ForwardIcon fill='white'/>}
                        </Fab>

                }
            </Container>
        </MainPageLayout>
    );
}
