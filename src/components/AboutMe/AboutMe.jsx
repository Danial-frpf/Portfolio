import React, { useRef } from "react";
import { useOnScreen } from "../../customHooks";
import { Box, Typography } from "@mui/material";

const AboutMe = () => {
    const aboutRef = useRef();
    const isVisible = useOnScreen(aboutRef);
    return (
        <Box
            id="aboutMe"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height={{ xs: "140vh", sm: "100vh", md: "80vh" }}
            p="0 2rem"
            overflow="hidden"
            ref={aboutRef}
        >
            <Typography variant="h3" component="h3" textAlign="center">
                About Me
            </Typography>
            <Typography
                className={isVisible ? "text--animation--1" : ""}
                variant="subtitle1"
                component="p"
                color="textSecondary"
                textAlign="center"
            >
                I'm a full stack programmer who can do things from designing to
                writing front-end using html + css + javascript + react all the
                way to writing backend servers using NodeJs and MongoDb.
            </Typography>
            <Typography
                className={isVisible ? "text--animation--1" : ""}
                variant="subtitle1"
                component="p"
                color="textSecondary"
                textAlign="center"
            >
                I got into programming in middle school when I hacked some files
                of a game using internet. Later in High School I learned html +
                css and designed my first static website.Than I went on to learn
                C++, Python and Java and using that knowledge I designed a
                prototype for a space game. Now I'm specialized in MERN stack
                and want to build highly interactive websites and make them
                alive using animations and subtle things.
            </Typography>
        </Box>
    );
};

export default AboutMe;
