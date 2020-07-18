import React, {useState} from "react";
import {ActionSheet, Button, Container, Content, Root, Text} from "native-base";
import makeStyles from "../utils/makeStyles";
import {Col, Grid, Row} from "react-native-easy-grid";
import InputBoxEditProfile from "../components/InputBoxEditProfile";
import {t} from "i18n-js";
import DatePicker from "../components/DatePicker";
import Avatar from "../components/Avatar";
import useMediaPicker from "../utils/useMediaPicker";
import MainHeader from "../components/MainHeader";
import {StackNavigator} from "../values/Routing";
import SimpleHeader from "../components/SimpleHeader";
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

    return (
        <Root>
            <Container style={{backgroundColor: "#FFFFFF"}}>
                <MainHeader noShadow={true} size='collapsed'>
                    <SimpleHeader navigation={navigation} title='editProfile' />
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
                                <Button style={styles.saveButtonStyle} onPress={() => navigation.goBack()}>
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
