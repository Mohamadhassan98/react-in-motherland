import React from "react";
import {Container, Header, Content, Input, Card} from "native-base";
import {inputBoxEditProfileProps} from "./types/InputBoxEditProfileProps";
import makeStyles from "../utils/makeStyles";
const useStyles = makeStyles((theme) => ({
    textStyle: {
        backgroundColor: theme.palette.primary,
        fontFamily: theme.font.body.rtl.bold,
        height: "100%",
        width: "100%",
    },
}));
export default function () {
    const styles = useStyles();
    return (
        <Container>
            <Header />
            <Content>
                <Card
                    style={{
                        borderRadius: 15,
                        height: 60,
                    }}
                >
                    <Input placeholder='سلاممممم' style={styles.textStyle} />
                    {/*</CardItem>*/}
                </Card>
            </Content>
        </Container>
    );
}
