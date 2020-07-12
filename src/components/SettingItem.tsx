import React from "react";
import {Left, ListItem, Right, Text, View} from "native-base";
import {t} from "i18n-js";
import {SettingItemProps} from "./types/SettingItemProps";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    item: {
        height: 64,
    },
});

export default function ({scope, rightAdornment, onClick, selected, note}: SettingItemProps) {
    return (
        <ListItem button onPress={onClick} style={styles.item} selected={selected}>
            <Left>
                {note ? (
                    <View>
                        <Text>{t(scope)}</Text>
                        <Text note>{t(note)}</Text>
                    </View>
                ) : (
                    <View>
                        <Text>{t(scope)}</Text>
                    </View>
                )}
            </Left>
            <Right>{rightAdornment}</Right>
        </ListItem>
    );
}
