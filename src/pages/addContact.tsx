import React, {useState} from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import AddContactHeader from "../components/addContactHeader";
import {Container, Fab, Form, Input, Item, Label, View} from "native-base";
import IntlPhoneInput, {ChangeTextInput} from "react-native-intl-phone-input";
import Avatar from "../components/Avatar";
import {t} from "i18n-js";
import {StackNavigator} from "../values/Routing";
import Icons8CheckmarkIcon from "../../assets/icons/CheckmarkIcon";
import makeStyles from "../utils/makeStyles";

const useStyles = makeStyles((theme) => ({
    FAB: {
        backgroundColor: theme.palette.Primary,
    },
    disableFAB:{
        backgroundColor:"#eae6e6"
    },
    container: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "10%",
    },
    containerStyle: {
        paddingStart: 0,
    },
    flagStyle: {
        marginEnd: "10%",
    },
    icon: {
        color: "white",
    },
    text: {
        fontFamily: theme.font.Body,
    },
    form: {width: "80%", alignSelf: "center"},
}));

export default function AddContact({navigation, route}: StackNavigator<"AddContact">) {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [disable1,setDisable1] = useState(true);
    const [disable2,setDisable2] = useState(true);
    const styles = useStyles();
    const onChangeText = ({dialCode, unmaskedPhoneNumber, phoneNumber, isVerified}: ChangeTextInput) => {
        console.log(dialCode, unmaskedPhoneNumber, phoneNumber, isVerified);
        phoneNumber.length>0?setDisable2(false):setDisable2(true);
    };

    return (
        <MainPageLayout active={3} navigation={navigation}>
            <MainHeader size='collapsed'>
                <AddContactHeader navigation={navigation} />
            </MainHeader>
            {/* Rest of code here */}
            <Container>
                <View style={styles.container}>
                    <Avatar
                        visibleName={`${FirstName}  ${LastName}`}
                        size={80}
                        profileImage='../../assets/avatar.jpg'
                    />
                </View>
                <Form style={styles.form}>
                    <Item stackedLabel>
                        <Label style={styles.text}>{t("firstName")}</Label>
                        <Input
                            style={styles.text}
                            onChangeText={(event) => {
                                setFirstName(event);
                                event.length>0?setDisable1(false):setDisable1(true);
                            }}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label style={styles.text}>{t("lastName")}</Label>
                        <Input
                            style={styles.text}
                            onChangeText={(event) => {
                                setLastName(event);
                            }}
                        />
                    </Item>
                    <Item>
                        <IntlPhoneInput
                            onChangeText={onChangeText}
                            defaultCountry='IR'
                            containerStyle={styles.containerStyle}
                            flagStyle={styles.flagStyle}
                        />
                    </Item>
                </Form>

                { disable1 || disable2 ?
                    <Fab
                    active={false}
                    direction='up'
                    containerStyle={{}}
                    style={styles.disableFAB}
                    position='bottomRight'
                    onPress={() => {/*
                        navigation.navigate("MessengerPage", {} as any);
                        */
                        {
                            /*
                            navigation.canGoBack() && navigation.goBack();
                            */
                        }
                    }}
                >
                    <Icons8CheckmarkIcon fill='#fff'/>
                </Fab>:
                    <Fab
                        active={false}
                        direction='up'
                        containerStyle={{}}
                        style={styles.FAB}
                        position='bottomRight'
                        onPress={() => {/*
                        navigation.navigate("MessengerPage", {} as any);
                        */
                            {
                                /*
                                navigation.canGoBack() && navigation.goBack();
                                */
                            }
                        }}
                    >
                        <Icons8CheckmarkIcon fill='#fff'/>
                    </Fab>
                }
            </Container>
        </MainPageLayout>
    );
}
