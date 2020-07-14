import React, {useState} from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import {StyleSheet} from "react-native";
import AddContactHeader from "../components/addContactHeader";
import {Container, Fab, Icon, View, Form, Item, Input, Label} from "native-base";
import IntlPhoneInput, {ChangeTextInput, CustomModalInput} from "react-native-intl-phone-input";
import Avatar from "../components/Avatar";
import {t} from "i18n-js";
import {StackNavigator} from "../values/Routing";
import Icons8CheckmarkIcon from "../../assets/icons/CheckmarkIcon";
import makeStyles from "../utils/makeStyles";

const useStyles = makeStyles((theme) => ({
    FAB: {
        backgroundColor: theme.palette.Primary,
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
    const styles = useStyles();
    const onChangeText = ({dialCode, unmaskedPhoneNumber, phoneNumber, isVerified}: ChangeTextInput) => {
        console.log(dialCode, unmaskedPhoneNumber, phoneNumber, isVerified);
    };

    return (
        <MainPageLayout active={3} navigation={navigation}>
            <MainHeader size='collapsed'>
                <AddContactHeader />
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

                <Fab
                    active={false}
                    direction='up'
                    containerStyle={{}}
                    style={styles.FAB}
                    position='bottomRight'
                    onPress={() => {
                        navigation.navigate("Home");
                        {
                            /*
                            navigation.canGoBack() && navigation.goBack();
                            */
                        }
                    }}
                >
                    <Icons8CheckmarkIcon fill='#fff' />
                </Fab>
            </Container>
        </MainPageLayout>
    );
}
