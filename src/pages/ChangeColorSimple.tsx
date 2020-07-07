import React from "react";
import {Body, Button, Container, Content, Left, Right, Text, View} from "native-base";
import * as Localization from "expo-localization";
import Forward from "../../assets/icons/ForwardIcon";
import Back from "../../assets/icons/BackIcon";
import {t} from "i18n-js";
import MainHeader from "../components/MainHeader";
import ColorPalette from "react-native-color-palette";
import useTheme from "../values/theme";
import Icons8CheckmarkIcon from "../../assets/icons/CheckmarkIcon";
import {StyleSheet} from "react-native";
import commonColor from "../../native-base-theme/variables/commonColor";
import {fromHsv, TriangleColorPicker} from "react-native-color-picker";
import {loadAsync} from "expo-font";

const styles = StyleSheet.create({
    buttonText: {
        color: commonColor.textColor,
    },
    colorPicker: {
        flex: 1,
        height: 300,
    },
});

const materialColors = [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#795548",
    "#9E9E9E",
    "#607D8B",
];

export default function ({color}: {color: "primary" | "secondary"}) {
    const palette = useTheme();
    const [selectedColor, setSelectedColor] = React.useState(palette[color]);
    const [loaded, setLoaded] = React.useState(false);
    loadAsync({
        Roboto_medium: require("../../assets/fonts/english-fonts/Roboto-Medium.ttf"),
    }).then(() => setLoaded(true));
    if (!loaded) {
        return (
            <View>
                <Text>Loading fonts...</Text>
            </View>
        );
    }
    return (
        <Container>
            <MainHeader size='collapsed'>
                <Left>{Localization.isRTL ? <Forward /> : <Back />}</Left>
                <Body>
                    <Text>{t("primary")}</Text>
                </Body>
                <Right>
                    <Button
                        transparent
                        onPress={() => {
                            if (selectedColor !== palette[color]) {
                                if (color === "primary") {
                                    palette.setPrimary(selectedColor);
                                } else {
                                    palette.setSecondary(selectedColor);
                                }
                            }
                        }}
                    >
                        <Text style={styles.buttonText}>{t("save")}</Text>
                    </Button>
                </Right>
            </MainHeader>
            <Content>
                <ColorPalette
                    onChange={(color) => setSelectedColor(color)}
                    value={materialColors.includes(selectedColor) ? selectedColor : undefined}
                    colors={materialColors}
                    title={t("chooseOneOfThese")}
                    icon={materialColors.includes(selectedColor) && <Icons8CheckmarkIcon />}
                />
                <Text>{t("orCustomizeIt")}</Text>
                <TriangleColorPicker
                    onColorChange={(color) => setSelectedColor(fromHsv(color))}
                    color={selectedColor}
                    defaultColor={palette[color]}
                    oldColor={palette[color]}
                    onOldColorSelected={(oldColor) => setSelectedColor(oldColor)}
                    onColorSelected={(selectedColor1) => setSelectedColor(selectedColor1)}
                    style={styles.colorPicker}
                />
            </Content>
        </Container>
    );
}
