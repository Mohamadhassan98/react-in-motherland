import React from "react";
import {Image, Text, View} from "react-native";
import {materialColors} from "../values/materialColors";
import {t} from "i18n-js";
import Menu, {MenuItem} from "react-native-material-menu";
import {Button} from "native-base";
import MenuVerticalIcon from "../../assets/icons/MenuVerticalIcon";
import makeStyles from "../utils/makeStyles";

const useStyles = makeStyles((theme) => ({
    userNameStyle: {
        fontFamily: theme.font.body.Bold,
        fontWeight: theme.localize.language === "fa" ? undefined : "bold",
        fontSize: 16,
        color: materialColors[24],
    },
    timeOfNotificationStyle: {
        fontFamily: theme.font.Body,
        paddingLeft: 20,
        color: materialColors[24],
        fontSize: 18,
    },
    userStatusNotificationStyle: {
        fontFamily: theme.font.Body,
        fontWeight: theme.localize.language === "fa" ? undefined : "bold",
        fontSize: 16,
        color: materialColors[24],
    },
    deleteNotification: {
        fontFamily: theme.font.Body,
    },
}));
const Content = (props: {
    CategoryName: string;
    url: string | undefined;
    UserDetails: Array<{
        UserName: string;
        UserStatus: string;
        LastSeen: string;
    }>;
}) => {
    const styles = useStyles();
    const menu = React.useRef<Menu | null>(null);
    const [userDetails, setUserDetails] = React.useState<
        Array<{
            UserName: string;
            UserStatus: string;
            LastSeen: string;
        }>
    >(props.UserDetails);
    return (
        <View
            style={{
                paddingTop: 10,
                paddingBottom: 20,
                borderBottomWidth: 0.5,
                paddingStart: 5,
                paddingEnd: 5,
                borderColor: materialColors[23],
            }}
        >
            <Text style={styles.timeOfNotificationStyle}>{props.CategoryName}</Text>
            {userDetails.map((details, index) => (
                <View key={`detail-${index}`}>
                    <View
                        style={{
                            // width: width,
                            height: 50,
                            flex: 1,
                            backgroundColor: materialColors[20],
                            flexDirection: "row",
                            marginTop: 5,
                        }}
                    >
                        <View
                            style={{
                                flex: 2,
                                width: "100%",
                                height: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Image source={{uri: props.url}} style={{width: 48, height: 48, borderRadius: 40}} />
                        </View>

                        <View
                            style={{
                                flex: 7,
                                width: "100%",
                                height: "100%",
                                justifyContent: "center",
                                alignItems: "flex-start",
                            }}
                        >
                            <Text style={styles.userNameStyle}>{details.UserName}</Text>
                            <Text style={styles.userStatusNotificationStyle}>
                                {`${t(details.UserStatus)}. `}
                                <Text>{t(details.LastSeen)}</Text>{" "}
                            </Text>
                        </View>
                        <Menu
                            button={
                                <Button onPress={() => menu.current?.show()} transparent>
                                    <MenuVerticalIcon />
                                </Button>
                            }
                            ref={menu}
                        >
                            <MenuItem
                                onPress={() => {
                                    // delete userDetails[index];
                                    setUserDetails((prevState) =>
                                        prevState.filter((value, index1) => index1 !== index)
                                    );
                                    menu.current?.hide();
                                }}
                            >
                                <Text style={styles.deleteNotification}>{t("DeleteNotification")}</Text>
                            </MenuItem>
                        </Menu>
                    </View>
                </View>
            ))}
        </View>
    );
};

export default Content;
