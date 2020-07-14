import React, {useState} from "react";
import {StyleSheet, TextInputProps} from "react-native";
import {Button, Icon, Input, Item} from "native-base";
import CommonColor from "../../native-base-theme/variables/commonColor";
import {Col, Grid} from "react-native-easy-grid";
import {t} from "i18n-js";
import useTheme from "../values/theme";
import makeStyles from "../utils/makeStyles";
import Icons8SentIcon from "../../assets/icons/SentIcon";
import {CommentProps} from "./types/CommentProps";
import {MessageProps} from "./types/MessageProps";

const useStyles = makeStyles((theme) => ({
    addButton: {
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
    },
    addCol: {
        alignItems: "center",
        justifyContent: "center",
        width: 30,
    },
    addIcon: {
        color: "rgba(22, 31, 61, 0.5)",
        marginLeft: 0,
        marginRight: 0,
    },
    grid: {
        alignItems: "center",
        justifyContent: "space-around",
        paddingLeft: 7,
        paddingRight: 7,
        width: "100%",
    },
    input: {
        height: 36,
        marginRight: 6,
    },
    inputFont: {
        fontFamily: theme.font.Body,
        fontSize: 15,
    },

    sendCol: {
        height: 40,
        paddingLeft: 0,
        paddingRight: 0,
        width: 40,
    },
    sendMessageButton: {
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        height: 40,
        justifyContent: "center",
        width: 40,
    },
    sendMessageIcon: {
        color: CommonColor.inverseTextColor,
        marginLeft: 0,
        marginRight: 0,
    },
    sentIcon: {
        transform: [{scaleX: theme.localize.language === "fa" ? -1 : 1}],
        width: 40,
        height: 40,
    },
}));

export default function ({onSubmit}: {onSubmit: (comment: string) => void}) {
    const styles = useStyles();
    const [message, setMessage] = useState("");
    return (
        <Grid style={styles.grid}>
            <Col>
                <Item rounded style={styles.input}>
                    <Input
                        value={message}
                        onChangeText={(text) => setMessage(text)}
                        placeholder={t("messageBoxPlaceHolder")}
                        style={styles.inputFont}
                    />
                </Item>
            </Col>
            <Col style={styles.sendCol}>
                <Button
                    transparent
                    onPress={() => {
                        onSubmit(message);
                        setMessage("");
                    }}
                >
                    <Icons8SentIcon style={styles.sentIcon} />
                </Button>
            </Col>
        </Grid>
    );
}
