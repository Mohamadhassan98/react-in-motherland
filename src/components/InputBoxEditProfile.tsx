import React from "react";
import {Card, Container, Content, Header, Input} from "native-base";
import makeStyles from "../utils/makeStyles";

const useStyles = makeStyles((theme) => ({
    textStyle: {
        backgroundColor: theme.palette.Primary,
        fontFamily: theme.font.Body,
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
