import React from "react";
import {Button, Col, Grid, Icon, Row, Text, Thumbnail} from "native-base";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";
import CommonColors from "../../native-base-theme/variables/commonColor";

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        borderRadius: 50,
        height: 35,
        justifyContent: "center",
        paddingBottom: 0,
        paddingTop: 0,
        width: 35,
    },
    content: {
        flex: 6,
        height: "100%",
    },
    grid: {
        borderBottomColor: "#F1F1F1",
        borderBottomWidth: 1,
        height: 80,
        paddingBottom: 6,
        paddingEnd: 9,
        paddingStart: 16,
        paddingTop: 16,
    },
    icon: {
        marginLeft: 0,
        marginRight: 0,
    },
    image: {
        flex: 2,
    },
    notification: {
        flex: 1,
        justifyContent: "flex-end",
    },
    numberText: {
        color: CommonColors.brandSecondary,
        fontSize: 10,
    },
    otherText: {
        fontSize: 10,
    },
    title: {
        fontWeight: "bold",
    },
});

export default function () {
    const fakeSrc =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/368px-Donald_Trump_official_portrait.jpg";
    return (
        <Grid style={styles.grid}>
            <Col style={styles.image}>
                <Thumbnail source={{uri: fakeSrc}} circular />
            </Col>
            <Col style={styles.content}>
                <Row>
                    <Text style={styles.title}>Donald Trump</Text>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Text style={styles.numberText}>6</Text>
                        </Row>
                        <Row>
                            <Text style={styles.otherText}>{t("posts")}</Text>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Text style={styles.numberText}>12</Text>
                        </Row>
                        <Row>
                            <Text style={styles.otherText}>{t("followers")}</Text>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Text style={styles.numberText}>24</Text>
                        </Row>
                        <Row>
                            <Text style={styles.otherText}>{t("following")}</Text>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col style={styles.notification}>
                <Button icon style={styles.button}>
                    <Icon name='md-notifications' style={styles.icon} />
                </Button>
            </Col>
        </Grid>
    );
}
