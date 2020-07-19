import React, {useState} from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import {ActionSheet, Container, Fab, Form, Icon, Input, Item, Label, Root, View} from "native-base";
import Avatar from "../components/Avatar";
import NewChannelNameHeader from "../components/NewChannelNameHeader";
import {t} from "i18n-js";
import useMediaPicker from "../utils/useMediaPicker";
import {StackNavigator} from "../values/Routing";
import makeStyles from "../utils/makeStyles";
import {i17n} from "../values/strings";

const useStyles = makeStyles((theme) => ({
    FAB: {
        backgroundColor: theme.palette.Primary,
    },
    disableFAB: {
        backgroundColor: "#eae6e6",
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
    text: {
        fontFamily: theme.font.Body,
    },
}));

export default function NewChannelName({navigation, route}: StackNavigator<"NewChannelName">) {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [profileImage, setProfileImage] = useState<string | undefined>();
    const [cameraOrGallery, setCameraOrGallery] = useState<"camera" | "gallery" | undefined>();
    const {result, select} = useMediaPicker(cameraOrGallery || "gallery");
    React.useEffect(() => {
        setProfileImage(result);
    }, [result]);

    React.useEffect(() => {
        if (cameraOrGallery) {
            select().then(() => setCameraOrGallery(undefined));
        }
    }, [cameraOrGallery, select]);
    const [disable, setDisable] = useState(true);
    const styles = useStyles();
    return (
        <Root>
            <MainPageLayout active={3} navigation={navigation}>
                <MainHeader size='collapsed'>
                    <NewChannelNameHeader navigation={navigation} />
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
                                        options: profileImage
                                            ? [i17n.camera, i17n.gallery, i17n.delete]
                                            : [i17n.camera, i17n.gallery],
                                    },
                                    (index) => {
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
                            <Label style={styles.text}>{t("channelName")}</Label>
                            <Input
                                onChangeText={(event) => {
                                    setFirstName(event);
                                    event.length > 0 ? setDisable(false) : setDisable(true);
                                }}
                            />
                        </Item>
                        {/*<Item stackedLabel>*/}
                        {/*    <Label style={styles.text}>{t("description")}</Label>*/}
                        {/*    <Input onChangeText={(event) => setLastName(event)} />*/}
                        {/*</Item>*/}
                    </Form>
                    {disable ? (
                        <Fab active={false} direction='up' style={styles.disableFAB} position='bottomRight'>
                            <Icon name='md-checkmark' />
                        </Fab>
                    ) : (
                        <Fab
                            active={false}
                            direction='up'
                            style={styles.FAB}
                            position='bottomRight'
                            onPress={() => navigation.popToTop()}
                        >
                            <Icon name='md-checkmark' />
                        </Fab>
                    )}
                </Container>
            </MainPageLayout>
        </Root>
    );
}
