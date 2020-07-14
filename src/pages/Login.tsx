import React, {useState} from "react";
import {Button, Col, Container, Content, Grid, Input, Item, Root, Row, Text, Thumbnail} from "native-base";
import makeStyles from "../utils/makeStyles";
import login from "../../assets/login.png";
import {t} from "i18n-js";

const useStyles = makeStyles((theme) => ({
    inputBoxEditProfileStyle: {
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
        alignItems: "center",
    },
    saveButtonTextStyle: {
        color: theme.palette.textSecondary,
        fontFamily: theme.font.Body,
        fontSize: 20,
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center",
    },
    textStyle: {
        fontFamily: theme.font.Body,
        height: "100%",
        width: "100%",
    },
    cardStyle: {
        borderRadius: 10,
        height: 60,
    },
    mt50: {
        marginTop: 50,
    },
    itemsCenter: {
        alignItems: "center",
    },
    thumbnail: {
        width: 50,
        height: 50,
    },
    mt250: {
        marginTop: 250,
    },
}));

export default function Login() {
    const styles = useStyles();
    const [phone, setPhone] = useState("+989");

    return (
        <Root>
            <Container style={styles.forwardBackIconStyle}>
                <Content>
                    <Grid style={styles.mt250}>
                        <Row>
                            <Col style={styles.itemsCenter}>
                                <Thumbnail source={login} style={styles.thumbnail} />
                            </Col>
                        </Row>
                        <Row style={styles.mt50}>
                            <Col style={styles.inputBoxEditProfileStyle}>
                                <Content>
                                    <Item style={styles.cardStyle} rounded>
                                        <Input
                                            value={phone}
                                            onChangeText={(phone) => {
                                                if (/^\+989\d*$/.test(phone)) {
                                                    setPhone(phone);
                                                }
                                            }}
                                            maxLength={13}
                                            textContentType='telephoneNumber'
                                        />
                                    </Item>
                                </Content>
                            </Col>
                        </Row>
                        <Row style={styles.saveButtonStyleCol}>
                            <Col>
                                <Button
                                    style={styles.saveButtonStyleCard}
                                    transparent
                                    onPress={() => console.log(phone)}
                                    disabled={phone.length !== 13}
                                >
                                    <Text style={styles.saveButtonTextStyle}>{t("login")}</Text>
                                </Button>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        </Root>
    );
}
