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
import Icons8ForwardIcon from "../../assets/icons/ForwardIcon";

const styles = StyleSheet.create({
    FAB: {
        backgroundColor: "rgb(38,172,71)",
    },
    container: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
});

export default function AddContact({navigation, route}: StackNavigator<"AddContact">) {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
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
                <Form style={{width: "80%", alignSelf: "center"}}>
                    <Item stackedLabel>
                        <Label>{t("firstName")}</Label>
                        <Input
                            onChangeText={(event) => {
                                setFirstName(event);
                            }}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label>{t("lastName")}</Label>
                        <Input
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
                    <Icons8ForwardIcon  />
                </Fab>
            </Container>
        </MainPageLayout>
    );
}
