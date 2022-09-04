import React, { useRef } from "react";
import { useOnScreen } from "../../customHooks";

import { Avatar, Box, Grid, Typography } from "@mui/material";

import { myPic } from "../../media/";

const Profile = () => {
    const profileRef = useRef();
    const isVisible = useOnScreen(profileRef);

    return (
        <Box ref={profileRef} overflow="hidden">
            <Grid container height={{ xs: "120vh", sm: "80vh" }}>
                <Box className="bg--1"></Box>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Box
                        height={{
                            xs: "60vh",
                            sm: "80vh",
                            md: "80vh",
                            lg: "80vh",
                            xl: "80vh",
                        }}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        p="0.5rem 2rem"
                    >
                        <Typography
                            variant="body1"
                            component="p"
                            color="success.main"
                            textAlign="center"
                        >
                            <strong>Asslam-u-Alaikum!</strong> My name is,
                        </Typography>
                        <Typography
                            variant="h3"
                            component="h3"
                            color="error.main"
                            textAlign="center"
                        >
                            Muhammad Danial
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            color="error.main"
                            textAlign="center"
                        >
                            I love web and game development
                        </Typography>
                        <Typography
                            className={isVisible ? "text--animation--1" : ""}
                            variant="body1"
                            component="p"
                            color="textSecondary"
                            textAlign="center"
                        >
                            I'm a <strong>full stack programmer</strong> who is
                            specialized in building react web-apps using{" "}
                            <strong>MERN Stack</strong>.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        height={{
                            xs: "60vh",
                            sm: "80vh",
                            md: "80vh",
                            lg: "80vh",
                            xl: "80vh",
                        }}
                    >
                        <Avatar
                            sx={{
                                width: {
                                    xs: 250,
                                    sm: 250,
                                    md: 300,
                                    lg: 400,
                                    xl: 700,
                                },
                                height: {
                                    xs: 250,
                                    sm: 250,
                                    md: 300,
                                    lg: 400,
                                    xl: 700,
                                },
                                bgcolor: "darkOrange",
                            }}
                            alt="Muhammad Danial Pic"
                            src={myPic}
                        ></Avatar>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Profile;
