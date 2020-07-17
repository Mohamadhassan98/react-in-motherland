import React, {useState} from "react";
import {ActionSheet, Body, Button, Container, Content, Left, Right, Root, Text} from "native-base";
import makeStyles from "../utils/makeStyles";
import {Col, Grid, Row} from "react-native-easy-grid";
import InputBoxEditProfile from "../components/InputBoxEditProfile";
import Icons8BackIcon from "../../assets/icons/BackIcon";
import Icons8ForwardIcon from "../../assets/icons/ForwardIcon";
import {t} from "i18n-js";
import DatePicker from "../components/DatePicker";
import Avatar from "../components/Avatar";
import useMediaPicker from "../utils/useMediaPicker";
import MainHeader from "../components/MainHeader";
import useTheme from "../values/theme";
import {StackNavigator} from "../values/Routing";

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
    saveButtonStyle: {
        borderRadius: 15,
        height: 60,
        backgroundColor: theme.palette.Primary,
    },
    saveButtonTextStyle: {
        color: theme.palette.textSecondary,
        textAlign: "center",
        fontFamily: theme.font.Body,
        fontSize: 20,
        flex: 1,
    },
}));

export default function ({navigation, route}: StackNavigator<"EditProfile">) {
    const styles = useStyles();
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

    const theme = useTheme();

    return (
        <Root>
            <Container style={{backgroundColor: "#FFFFFF"}}>
                <MainHeader noShadow={true} size='collapsed'>
                    <Left style={{flex: 1, alignItems: "flex-start"}}>
                        <Button
                            style={styles.forwardBackIconStyle}
                            icon
                            transparent
                            onPress={() => navigation.canGoBack() && navigation.goBack()}
                        >
                            {theme.localize.language === "fa" ? <Icons8ForwardIcon /> : <Icons8BackIcon />}
                        </Button>
                    </Left>
                    <Body style={{flex: 1, alignItems: "center"}}>
                        <Text style={styles.headerTextStyle}>{t("editProfile")} </Text>
                    </Body>
                    <Right style={{flex: 1}} />
                </MainHeader>
                <Content>
                    <Grid>
                        <Row>
                            <Col style={styles.avatarStyle}>
                                <Avatar
                                    visibleName='Mohammad hassan Ebrahimi'
                                    size={100}
                                    profileImage={profileImage}
                                    showAccessory
                                    onAccessoryPress={() => {
                                        ActionSheet.show(
                                            {
                                                options: profileImage
                                                    ? ["Camera", "Gallery", "delete"]
                                                    : ["Camera", "Gallery"],
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
                            </Col>
                        </Row>
                        <Row>
                            <Col style={styles.inputBoxEditProfileStyle}>
                                <InputBoxEditProfile placeHolderMsg={t("insertName")} />
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
                                    style={styles.saveButtonStyle}
                                    onPress={() => {
                                        navigation.goBack();
                                    }}
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
