import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import {ScrollView, StyleSheet} from "react-native";
import SearchInMessengerHeader from "../components/SearchInMessengerHeader";
import {Badge, Body, Container, Content, Icon, Left, List, ListItem, Right, Text, Thumbnail, View} from "native-base";
import {t} from "i18n-js";
import {Recent} from "../values/strings";

const styles = StyleSheet.create({
    closeIcon: {
        alignSelf: "center",
        paddingLeft: "2%",
    },
    end: {
        alignSelf: "flex-end",
        //height:'100%'
    },
    notification: {
        alignSelf: "center",
        backgroundColor: "#67c074",
    },
    people: {
        marginLeft: "2%",
    },
    peopleList: {
        direction: "rtl",
    },
    right_end: {
        justifyContent: "center",
    },
    text: {
        textAlign: "left",
    },
});

export default function SearchInMessenger() {
    return (
        <MainPageLayout active={3}>
            <MainHeader size='collapsed'>
                <SearchInMessengerHeader />
            </MainHeader>
            {/* Rest of code here */}
            <Content>
                <List>
                    <ListItem itemDivider>
                        <Text> {t("People")}</Text>
                    </ListItem>
                    <ListItem>
                        {/*<ScrollView horizontal={true}>*/}
                        <View style={styles.people}>
                            <Thumbnail source={require("../../assets/avatar.jpg")} />
                        </View>
                        {/*</ScrollView>*/}
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>{t("Recent")}</Text>
                    </ListItem>
                    {Recent.map((item) => (
                        <ListItem avatar key={item.id}>
                            <Left>
                                <Icon name='md-close' style={styles.closeIcon} />
                                <Thumbnail source={item.img} />
                            </Left>
                            <Body style={styles.end}>
                                <Text style={styles.text}>{`${item.FirstName} ${item.LastName}`}</Text>
                                <Text note style={styles.text}>
                                    {item.numberOfMembers
                                        ? item.numberOfMembers + t(item.Description)
                                        : t(item.Description)}
                                </Text>
                            </Body>
                            <Right style={styles.right_end}>
                                {item.notification !== "" && (
                                    <Badge
                                        style={[
                                            styles.notification,
                                            item.mute ? {backgroundColor: "#b4b4b4"} : {backgroundColor: "#67c074"},
                                        ]}
                                    >
                                        <Text>{item.notification}</Text>
                                    </Badge>
                                )}
                            </Right>
                        </ListItem>
                    ))}
                </List>
            </Content>
        </MainPageLayout>
    );
}
