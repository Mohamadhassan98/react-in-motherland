import React from "react";
import {Card, Content, Input} from "native-base";
import makeStyles from "../utils/makeStyles";
import {InputBoxEditProfileProps} from "./types/InputBoxEditProfileProps";

const useStyles = makeStyles((theme) => ({
    textStyle: {
        fontFamily: theme.font.Body,
        height: "100%",
        width: "100%",
        opacity: 0.3,
    },
    cardStyle: {
        // borderColor: "#fcfcfc",
        borderRadius: 15,
        height: 60,
    },
}));
export default function ({placeHolderMsg, setValue, value}: InputBoxEditProfileProps) {
    const styles = useStyles();
    return (
        <Content>
            <Card style={styles.cardStyle}>
                <Input placeholder={placeHolderMsg} style={styles.textStyle} onChangeText={setValue} value={value} />
            </Card>
        </Content>
    );
}
