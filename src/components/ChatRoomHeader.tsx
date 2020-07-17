import React from "react";
import {StyleSheet} from "react-native";
import {Button, Grid, Row, Text, View} from "native-base";
import {ChatRoomHeadersProps} from "./types/ChatRoomHeadersProps";
import commonColor from "../../native-base-theme/variables/commonColor";
import {t} from "i18n-js";
import Avatar from "./Avatar";
import Icons8ForwardIcon from "../../assets/icons/ForwardIcon";
import Icons8BackIcon from "../../assets/icons/BackIcon";
import useTheme from "../values/theme";
import MenuVerticalIcon from "../../assets/icons/MenuVerticalIcon";

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
export default function ({profileImage, profileUsername, status, navigation}: ChatRoomHeadersProps) {
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
                    <Avatar profileImage={profileImage} visibleName={profileUsername} size={38} />
                    <View style={{paddingStart: 5}}>
                        <Text style={[styles.username, styles.align]}>{profileUsername}</Text>

                        {theme.localize.language === "fa" ? (
                            <Text note style={styles.align}>
                                {t(status)}
                            </Text>
                        ) : (
                            <Text note style={styles.align}>
                                {status}
                            </Text>
                        )}
                    </View>
                </View>
                <MenuVerticalIcon style={{}} />
            </Row>
        </Grid>
    );
}
