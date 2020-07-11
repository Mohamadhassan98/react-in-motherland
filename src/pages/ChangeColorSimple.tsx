import React from "react";
import {Button, Container, Content, Text} from "native-base";
import {t} from "i18n-js";
import MainHeader from "../components/MainHeader";
import ColorPalette from "react-native-color-palette";
import useTheme from "../values/theme";
import Icons8CheckmarkIcon from "../../assets/icons/CheckmarkIcon";
import {fromHsv, TriangleColorPicker} from "react-native-color-picker";
import {materialColors} from "../values/materialColors";
import makeStyles from "../utils/makeStyles";
import SimpleHeader from "../components/SimpleHeader";

const useStyles = makeStyles((theme) => ({
    buttonText: {
        color: theme.palette.textPrimary,
    },
    colorPicker: {
        flex: 1,
        height: 300,
    },
}));

export default function ({color}: {color: "Primary" | "Secondary"}) {
    const styles = useStyles();
    const theme = useTheme();
    const [selectedColor, setSelectedColor] = React.useState(theme.palette[color]);
    return (
        <Container>
            <MainHeader size='collapsed'>
                <SimpleHeader
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
                    value={materialColors.includes(selectedColor) ? selectedColor : undefined}
                    colors={materialColors}
                    title={t("chooseOneOfThese")}
                    icon={materialColors.includes(selectedColor) && <Icons8CheckmarkIcon />}
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
