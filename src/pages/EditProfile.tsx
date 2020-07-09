import React from "react";
import {Body, Button, Container, Content, Header, Left, Text} from "native-base";
import EditAvatar from "../components/EditAvatar";
import makeStyles from "../utils/makeStyles";
import {Col, Row, Grid} from "react-native-easy-grid";
import InputBoxEditProfile from "../components/InputBoxEditProfile";
import Icons8BackIcon from "../../assets/icons/BackIcon";
import * as Localization from "expo-localization";
import Icons8ForwardIcon from "../../assets/icons/ForwardIcon";
import {t} from "i18n-js";
const useStyles = makeStyles((theme) => ({
    avatarStyle: {
        marginTop: 100,
        alignItems: "center",
    },
    inputBoxEditProfileStyle: {
        // flex: 1,
        marginTop: 40,
        marginStart: 40,
        marginEnd: 40,
    },
}));
export default function () {
    const styles = useStyles();
    return (
        <Container>
            <Header>
                <Left>
                    <Button icon>{Localization.isRTL ? <Icons8ForwardIcon /> : <Icons8BackIcon />}</Button>
                </Left>
                <Body>
                    <Text>{t("editProfile")}</Text>
                </Body>
            </Header>
            <Content>
                <Grid>
                    <Row>
                        <Col style={styles.avatarStyle}>
                            <EditAvatar
                                visibleName='Mohammad hassan Ebrahimi'
                                size={100}
                                profileImage='https://www.click2houston.com/resizer/hvJQ35-cEfZff8k5iehqeMw96rk=/1600x1066/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/arc-anglerfish-arc2-prod-gmg.s3.amazonaws.com/public/B3XUSO65RNFTZGE6H3CWXZI5CQ.jpg'
                            />
                        </Col>
                    </Row>
                    <Row>
                        <InputBoxEditProfile placeHolderMsg='helllloooo'></InputBoxEditProfile>
                    </Row>
                </Grid>
            </Content>
        </Container>
    );
}
