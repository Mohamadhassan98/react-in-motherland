import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import {StyleSheet} from "react-native";
import MessengerHeader from "../components/MessengerHeader";
import _ from "lodash";
import {Badge, Body, Container, Content, Fab, Icon, Left, List, ListItem, Right, Text, Thumbnail} from "native-base";
import {chatList} from "../values/strings";

const styles = StyleSheet.create({
    FAB: {
        backgroundColor: "#81e38f",
        bottom: "-15%",
    },
    List: {
        flex: 1,
    },
    end: {
        alignSelf: "flex-end",
        height: "100%",
    },
    notification: {
        alignSelf: "flex-end",
        marginTop: "10%",
        //right:'10%',
        marginBottom: "5%",
        backgroundColor: "#67c074",
    },
    right_end: {
        alignSelf: "flex-end",
        height: "100%",
    },
    text: {
        textAlign: "left",
    },
    time: {
        alignSelf: "flex-start",
        //right:'10%'
    },
});

export default function Messenger() {
    return (
        <MainPageLayout active={3}>
            <MainHeader size='collapsed'>
                <MessengerHeader />
            </MainHeader>
            {/* Rest of code here */}

            <Container>
                <Content>
                    <List>
                        {chatList.map((item) => (
                            <ListItem avatar key={item.id}>
                                <Left>
                                    <Thumbnail source={item.img} />
                                </Left>
                                <Body style={styles.end}>
                                    <Text style={styles.text}>{`${item.FirstName} ${item.LastName}`}</Text>
                                    <Text note style={styles.text}>
                                        {_.truncate(item.message, {
                                            length: 34,
                                            separator: " ",
                                        })}
                                    </Text>
                                </Body>
                                <Right style={styles.right_end}>
                                    <Text note style={styles.time}>
                                        {item.time}
                                    </Text>
                                    {item.notification !== "" ? (
                                        <Badge
                                            style={[
                                                styles.notification,
                                                item.mute ? {backgroundColor: "#b4b4b4"} : {backgroundColor: "#67c074"},
                                            ]}
                                        >
                                            <Text>{item.notification}</Text>
                                        </Badge>
                                    ) : (
                                        <></>
                                    )}
                                </Right>
                            </ListItem>
                        ))}
                    </List>
                </Content>

                <Fab
                    active={false}
                    direction='up'
                    containerStyle={{}}
                    style={styles.FAB}
                    position='bottomRight'
                    onPress={() => {}}
                >
                    <Icon name='create' />
                </Fab>
            </Container>
        </MainPageLayout>
    );
}
