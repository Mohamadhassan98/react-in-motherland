import React, {useState} from "react";
import {ActionSheet, Body, Button, Card, Container, Content, Header, Left, Right, Root, Text} from "native-base";
import makeStyles from "../utils/makeStyles";
import {Col, Grid, Row} from "react-native-easy-grid";
import InputBoxEditProfile from "../components/InputBoxEditProfile";
import Icons8BackIcon from "../../assets/icons/BackIcon";
import * as Localization from "expo-localization";
import Icons8ForwardIcon from "../../assets/icons/ForwardIcon";
import {t} from "i18n-js";
import DatePicker from "../components/DatePicker";
import Avatar from "../components/Avatar";
import useMediaPicker from "../utils/useMediaPicker";
import MainHeader from "../components/MainHeader";

const useStyles = makeStyles((theme) => ({
    avatarStyle: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center",
    },
    inputBoxEditProfileStyle: {
        // flex: 1,
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
        // borderWidth: 0,
        // borderBottomWidth: 0,
        // flex: 1,
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
        alignSelf: "center",
        color: "#FFFFFF",
        justifyContent: "center",
        fontFamily: theme.font.Body,
        fontSize: 20,
    },
}));
export default function CompleteInformation () {
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
                                <InputBoxEditProfile placeHolderMsg='helllloooo' />
                            </Col>
                        </Row>
                        <Row>
                            <Col style={styles.dateStyle}>
                                <DatePicker />
                            </Col>
                        </Row>
                        <Row>
                            <Col style={styles.inputBoxEditProfileStyle}>
                                <InputBoxEditProfile placeHolderMsg='helllloooo' />
                            </Col>
                        </Row>
                        <Row>
                            <Col style={styles.inputBoxEditProfileStyle}>
                                <InputBoxEditProfile placeHolderMsg='helllloooo' />
                            </Col>
                        </Row>
                        <Row>
                            <Col style={styles.saveButtonStyleCol}>
                                <Card style={styles.saveButtonStyleCard}>
                                    <Text style={styles.saveButtonTextStyle}>Save</Text>
                                    <Button transparent />
                                </Card>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        </Root>
    );
}
