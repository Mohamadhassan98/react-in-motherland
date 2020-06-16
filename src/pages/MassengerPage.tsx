import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import MainHeader from "../components/MainHeader";
import {StyleSheet} from "react-native";
import MessengerHeader from "../components/MessengerHeader"
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text , View} from "native-base";

const styles = StyleSheet.create({
List:{
    flex:1,
},
    text:{
        textAlign:'left',
    },
    time:{
    alignSelf:'flex-end'
    }
});

export default function Massenger () {
    return (
        <MainPageLayout active={3}>
            <MainHeader size='collapsed'>
                <MessengerHeader/>
            </MainHeader>
            {/* Rest of code here */}
            <View style={styles.List}>

                <Container>
                    <Header />
                    <Content>
                        <List>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={{ uri: 'http://tineye.com/images/widgets/mona.jpg' }} />
                                </Left>
                                <Body>
                                    <Text style={styles.text}>Kumar Pratik</Text>
                                    <Text note style={styles.text}>Doing what you like will always keep you happy . .</Text>
                                </Body>
                                <Right style={styles.time}>
                                    <Text note >3:43 pm</Text>
                                </Right>
                            </ListItem>

                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={{ uri: 'http://tineye.com/images/widgets/mona.jpg' }} />
                                </Left>
                                <Body>
                                    <Text style={styles.text}>Kumar Pratik</Text>
                                    <Text note style={styles.text}>Doing what you like will always keep you happy . .</Text>
                                </Body>
                                <Right style={styles.time}>
                                    <Text note >3:43 pm</Text>
                                </Right>
                            </ListItem>

                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={{ uri: 'http://tineye.com/images/widgets/mona.jpg' }} />
                                </Left>
                                <Body>
                                    <Text style={styles.text}>Kumar Pratik</Text>
                                    <Text note style={styles.text}>Doing what you like will always keep you happy . .</Text>
                                </Body>
                                <Right style={styles.time}>
                                    <Text note >3:43 pm</Text>
                                </Right>
                            </ListItem>

                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={{ uri: 'http://tineye.com/images/widgets/mona.jpg' }} />
                                </Left>
                                <Body>
                                    <Text style={styles.text}>Kumar Pratik</Text>
                                    <Text note style={styles.text}>Doing what you like will always keep you happy . .</Text>
                                </Body>
                                <Right style={styles.time}>
                                    <Text note >3:43 pm</Text>
                                </Right>
                            </ListItem>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={{ uri: 'http://tineye.com/images/widgets/mona.jpg' }} />
                                </Left>
                                <Body>
                                    <Text style={styles.text}>Kumar Pratik</Text>
                                    <Text note style={styles.text}>Doing what you like will always keep you happy . .</Text>
                                </Body>
                                <Right style={styles.time}>
                                    <Text note >3:43 pm</Text>
                                </Right>
                            </ListItem>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={{ uri: 'http://tineye.com/images/widgets/mona.jpg' }} />
                                </Left>
                                <Body>
                                    <Text style={styles.text}>Kumar Pratik</Text>
                                    <Text note style={styles.text}>Doing what you like will always keep you happy . .</Text>
                                </Body>
                                <Right style={styles.time}>
                                    <Text note >3:43 pm</Text>
                                </Right>
                            </ListItem>
                        </List>
                    </Content>
                </Container>

            </View>
        </MainPageLayout>

    );
}
