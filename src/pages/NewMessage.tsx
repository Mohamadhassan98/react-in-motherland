import React, {useState} from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import {StyleSheet} from "react-native";
import NewMessageHeader from "../components/NewMessageHeader";
import {Container, Content, Button, Thumbnail, Text, View, Fab, Icon} from "native-base";
import {
    contactListA,
    contactListB,
    contactListF,
    contactListH,
    contactListFaAlef,
    contactListFaBe,
} from "../values/strings";
import {t} from "i18n-js";
import {StackNavigator} from "../values/Routing";
import makeStyles from "../utils/makeStyles";
import Icons8GroupIcon from "../../assets/icons/GroupIcon";
import Icons8CommercialIcon from "../../assets/icons/CommercialIcon";
import Icons8AddUserGroupIcon from "../../assets/icons/AddUserGroupIcon";
import AddContactHeader from "../components/addContactHeader";

const useStyles = makeStyles((theme) => ({
    Alphabet: {
        alignContent: "center",
        alignItems: "center",
        //backgroundColor: "red",
        display: "flex",
        fontSize: 30,
        fontFamily: theme.font.Body,
        justifyContent: "center",
        marginBottom: "1.8%",
        textAlign: "center",
        width: "22%",
    },
    FAB1: {
        backgroundColor: theme.palette.Primary,
    },
    FAB2: {
        backgroundColor: "#fffcfc",
        borderColor: theme.palette.Primary,
        borderWidth: 2,
    },
    Info: {
        borderBottomWidth: 1,
        borderColor: "#eeeeee",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "2%",
        width: "55%",
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
        fontFamily: theme.font.Body,
    },
    textLastSeen: {
        marginBottom: "5%",
        textAlign: "left",
        fontFamily: theme.font.Body,
    },
}));

export default function NewMessage({navigation, route}: StackNavigator<"NewMessage">) {
    const [Active, setActive] = useState(false);
    const [SearchText, setSearchText] = useState("");
    const styles = useStyles();
    return (
        <MainPageLayout active={3} navigation={navigation}>
            <MainHeader size='collapsed'>
                <NewMessageHeader setSearchText={setSearchText} navigation={navigation} />
            </MainHeader>
            {/* Rest of code here */}
            <Container>
                <Content>
                    {SearchText.length === 0 ? (
                        <>
                            <View style={{width: "100%", height: 10}} />
                            {contactListA.map((item, index) => (
                                <View style={styles.listItem}>
                                    <View style={styles.Alphabet}>
                                        {index === 0 ? <Text style={styles.Alphabet}>A</Text> : <></>}
                                    </View>
                                    <View style={styles.avatar}>
                                        <Thumbnail source={item.img} />
                                    </View>

                                    <View style={styles.Info}>
                                        <Text style={styles.text}>{`${item.FirstName} ${item.LastName}`}</Text>
                                        <Text note style={styles.textLastSeen}>
                                            {t(item.LastSeen)}
                                        </Text>
                                    </View>
                                </View>
                            ))}

                            {contactListB.map((item, index) => (
                                <View style={styles.listItem}>
                                    <View style={styles.Alphabet}>
                                        {index == 0 ? <Text style={styles.Alphabet}>B</Text> : <></>}
                                    </View>
                                    <View style={styles.avatar}>
                                        <Thumbnail source={item.img} />
                                    </View>

                                    <View style={styles.Info}>
                                        <Text style={styles.text}>{`${item.FirstName} ${item.LastName}`}</Text>
                                        <Text note style={styles.textLastSeen}>
                                            {t(item.LastSeen)}
                                        </Text>
                                    </View>
                                </View>
                            ))}

                            {contactListF.map((item, index) => (
                                <View style={styles.listItem}>
                                    <View style={styles.Alphabet}>
                                        {index == 0 ? <Text style={styles.Alphabet}>F</Text> : <></>}
                                    </View>
                                    <View style={styles.avatar}>
                                        <Thumbnail source={item.img} />
                                    </View>

                                    <View style={styles.Info}>
                                        <Text style={styles.text}>{`${item.FirstName} ${item.LastName}`}</Text>
                                        <Text note style={styles.textLastSeen}>
                                            {t(item.LastSeen)}
                                        </Text>
                                    </View>
                                </View>
                            ))}

                            {contactListH.map((item, index) => (
                                <View style={styles.listItem}>
                                    <View style={styles.Alphabet}>
                                        {index == 0 ? <Text style={styles.Alphabet}>H</Text> : <></>}
                                    </View>
                                    <View style={styles.avatar}>
                                        <Thumbnail source={item.img} />
                                    </View>

                                    <View style={styles.Info}>
                                        <Text style={styles.text}>{`${item.FirstName} ${item.LastName}`}</Text>
                                        <Text note style={styles.textLastSeen}>
                                            {t(item.LastSeen)}
                                        </Text>
                                    </View>
                                </View>
                            ))}

                            {contactListFaAlef.map((item, index) => (
                                <View style={styles.listItem}>
                                    <View style={styles.Alphabet}>
                                        {index == 0 ? <Text style={styles.Alphabet}>آ</Text> : <></>}
                                    </View>
                                    <View style={styles.avatar}>
                                        <Thumbnail source={item.img} />
                                    </View>

                                    <View style={styles.Info}>
                                        <Text style={styles.text}>{`${item.FirstName} ${item.LastName}`}</Text>
                                        <Text note style={{...styles.textLastSeen}}>
                                            {t(item.LastSeen)}
                                        </Text>
                                    </View>
                                </View>
                            ))}

                            {contactListFaBe.map((item, index) => (
                                <View style={styles.listItem}>
                                    <View style={styles.Alphabet}>
                                        {index == 0 ? <Text style={styles.Alphabet}>ب</Text> : <></>}
                                    </View>
                                    <View style={styles.avatar}>
                                        <Thumbnail source={item.img} />
                                    </View>

                                    <View style={styles.Info}>
                                        <Text style={styles.text}>{`${item.FirstName} ${item.LastName}`}</Text>
                                        <Text note style={styles.textLastSeen}>
                                            {t(item.LastSeen)}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </>
                    ) : (
                        <>
                            {SearchText.length !== 0 ? (
                                <>
                                    <View style={styles.listItem}>
                                        <View style={styles.avatar}>
                                            <Thumbnail source={require("../../assets/img_avatar2.png")} />
                                        </View>

                                        <View style={styles.InfoR}>
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

                                        <View style={styles.InfoR}>
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

                                        <View style={styles.InfoR}>
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
                        </>
                    )}
                </Content>
                {SearchText.length === 0 && (
                    <Fab
                        active={Active}
                        direction='up'
                        containerStyle={{}}
                        style={styles.FAB1}
                        position='bottomRight'
                        onPress={() => {
                            setActive(!Active);
                        }}
                    >
                        <Icon name='add' />
                        <Button style={styles.FAB2} onPress={()=>{
                            navigation.navigate("NewGroupAddPeople", {} as any);
                        }}>
                            <Icons8CommercialIcon />
                        </Button>
                        <Button style={styles.FAB2} onPress={()=>{
                            navigation.navigate("NewChannelAddPeople", {} as any);
                        }}>
                            <Icons8GroupIcon />
                        </Button>
                        <Button style={styles.FAB2} onPress={()=>{
                            navigation.navigate("AddContact", {} as any);
                        }}>
                            <Icons8AddUserGroupIcon />
                        </Button>
                    </Fab>
                )}
            </Container>
        </MainPageLayout>
    );
}
