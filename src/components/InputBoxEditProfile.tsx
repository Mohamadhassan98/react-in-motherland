import React from "react";
import {Card, Content, Input} from "native-base";
import makeStyles from "../utils/makeStyles";
import {InputBoxEditProfileProps} from "./types/InputBoxEditProfileProps";

const useStyles = makeStyles((theme) => ({
    textStyle: {
        fontFamily: theme.font.Body,
        height: "100%",
        width: "100%",
    },
    cardStyle: {
        backgroundColor: theme.palette.primary,
        borderRadius: 15,
        height: 60,
    },
}));

export default function ({placeHolderMsg}: InputBoxEditProfileProps) {
    const styles = useStyles();
    return (
        <Content>
            <Card style={styles.cardStyle}>
                <Input placeholder={placeHolderMsg} style={styles.textStyle} />
                {/*</CardItem>*/}
            </Card>
        </Content>
    );
}
