import React from "react";
import {View, Text, Image, Dimensions} from "react-native";
import {materialColors} from "../values/materialColors";
import Dots from "../../assets/icons/Dots";
const {width} = Dimensions.get("window");

const Content = (props: {
    CategoryName: string;
    UserDetails: Array<{
        UserName: string;
        UserStatus: string;
        LastSeen: string;
    }>;
}) => {
    return (
        <View
            style={{
                paddingTop: 10,
                paddingBottom: 20,
                borderBottomWidth: 0.5,
                borderColor: materialColors[23],
            }}
        >
            <Text
                style={{
                    width: width,
                    paddingLeft: 20,
                    color: materialColors[24],
                    fontSize: 18,
                }}
            >
                {props.CategoryName}
            </Text>
            {props.UserDetails.map((details, index) => (
                <View key={`detail-${index}`}>
                    <View
                        style={{
                            width: width,
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
                            <Image
                                source={require("../../assets/images/avatar.jpg")}
                                style={{width: 48, height: 48, borderRadius: 40}}
                            />
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
                            <Text style={{fontWeight: "bold", fontSize: 16, color: materialColors[24]}}>
                                {details.UserName}
                            </Text>
                            <Text style={{fontSize: 13, color: materialColors[24]}}>
                                {details.UserStatus}{" "}
                                <View
                                    style={{
                                        width: 5,
                                        height: 5,
                                        backgroundColor: materialColors[25],
                                        borderRadius: 20,
                                    }}
                                ></View>{" "}
                                <Text>{details.LastSeen}</Text>{" "}
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                width: "100%",
                                height: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Dots />
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
};

export default Content;
