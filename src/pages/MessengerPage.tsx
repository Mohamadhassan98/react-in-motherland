import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import MessengerHeader from "../components/MessengerHeader";
import _ from "lodash";
import {Badge, Body, Container, Content, Fab, Icon, Left, List, ListItem, Right, Text} from "native-base";
import {chatList, i17n} from "../values/strings";
import {StackNavigator} from "../values/Routing";
import makeStyles from "../utils/makeStyles";
import {copilot} from "react-native-copilot";
import {CopilotTypes} from "../components/types/copilotTypes";
import Avatar from "../components/Avatar";

const useStyles = makeStyles((theme) => ({
    FAB: {
        backgroundColor: theme.palette.Primary,
    },
    List: {
        flex: 1,
        fontFamily: theme.font.Body,
    },
    end: {
        alignSelf: "flex-end",
        height: "100%",
        fontFamily: theme.font.Body,
    },
    notification: {
        alignSelf: "flex-end",
        marginTop: "10%",
        //right:'10%',
        marginBottom: "5%",
        backgroundColor: "#67c074",
        fontFamily: theme.font.Body,
    },
    right_end: {
        alignSelf: "flex-end",
        height: "100%",
        fontFamily: theme.font.Body,
    },
    text: {
        textAlign: "left",
        fontFamily: theme.font.Body,
    },
    time: {
        alignSelf: "flex-start",
        //right:'10%'
        fontFamily: theme.font.Body,
    },
    notifText: {
        fontFamily: theme.font.Body,
    },
}));

function MessengerPage({navigation, route, start, copilotEvents}: StackNavigator<"MessengerPage"> & CopilotTypes) {
    const styles = useStyles();
    return (
        <MainPageLayout active={3} navigation={navigation} start={start} copilotEvents={copilotEvents}>
            <MainHeader size='collapsed'>
                <MessengerHeader navigation={navigation} />
            </MainHeader>
            {/* Rest of code here */}
            <Container>
                <Content>
                    <List>
                        {chatList.map(({FirstName, LastName, id, img, message, mute, notification, time}) => (
                            <ListItem
                                avatar
                                key={id}
                                onPress={() => {
                                    if (id % 3 === 0) {
                                        navigation.navigate("ChatRoom", {
                                            visibleName: `${FirstName} ${LastName}`,
                                            profileImage: img,
                                            local: !!img,
                                        });
                                    } else if (id % 3 === 1) {
                                        navigation.navigate("GroupChatRoom", {
                                            members: 12,
                                            groupImage: img,
                                            local: !!img,
                                            groupName: `${FirstName} ${LastName}`,
                                            onlineMembers: 5,
                                        });
                                    } else {
                                        navigation.navigate("ChannelRoom", {
                                            onlineMembers: 0,
                                            groupName: `${FirstName} ${LastName}`,
                                            local: !!img,
                                            groupImage: img,
                                            members: 12,
                                        });
                                    }
                                }}
                            >
                                <Left>
                                    <Avatar
                                        size={56}
                                        visibleName={`${FirstName} ${LastName}`}
                                        profileImage={img}
                                        local
                                    />
                                </Left>
                                <Body style={styles.end}>
                                    <Text style={styles.text}>{`${FirstName} ${LastName}`}</Text>
                                    <Text note style={styles.text}>
                                        {_.truncate(message, {
                                            length: 34,
                                            separator: " ",
                                        })}
                                    </Text>
                                </Body>
                                <Right style={styles.right_end}>
                                    <Text note style={styles.time}>
                                        {time}
                                    </Text>
                                    {notification !== "" ? (
                                        <Badge
                                            style={[
                                                styles.notification,
                                                mute ? {backgroundColor: "#b4b4b4"} : {backgroundColor: "#67c074"},
                                            ]}
                                        >
                                            <Text style={styles.notifText}>{notification}</Text>
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
                    onPress={() => {
                        navigation.navigate("NewMessage", {} as any);
                    }}
                >
                    <Icon name='create' />
                </Fab>
            </Container>
        </MainPageLayout>
    );
}

export default copilot({
    animated: true,
    overlay: "svg",
    androidStatusBarVisible: true,
    labels: {previous: i17n.previous, next: i17n.next, skip: i17n.skip, finish: i17n.finish},
})(MessengerPage as any);
