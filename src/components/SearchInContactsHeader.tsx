import React, {useState} from "react";
import {Col, Icon, Text, Input} from "native-base";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    backIcon: {
        flex: 2,
    },
    closeColumn: {
        flex: 2,
    },
    closeIcon: {
        alignSelf: "center",
    },
    searchColumn: {
        flexGrow: 8,
    },
});

export default function (props: {setSearchText: (text: string) => void}) {
    const [Stext, setStext] = useState("");

    return (
        <>
            <Col style={styles.backIcon}>
                <Icon name='md-arrow-back' />
            </Col>
            <Col style={styles.searchColumn}>
                <Input
                    value={Stext}
                    placeholder={t("search")}
                    onChangeText={(event) => {
                        setStext(event);
                        props.setSearchText(event);
                    }}
                />
            </Col>
            <Col style={styles.closeColumn}>
                {Stext.length > 0 && (
                    <Icon
                        style={styles.closeIcon}
                        name='md-close'
                        onPress={() => {
                            setStext("");
                            props.setSearchText("");
                        }}
                    />
                )}
            </Col>
        </>
    );
}
