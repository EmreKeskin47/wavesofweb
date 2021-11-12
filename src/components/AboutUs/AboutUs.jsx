import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./style.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import CustomHeader from "../CustomHeader/CustomHeader";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WebIcon from "@mui/icons-material/Web";
import CodeIcon from "@mui/icons-material/Code";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import EvStationIcon from "@mui/icons-material/EvStation";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import PaddingElement from "../PaddingElement/PaddingElement";
// import { withStyles } from "@material-ui/core/styles";

const AboutUs = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const text = `
        We are a software company developing its on products as well as freelance products using modern technologies.
        We have three different services. Our first service is mobile app development. We use react native. We can develop simultaneously 
        for Android and IOS using react native. 
        Our other service is Web development. We use React for Web development. Since we use react native for mobile app development you can get more
        consistency between your mobile apps and websites.
        Lastly we offer api development. We use NodeJs which we also use as our backend language for web and mobile app development.
        These three technologies are based on Javascript hence we get consistency and harmony in every part of our development.
    `;

    return (
        <Grid container direction="column" id="about-us">
            <PaddingElement space={10} />
            <CustomHeader heading={"About Us"} variant={"h2"} />
            <Grid item>
                <Grid container direction="row" p={10}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        component="div"
                        item
                        sx={{ textShadow: "1px 1px #7B1EA2" }}
                        color="whitesmoke"
                        align="left"
                    >
                        {text}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direciton="row" justifyContent="center">
                    <Grid item xs={11} md={5}>
                        <Grid
                            justifyContent="center"
                            alignItems="left"
                            direction="column"
                            padding={5}
                            container
                            sx={{
                                backgroundColor: "#2a232d",
                                backgorundColor: "rgba(0, 0, 0, 0.8)",
                                padding: "20px 40px 10px 0px",
                                border: "3px solid #FEC0CA",
                                borderRadius: isMobile
                                    ? "40px 40px 0px 0px"
                                    : "40px 0px 0px 40px",
                                boxShadow: "0 0 10px #FEC0CA",
                            }}
                        >
                            <CustomHeader
                                heading={"Services"}
                                variant="h3"
                                item
                            />
                            <List item>
                                <ListItem>
                                    <ListItemAvatar>
                                        <PhoneIphoneIcon
                                            style={{
                                                color: "pink",
                                                fontSize: 50,
                                            }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="IOS and Android App Development"
                                        style={{
                                            color: "whitesmoke",
                                            fontSize: 1,
                                        }}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <WebIcon
                                            style={{
                                                color: "pink",
                                                fontSize: 50,
                                            }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Web Development"
                                        sx={{ color: "whitesmoke", size: 5 }}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <CodeIcon
                                            style={{
                                                color: "pink",
                                                fontSize: 50,
                                            }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Api Development"
                                        sx={{ color: "whitesmoke" }}
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
                    <Grid item xs={12} md={1} lg={1}>
                        <Grid
                            justifyContent="center"
                            alignItems="center"
                            direction="column"
                            container
                            sx={{
                                height: "100%",
                                transform: isMobile && "rotate(90deg)",
                            }}
                        >
                            <ElectricalServicesIcon
                                item
                                sx={{ color: "pink" }}
                                style={{ fontSize: isMobile ? "4rem" : "7rem" }}
                            />
                        </Grid>
                    </Grid>
                    {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
                    <Grid item xs={11} md={5}>
                        <Grid
                            justifyContent="center"
                            alignItems="left"
                            direction="column"
                            padding={5}
                            container
                            sx={{
                                backgroundColor: "#2a232d",
                                backgorundColor: "rgba(0, 0, 0, 0.8)",
                                padding: "20px 40px 10px 0px",
                                border: "3px solid #FEC0CA",
                                borderRadius: isMobile
                                    ? "0px 0px 40px 40px"
                                    : "0px 40px 40px 0px",
                                boxShadow: "0 0 10px #FEC0CA",
                            }}
                        >
                            <CustomHeader
                                heading={"Technologies"}
                                variant="h3"
                            />
                            <List item>
                                <ListItem>
                                    <ListItemAvatar>
                                        <EvStationIcon
                                            style={{
                                                color: "pink",
                                                fontSize: 50,
                                            }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="React Native"
                                        sx={{ color: "whitesmoke" }}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <EvStationIcon
                                            style={{
                                                color: "pink",
                                                fontSize: 50,
                                            }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="React and Angular"
                                        sx={{ color: "whitesmoke" }}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <EvStationIcon
                                            style={{
                                                color: "pink",
                                                fontSize: 50,
                                            }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="NodeJS and C#"
                                        sx={{ color: "whitesmoke" }}
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AboutUs;
