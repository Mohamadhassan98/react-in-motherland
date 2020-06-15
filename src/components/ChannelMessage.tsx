import React from "react";
import {Image, StyleSheet} from "react-native";
import {Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from "native-base";
import {ChannelMessageProps} from "./types/ChannelMessageProps";
import CommonColor from "../../native-base-theme/variables/commonColor";

const styles = StyleSheet.create({
    channelMessageCardItem: {
        backgroundColor: CommonColor.inverseTextColor,
    },

    username: {
        color: CommonColor.brandLight,
    },
    channelMessageText: {
        color: CommonColor.textColor,
    }
});
export default function({
                            message, media,
                            profileImage, profileUsername, date,
                        }: ChannelMessageProps) {
    return (
        <Container>
            <Header/>
            <Content>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{uri: profileImage}}/>
                            <Body>
                                <Text style={styles.username}>{profileUsername}</Text>
                                <Text note>{date}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody style={styles.channelMessageCardItem}>
                        <Text style={styles.channelMessageText}>{message}</Text>
                        <Image source={{uri: media}} style={{height: 200, width: undefined, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon active name='md-heart'/>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Icon active name='md-chatbox'/>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
}
