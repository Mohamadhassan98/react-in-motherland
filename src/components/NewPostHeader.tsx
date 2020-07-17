import React from "react";
import {TouchableOpacity, Image, Text, Dimensions} from "react-native";
import {View} from "native-base";
import {materialColors} from "../values/materialColors";
import BackIcon from "../../assets/icons/BackIcon";
import useTheme from "../values/theme";
import Icons8ForwardIcon from "../../assets/icons/ForwardIcon";
const {width} = Dimensions.get("window");

export default (props: {
    onBackPressed?: () => void;
    onUserPressed: () => void;
    Title: string;
    url: string | undefined;
}) => {
    const theme = useTheme();
    return (
        <View
            style={{
                width: width,
                flex: 0.75,
                backgroundColor: materialColors[21],
            }}
        >
            <View
                style={{
                    width: width,
                    flex: 1,
                    backgroundColor: materialColors[20],
                    flexDirection: "row",
                }}
            >
                <TouchableOpacity
                    style={{
                        width: width,
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onPress={props.onBackPressed}
                >
                    {theme.localize.language === "fa" ? (
                        <Icons8ForwardIcon style={{width: 30}} />
                    ) : (
                        <BackIcon style={{width: 30}} />
                    )}
                </TouchableOpacity>
                <View
                    style={{
                        width: width,
                        flex: 5,
                        justifyContent: "center",
                        alignItems: "flex-start",
                    }}
                >
                    <Text
                        style={{
                            color: materialColors[22],
                            fontSize: 22,
                            fontWeight: "bold",
                            textAlign: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            alignSelf: "center",
                        }}
                    >
                        {props.Title}
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        width: width,
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    // onPress={props.onUserPressed}
                >
                    {/*<Image source={{uri: props.url}} style={{width: 48, height: 48, borderRadius: 40}} />*/}
                </TouchableOpacity>
            </View>
        </View>
    );
};
