import React, {useState} from "react";
import {StyleSheet, TextInput} from "react-native";
import {Button, Card, Col, Container, Content, Grid, Root, Row, Text, Thumbnail} from "native-base";
import makeStyles from "../utils/makeStyles";
import login from "../../assets/login.png";
import IntlPhoneInput, {ChangeTextInput, CustomModalInput} from "react-native-intl-phone-input";
import Message from "../components/Message";
const useStyles = makeStyles((theme) => ({
    inputBoxEditProfileStyle: {
        // flex: 1,
        marginBottom: 10,
        marginTop: 10,
        marginStart: 40,
        marginEnd: 40,
    },
    forwardBackIconStyle: {
        backgroundColor: "#FFFFFF",
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
    textStyle: {
        fontFamily: theme.font.Body,
        height: "100%",
        width: "100%",
    },
    cardStyle: {
        // borderColor: "#fcfcfc",
        borderRadius: 10,
        height: 60,
    },
    ltrTest: {
        direction: "ltr",
        writingDirection: "ltr",
    },
}));

export default function Login() {
    const styles = useStyles();
    const [phone, setPhone] = useState("");
    const [errorText, setErrorText] = useState("");

    const handleLoginPress = () => {
        setErrorText("");
        if (!phone) {
            alert("Please your phone number");
            return;
        }
    };
    return (
        <Root>
            <Container style={{backgroundColor: "#FFFFFF"}}>
                <Content>
                    <Grid style={{marginTop: 250}}>
                        <Row>
                            <Col style={{alignItems: "center"}}>
                                <Thumbnail source={login} style={{width: 50, height: 50}} />
                            </Col>
                        </Row>
                        <Row style={{marginTop: 50}}>
                            <Col style={styles.inputBoxEditProfileStyle}>
                                <Content>
                                    <Card style={styles.cardStyle}>
                                        <IntlPhoneInput
                                            containerStyle={styles.ltrTest}
                                            onChangeText={(phone) => setPhone(phone.phoneNumber)}
                                            defaultCountry='IR'
                                        />
                                    </Card>
                                </Content>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={styles.saveButtonStyleCol}>
                                <Card style={styles.saveButtonStyleCard}>
                                    <Text style={styles.saveButtonTextStyle}>Login</Text>
                                    <Button transparent onPress={handleLoginPress} />
                                </Card>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        </Root>
    );
}
