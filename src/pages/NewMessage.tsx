import React, {useState} from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import NewMessageHeader from "../components/NewMessageHeader";
import {Button, Container, Content, Fab, Icon, Text, View} from "native-base";
import {
    contactListA,
    contactListB,
    contactListF,
    contactListFaAlef,
    contactListFaBe,
    contactListH,
} from "../values/strings";
import {t} from "i18n-js";
import {StackNavigator} from "../values/Routing";
import makeStyles from "../utils/makeStyles";
import Icons8GroupIcon from "../../assets/icons/GroupIcon";
import Icons8CommercialIcon from "../../assets/icons/CommercialIcon";
import AddUserMaleIcon from "../../assets/icons/AddUserMaleIcon";
import Avatar from "../components/Avatar";
import {TouchableOpacity} from "react-native";

const useStyles = makeStyles((theme) => ({
    Alphabet: {
        alignContent: "center",
        alignItems: "center",
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
        width: "100%",
        marginTop: "2%",
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
        fontFamily: theme.font.Body,
    },
    textLastSeen: {
        marginBottom: "5%",
        textAlign: "left",
        fontFamily: theme.font.Body,
    },
}));

export default function NewMessage({navigation}: StackNavigator<"NewMessage">) {
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
                            {contactListA.map(({FirstName, LastName, LastSeen, img: profileImage}, index) => (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("ChatRoom", {
                                            profileImage,
                                            visibleName: `${FirstName} ${LastName}`,
                                            local: true,
                                        })
                                    }
                                    style={styles.listItem}
                                    key={index}
                                >
                                    <View style={styles.Alphabet}>
                                        {index === 0 && <Text style={styles.Alphabet}>A</Text>}
                                    </View>
                                    <View style={styles.avatar}>
                                        <Avatar
                                            local
                                            profileImage={profileImage}
                                            visibleName={`${FirstName} ${LastName}`}
                                            size={56}
                                        />
                                    </View>
                                    <View style={styles.Info}>
                                        <Text style={styles.text}>{`${FirstName} ${LastName}`}</Text>
                                        <Text note style={styles.textLastSeen}>
                                            {t(LastSeen)}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                            {contactListB.map(({FirstName, LastName, LastSeen, img: profileImage}, index) => (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("ChatRoom", {
                                            profileImage,
                                            visibleName: `${FirstName} ${LastName}`,
                                            local: true,
                                        })
                                    }
                                    style={styles.listItem}
                                    key={index}
                                >
                                    <View style={styles.Alphabet}>
                                        {index === 0 && <Text style={styles.Alphabet}>B</Text>}
                                    </View>
                                    <View style={styles.avatar}>
                                        <Avatar
                                            local
                                            size={56}
                                            profileImage={profileImage}
                                            visibleName={`${FirstName} ${LastName}`}
                                        />
                                    </View>
                                    <View style={styles.Info}>
                                        <Text style={styles.text}>{`${FirstName} ${LastName}`}</Text>
                                        <Text note style={styles.textLastSeen}>
                                            {t(LastSeen)}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                            {contactListF.map(({FirstName, LastName, LastSeen, img: profileImage}, index) => (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("ChatRoom", {
                                            profileImage,
                                            visibleName: `${FirstName} ${LastName}`,
                                            local: true,
                                        })
                                    }
                                    style={styles.listItem}
                                    key={index}
                                >
                                    <View style={styles.Alphabet}>
                                        {index === 0 && <Text style={styles.Alphabet}>F</Text>}
                                    </View>
                                    <View style={styles.avatar}>
                                        <Avatar
                                            size={56}
                                            local
                                            profileImage={profileImage}
                                            visibleName={`${FirstName} ${LastName}`}
                                        />
                                    </View>
                                    <View style={styles.Info}>
                                        <Text style={styles.text}>{`${FirstName} ${LastName}`}</Text>
                                        <Text note style={styles.textLastSeen}>
                                            {t(LastSeen)}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                            {contactListH.map(({FirstName, LastName, LastSeen, img: profileImage}, index) => (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("ChatRoom", {
                                            profileImage,
                                            visibleName: `${FirstName} ${LastName}`,
                                            local: true,
                                        })
                                    }
                                    style={styles.listItem}
                                    key={index}
                                >
                                    <View style={styles.Alphabet}>
                                        {index === 0 && <Text style={styles.Alphabet}>H</Text>}
                                    </View>
                                    <View style={styles.avatar}>
                                        <Avatar
                                            size={56}
                                            local
                                            profileImage={profileImage}
                                            visibleName={`${FirstName} ${LastName}`}
                                        />
                                    </View>
                                    <View style={styles.Info}>
                                        <Text style={styles.text}>{`${FirstName} ${LastName}`}</Text>
                                        <Text note style={styles.textLastSeen}>
                                            {t(LastSeen)}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                            {contactListFaAlef.map(({FirstName, LastName, LastSeen, img: profileImage}, index) => (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("ChatRoom", {
                                            profileImage,
                                            visibleName: `${FirstName} ${LastName}`,
                                            local: true,
                                        })
                                    }
                                    style={styles.listItem}
                                    key={index}
                                >
                                    <View style={styles.Alphabet}>
                                        {index === 0 && <Text style={styles.Alphabet}>آ</Text>}
                                    </View>
                                    <View style={styles.avatar}>
                                        <Avatar
                                            profileImage={profileImage}
                                            size={56}
                                            local
                                            visibleName={`${FirstName} ${LastName}`}
                                        />
                                    </View>
                                    <View style={styles.Info}>
                                        <Text style={styles.text}>{`${FirstName} ${LastName}`}</Text>
                                        <Text note style={{...styles.textLastSeen}}>
                                            {t(LastSeen)}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                            {contactListFaBe.map(({FirstName, LastName, LastSeen, img: profileImage}, index) => (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("ChatRoom", {
                                            profileImage,
                                            visibleName: `${FirstName} ${LastName}`,
                                            local: true,
                                        })
                                    }
                                    style={styles.listItem}
                                    key={index}
                                >
                                    <View style={styles.Alphabet}>
                                        {index === 0 && <Text style={styles.Alphabet}>ب</Text>}
                                    </View>
                                    <View style={styles.avatar}>
                                        <Avatar
                                            profileImage={profileImage}
                                            size={56}
                                            local
                                            visibleName={`${FirstName} ${LastName}`}
                                        />
                                    </View>
                                    <View style={styles.Info}>
                                        <Text style={styles.text}>{`${FirstName} ${LastName}`}</Text>
                                        <Text note style={styles.textLastSeen}>
                                            {t(LastSeen)}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </>
                    ) : (
                        <>
                            {SearchText.length !== 0 ? (
                                <>
                                    <TouchableOpacity
                                        onPress={() =>
                                            navigation.navigate("ChatRoom", {
                                                profileImage: require("../../assets/img_avatar2.png"),
                                                visibleName: "zahra",
                                                local: true,
                                            })
                                        }
                                        style={styles.listItem}
                                    >
                                        <View style={styles.avatar}>
                                            <Avatar
                                                size={56}
                                                local
                                                profileImage={require("../../assets/img_avatar2.png")}
                                                visibleName='zahra'
                                            />
                                        </View>
                                        <View style={styles.InfoR}>
                                            <Text style={styles.text}>zahra</Text>
                                            <Text note style={styles.textLastSeen}>
                                                {t("lastSeenRecently")}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() =>
                                            navigation.navigate("ChatRoom", {
                                                visibleName: "zahra kml",
                                                local: true,
                                            })
                                        }
                                        style={styles.listItem}
                                    >
                                        <View style={styles.avatar}>
                                            <Avatar local visibleName='zahra kml' size={56} />
                                        </View>
                                        <View style={styles.InfoR}>
                                            <Text style={styles.text}>zahra kml</Text>
                                            <Text note style={styles.textLastSeen}>
                                                {t("lastSeenRecently")}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() =>
                                            navigation.navigate("ChatRoom", {
                                                profileImage: require("../../assets/img_avatar2.png"),
                                                visibleName: "zahra l",
                                                local: true,
                                            })
                                        }
                                        style={styles.listItem}
                                    >
                                        <View style={styles.avatar}>
                                            <Avatar
                                                profileImage={require("../../assets/img_avatar2.png")}
                                                size={56}
                                                visibleName='zahra l'
                                                local
                                            />
                                        </View>
                                        <View style={styles.InfoR}>
                                            <Text style={styles.text}>zahra l</Text>
                                            <Text note style={styles.textLastSeen}>
                                                {t("lastSeenRecently")}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
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
                        onPress={() => setActive(!Active)}
                    >
                        <Icon name='add' />
                        <Button style={styles.FAB2} onPress={() => navigation.navigate("NewChannelAddPeople")}>
                            <Icons8CommercialIcon />
                        </Button>
                        <Button style={styles.FAB2} onPress={() => navigation.navigate("NewGroupAddPeople")}>
                            <Icons8GroupIcon />
                        </Button>
                        <Button style={styles.FAB2} onPress={() => navigation.navigate("AddContact")}>
                            <AddUserMaleIcon />
                        </Button>
                    </Fab>
                )}
            </Container>
        </MainPageLayout>
    );
}
