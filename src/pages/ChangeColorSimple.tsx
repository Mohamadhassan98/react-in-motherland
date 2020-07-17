import React from "react";
import {Button, Container, Content, Text} from "native-base";
import {t} from "i18n-js";
import MainHeader from "../components/MainHeader";
import ColorPalette from "react-native-color-palette";
import useTheme from "../values/theme";
import Icons8CheckmarkIcon from "../../assets/icons/CheckmarkIcon";
import {fromHsv, TriangleColorPicker} from "react-native-color-picker";
import {materialColorsForUser} from "../values/materialColors";
import makeStyles from "../utils/makeStyles";
import SimpleHeader from "../components/SimpleHeader";
import {StackNavigator} from "../values/Routing";

const useStyles = makeStyles((theme) => ({
    buttonText: {
        color: theme.palette.textPrimary,
    },
    colorPicker: {
        flex: 1,
        height: 300,
    },
}));

export default function ({navigation, route}: StackNavigator<"ChangeColorSimple">) {
    const styles = useStyles();
    const theme = useTheme();
    const {color} = route.params;
    const [selectedColor, setSelectedColor] = React.useState(theme.palette[color]);
    return (
        <Container>
            <MainHeader size='collapsed'>
                <SimpleHeader
                    navigation={navigation}
                    title={color}
                    rightAdornment={
                        <Button
                            transparent
                            onPress={() => {
                                if (selectedColor !== theme.palette[color]) {
                                    if (color === "Primary") {
                                        theme.palette.setPrimary(selectedColor);
                                    } else {
                                        theme.palette.setSecondary(selectedColor);
                                    }
                                }
                            }}
                        >
                            <Text style={styles.buttonText}>{t("save")}</Text>
                        </Button>
                    }
                />
            </MainHeader>
            <Content>
                <ColorPalette
                    onChange={(color) => setSelectedColor(color)}
                    value={materialColorsForUser.includes(selectedColor) ? selectedColor : undefined}
                    colors={materialColorsForUser}
                    title={t("chooseOneOfThese")}
                    icon={materialColorsForUser.includes(selectedColor) && <Icons8CheckmarkIcon />}
                />
                <Text>{t("orCustomizeIt")}</Text>
                <TriangleColorPicker
                    onColorChange={(color) => setSelectedColor(fromHsv(color))}
                    color={selectedColor}
                    defaultColor={theme.palette[color]}
                    oldColor={theme.palette[color]}
                    onOldColorSelected={(oldColor) => setSelectedColor(oldColor)}
                    onColorSelected={(selectedColor1) => setSelectedColor(selectedColor1)}
                    style={styles.colorPicker}
                />
            </Content>
        </Container>
    );
}
