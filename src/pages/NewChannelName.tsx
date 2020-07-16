import React, {useState} from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import {StyleSheet} from "react-native";
import {Container, Fab, Icon, View, Form, Item, Input, Label, ActionSheet} from "native-base";
import IntlPhoneInput, {ChangeTextInput, CustomModalInput} from "react-native-intl-phone-input";
import Avatar from "../components/Avatar";
import NewChannelNameHeader from "../components/NewChannelNameHeader";
import {t} from "i18n-js";
import useMediaPicker from "../utils/useMediaPicker";
import {StackNavigator} from "../values/Routing";
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
        marginBottom: "5%",
        marginTop: "10%",
    },
    containerStyle: {
        paddingStart: 0,
    },
    flagStyle: {
        marginEnd: "10%",
    },
}));


export default function NewChannelName({navigation, route}: StackNavigator<"NewChannelName">) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [FirstName, setFirstName] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [LastName, setLastName] = useState("");
    const onChangeText = ({dialCode, unmaskedPhoneNumber, phoneNumber, isVerified}: ChangeTextInput) => {
        console.log(dialCode, unmaskedPhoneNumber, phoneNumber, isVerified);
    };
    const [profileImage, setProfileImage] = useState<string | undefined>();
    const [cameraOrGallery, setCameraOrGallery] = useState<"camera" | "gallery" | undefined>();
    const {result, select} = useMediaPicker(cameraOrGallery || "gallery");
    const styles = useStyles();
    return (
        <MainPageLayout active={3} navigation={navigation}>
            <MainHeader size='collapsed'>
                <NewChannelNameHeader />
            </MainHeader>
            {/* Rest of code here */}
            <Container>
                <View style={styles.container}>
                    <Avatar
                        visibleName={FirstName}
                        size={100}
                        profileImage={profileImage}
                        showAccessory
                        onAccessoryPress={() => {
                            ActionSheet.show(
                                {
                                    options: profileImage ? ["Camera", "Gallery", "delete"] : ["Camera", "Gallery"],
                                },
                                (index) => {
                                    console.log(index);
                                    switch (index) {
                                        case 0: {
                                            setCameraOrGallery("camera");
                                            break;
                                        }
                                        case 1: {
                                            setCameraOrGallery("gallery");
                                            break;
                                        }
                                        case 2: {
                                            setProfileImage(undefined);
                                            break;
                                        }
                                        default:
                                            break;
                                    }
                                }
                            );
                        }}
                    />
                </View>
                <Form style={{width: "80%", alignSelf: "center"}}>
                    <Item stackedLabel>
                        <Label>{t("groupName")}</Label>
                        <Input
                            onChangeText={(event) => {
                                setFirstName(event);
                            }}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label>{t("description")}</Label>
                        <Input
                            onChangeText={(event) => {
                                setLastName(event);
                            }}
                        />
                    </Item>
                </Form>

                <Fab
                    active={false}
                    direction='up'
                    containerStyle={{}}
                    style={styles.FAB}
                    position='bottomRight'
                    onPress={() => {}}
                >
                    <Icon name='md-checkmark' />
                </Fab>
            </Container>
        </MainPageLayout>
    );
}
