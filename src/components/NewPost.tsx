import React from "react";
import {View, ScrollView, Dimensions} from "react-native";
import {materialColors} from "../values/materialColors";
import {Textarea} from "native-base";
import {t} from "i18n-js";

const {width} = Dimensions.get("window");

export default (props: {PostItemList: Array<JSX.Element>}) => {
    return (
        <View
            style={{
                width: width,
                flex: 7,
                backgroundColor: materialColors[20],
            }}
        >
            <View style={{flex: 5, alignItems: "flex-start", padding: 20}}>
                <Textarea placeholder={t("What's in your mind?")} rowSpan={10} underline={false} bordered={false} />
            </View>
            <View
                style={{
                    flex: 2,
                    backgroundColor: materialColors[20],
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingLeft: 15,
                    flexDirection: "row",
                }}
            >
                <ScrollView horizontal={true}>{props.PostItemList}</ScrollView>
            </View>
        </View>
    );
};
