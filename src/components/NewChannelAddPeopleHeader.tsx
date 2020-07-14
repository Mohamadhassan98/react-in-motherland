import React, {useState} from "react";
import {Col, Icon, Input, Text} from "native-base";
import {t} from "i18n-js";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    backColumn: {},
    backIcon: {
        flex: 2,
    },
    closeColumn: {
        alignItems: "flex-end",
        flex: 2,
        right: "10%",
    },
    closeIcon: {
        alignSelf: "flex-end",
    },
    emptyColumn: {
        flex: 2,
    },
    iconColumn: {
        alignItems: "flex-end",
        flex: 2,
        right: "10%",
    },
    searchColumn: {
        flexGrow: 8,
    },
    titleColumn: {
        flexGrow: 8,
    },
    titleTextAlign: {
        textAlign: "center",
    },
});

export default function (props: {setSearchText: (text: string) => void}) {
    const [search, setSearch] = useState(false);
    const [Stext, setStext] = useState("");
    return (
        <>
            {search === false ? (
                <>
                    <Col style={styles.backIcon}>
                        <Icon name='md-arrow-back' />
                    </Col>
                    <Col style={styles.titleColumn}>
                        <Text style={styles.titleTextAlign}>{t("newChannel")}</Text>
                    </Col>
                    <Col style={styles.iconColumn}>
                        <Icon
                            name='md-search'
                            onPress={() => {
                                setSearch(true);
                            }}
                        />
                    </Col>
                </>
            ) : (
                <>
                    <Col style={styles.backIcon}>
                        <Icon
                            name='md-arrow-back'
                            onPress={() => {
                                setSearch(false);
                                setStext("");
                                props.setSearchText("");
                            }}
                        />
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
            )}
        </>
    );
}