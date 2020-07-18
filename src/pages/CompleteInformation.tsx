import React, {useState} from "react";
import {ActionSheet, Button, Container, Content, Root, Text} from "native-base";
import makeStyles from "../utils/makeStyles";
import {Col, Grid, Row} from "react-native-easy-grid";
import InputBoxEditProfile from "../components/InputBoxEditProfile";
import DatePicker from "../components/DatePicker";
import Avatar from "../components/Avatar";
import useMediaPicker from "../utils/useMediaPicker";
import {t} from "i18n-js";
import useTheme from "../values/theme";
import SimpleHeader from "../components/SimpleHeader";
import MainHeader from "../components/MainHeader";
import {StackNavigator} from "../values/Routing";
import {useBackHandler} from "@react-native-community/hooks";
import {BackHandler} from "react-native";
import {i17n} from "../values/strings";

const useStyles = makeStyles((theme) => ({
    avatarStyle: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center",
    },
    inputBoxEditProfileStyle: {
        marginBottom: 10,
        marginTop: 10,
        marginStart: 40,
        marginEnd: 40,
    },
    headerStyle: {
        backgroundColor: "#FFFFFF",
    },
    dateStyle: {
        marginBottom: 10,
        marginTop: 10,
        marginStart: 40,
        marginEnd: 40,
    },
    forwardBackIconStyle: {
        backgroundColor: "#FFFFFF",
    },
    headerTextStyle: {
        fontFamily: theme.font.Body,
        fontSize: 20,
    },
    saveButtonStyleCol: {
        marginBottom: 20,
        marginTop: 40,
        marginStart: 40,
        marginEnd: 40,
        height: 60,
    },
    saveButtonStyleCard: {
        borderRadius: 15,
        height: 60,
        backgroundColor: theme.palette.Primary,
        padding: "5%",
    },
    saveButtonTextStyle: {
        color: theme.palette.textSecondary,
        textAlign: "center",
        fontFamily: theme.font.Body,
        fontSize: 20,
        flex: 1,
    },
    saveButtonStyle: {
        borderRadius: 15,
        height: 60,
    },
    saveButtonValid: {
        backgroundColor: theme.palette.Primary,
    },
    saveButtonInvalid: {
        backgroundColor: theme.palette.Disabled,
    },
}));

export default function CompleteInformation({navigation, route}: StackNavigator<"CompleteInformation">) {
    const styles = useStyles();
    const [name, setName] = React.useState("");
    const [profileImage, setProfileImage] = useState<string | undefined>();
    const [cameraOrGallery, setCameraOrGallery] = useState<"camera" | "gallery" | undefined>();
    const {result, select} = useMediaPicker(cameraOrGallery || "gallery");
    const theme = useTheme();
    React.useEffect(() => {
        setProfileImage(result);
    }, [result]);
    useBackHandler(() => {
        if (navigation) {
            navigation.popToTop();
            BackHandler.exitApp();
            return true;
        }
        return false;
    });

    React.useEffect(() => {
        if (cameraOrGallery) {
            select().then(() => setCameraOrGallery(undefined));
        }
    }, [cameraOrGallery, select]);

    return (
        <Root>
            <Container style={styles.forwardBackIconStyle}>
                <MainHeader noShadow={true} size='collapsed'>
                    {/*<Left style={{flex: 1, alignItems: "flex-start"}}>*/}
                    {/*    <Button*/}
                    {/*        style={styles.forwardBackIconStyle}*/}
                    {/*        icon*/}
                    {/*        transparent*/}
                    {/*        onPress={() => navigation.canGoBack() && navigation.goBack()}*/}
                    {/*    >*/}
                    {/*        {theme.localize.language === "fa" ? <Icons8ForwardIcon /> : <Icons8BackIcon />}*/}
                    {/*    </Button>*/}
                    {/*</Left>*/}
                    {/*<Body style={{flex: 1, alignItems: "center"}}>*/}
                    {/*    <Text style={styles.headerTextStyle}>{t("editProfile")} </Text>*/}
                    {/*</Body>*/}
                    {/*<Right style={{flex: 1}} />*/}
                    <SimpleHeader navigation={navigation} title='completeInformation' leftAdornment='none' />
                </MainHeader>
                <Content>
                    <Grid>
                        <Row>
                            <Col style={styles.avatarStyle}>
                                <Avatar
                                    visibleName={name}
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
                            </Col>
                        </Row>
                        <Row>
                            <Col style={styles.inputBoxEditProfileStyle}>
                                <InputBoxEditProfile placeHolderMsg={t("insertName")} value={name} setValue={setName} />
                            </Col>
                        </Row>
                        <Row>
                            <Col style={styles.dateStyle}>
                                <DatePicker />
                            </Col>
                        </Row>
                        <Row>
                            <Col style={styles.inputBoxEditProfileStyle}>
                                <InputBoxEditProfile placeHolderMsg={t("insertBio")} />
                            </Col>
                        </Row>
                        <Row>
                            <Col style={styles.inputBoxEditProfileStyle}>
                                <InputBoxEditProfile placeHolderMsg={t("insertUsername")} />
                            </Col>
                        </Row>
                        <Row>
                            <Col style={styles.saveButtonStyleCol}>
                                <Button
                                    style={[
                                        styles.saveButtonStyle,
                                        name.length === 0 ? styles.saveButtonInvalid : styles.saveButtonValid,
                                    ]}
                                    transparent
                                    disabled={name.length === 0}
                                    onPress={() => theme.auth.login()}
                                >
                                    <Text style={styles.saveButtonTextStyle}>{t("Save")}</Text>
                                </Button>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        </Root>
    );
}
