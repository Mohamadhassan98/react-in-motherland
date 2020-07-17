import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import MessengerHeader from "../components/MessengerHeader";
import _ from "lodash";
import {Badge, Body, Container, Content, Fab, Icon, Left, List, ListItem, Right, Text, Thumbnail} from "native-base";
import {chatList} from "../values/strings";
import {StackNavigator} from "../values/Routing";
import makeStyles from "../utils/makeStyles";
import {copilot} from "react-native-copilot";
import {t} from "i18n-js";
import {CopilotTypes} from "../components/types/copilotTypes";

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

function Messenger({navigation, route, start, copilotEvents}: StackNavigator<"MessengerPage"> & CopilotTypes) {
    const styles = useStyles();
    const [active, setActive] = React.useState(false);
    return (
        <MainPageLayout active={3} navigation={navigation} start={start} copilotEvents={copilotEvents}>
            <MainHeader size='collapsed'>
                <MessengerHeader />
            </MainHeader>
            {/* Rest of code here */}

            <Container>
                <Content>
                    <List>
                        {chatList.map((item) => (
                            <ListItem avatar key={item.id} onPress={() => navigation.navigate("ChatRoom")}>
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
                                            <Text style={styles.notifText}>{item.notification}</Text>
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
                    active={active}
                    direction='up'
                    containerStyle={{}}
                    style={styles.FAB}
                    position='bottomRight'
                    onPress={() => setActive(true)}
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
    labels: {previous: t("previous"), next: t("next"), skip: t("skip"), finish: t("finish")},
})(Messenger as any);
