import React from "react";
import {CommentProps} from "./types/CommentProps";
import {Left, ListItem, Right, Row, Text, View} from "native-base";
import Avatar from "./Avatar";
import makeStyles from "../utils/makeStyles";

const useStyles = makeStyles((theme) => ({
    fullWidth: {
        width: "100%",
    },
    username: {
        paddingStart: 8,
        paddingEnd: 8,
        fontSize: 12,
        fontWeight: "bold",
        fontFamily: theme.font.body.Bold,
    },
    body: {
        paddingStart: 32,
        paddingEnd: 32,
        fontSize: 10,
    },
    publishDate: {
        fontSize: 10,
        fontFamily: theme.font.body.Light,
        fontWeight: "300",
    },
    alignCenter: {
        alignItems: "center",
    },
    textLeft: {
        textAlign: "left",
    },
}));

export default function ({body, datePublished, profileImage, visibleName}: CommentProps) {
    const styles = useStyles();
    return (
        <ListItem>
            <View style={styles.fullWidth}>
                <Row style={styles.alignCenter}>
                    <Left>
                        <Row style={styles.alignCenter}>
                            <Avatar visibleName={visibleName} profileImage={profileImage} size={24} />
                            <Text style={[styles.username, styles.textLeft]}>{visibleName}</Text>
                        </Row>
                    </Left>
                    <Right>
                        <Text note style={styles.publishDate}>
                            {datePublished}
                        </Text>
                    </Right>
                </Row>
                <Text style={[styles.body, styles.textLeft]}>{body}</Text>
            </View>
        </ListItem>
    );
}
