import React from "react";
import {Button, Input, Row} from "native-base";
import Icons8SentIcon from "../../assets/icons/SentIcon";
import {t} from "i18n-js";
import {TextInputProps} from "react-native";
import makeStyles from "../utils/makeStyles";

const useStyles = makeStyles((theme) => ({
    input: {
        backgroundColor: "white",
        flexGrow: 1,
        fontFamily: theme.font.Body,
        fontSize: 10,
        paddingStart: 16,
        paddingBottom: 16,
        paddingTop: 16,
        paddingEnd: 16,
    },
    row: {
        alignItems: "center",
    },
    submit: {
        alignItems: "center",
        flexGrow: 0,
        height: 40,
        justifyContent: "center",
        paddingEnd: 6,
        paddingStart: 6,
        width: 40,
        backgroundColor: theme.palette.Secondary,
    },
    sentIcon: {
        transform: [{scaleX: theme.localize.language === "fa" ? -1 : 1}],
    },
}));

export default function ({onSubmit, ...props}: TextInputProps & {onSubmit: (comment: string) => void}) {
    const styles = useStyles();
    const [comment, setComment] = React.useState("");
    return (
        <Row style={styles.row}>
            <Input
                value={comment}
                onChangeText={(text) => setComment(text)}
                style={styles.input}
                placeholder={t("writeComment")}
                {...props}
            />
            <Button
                rounded
                style={styles.submit}
                transparent
                onPress={() => {
                    onSubmit(comment);
                    setComment("");
                }}
                disabled={comment.trim().length === 0}
            >
                <Icons8SentIcon style={styles.sentIcon} />
            </Button>
        </Row>
    );
}
