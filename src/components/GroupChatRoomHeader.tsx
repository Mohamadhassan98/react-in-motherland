import React from "react";
import useTheme from "../values/theme";
import {Button, Grid, Row, Text, View} from "native-base";
import Icons8ForwardIcon from "../../assets/icons/ForwardIcon";
import Icons8BackIcon from "../../assets/icons/BackIcon";
import Avatar from "./Avatar";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";
import commonColor from "../../native-base-theme/variables/commonColor";
import {GroupChatRoomHeaderProps} from "./types/GroupChatRoomHeaderProps";

const styles = StyleSheet.create({
    align: {
        textAlign: "left",
    },
    forwardBackIconStyle: {
        backgroundColor: "#FFFFFF",
    },
    padding: {
        paddingBottom: 5,
        paddingTop: 5,
        width: "100%",
    },
    username: {
        color: commonColor.textColor,
    },
});

export default function ({groupImage, groupName, members, navigation, onlineMembers}: GroupChatRoomHeaderProps) {
    const theme = useTheme();
    return (
        <Grid style={styles.padding}>
            <Row style={{alignItems: "center", justifyContent: "space-between"}}>
                <View style={{flexDirection: "row"}}>
                    <Button
                        style={styles.forwardBackIconStyle}
                        icon
                        transparent
                        onPress={() => navigation.canGoBack() && navigation.goBack()}
                    >
                        {theme.localize.language === "fa" ? <Icons8ForwardIcon /> : <Icons8BackIcon />}
                    </Button>
                    <Avatar profileImage={groupImage} visibleName={groupName} size={38} />
                    <View style={{paddingStart: 5}}>
                        <Text style={[styles.username, styles.align]}>{groupName}</Text>
                        <Text note style={styles.align}>
                            {`${members} ${t("members")}${
                                onlineMembers === 0 ? "" : `, ${onlineMembers} ${t("online")}`
                            }`}
                        </Text>
                    </View>
                </View>
            </Row>
        </Grid>
    );
}
