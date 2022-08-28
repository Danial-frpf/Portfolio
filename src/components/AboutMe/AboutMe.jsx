import React, { useRef } from "react";
import { useOnScreen } from "../../customHooks";
import { Box, Typography } from "@mui/material";

const AboutMe = () => {
    const aboutRef = useRef();
    const isVisible = useOnScreen(aboutRef);
    return (
        <Box display="flex" justifyContent="center">
            <Box
                id="aboutMe"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                height={{ xs: "140vh", sm: "100vh", md: "100vh" }}
                p="0 2rem"
                overflow="hidden"
                ref={aboutRef}
                sx={{
                    width: {
                        xs: "100%",
                        sm: "80%",
                        md: "70%",
                        lg: "70%",
                        xl: "60%",
                    },
                }}
            >
                <Typography
                    p="2rem 0rem"
                    variant="h3"
                    component="h3"
                    textAlign="center"
                >
                    About Me
                </Typography>
                <Typography
                    className={isVisible ? "text--animation--1" : ""}
                    variant="subtitle1"
                    component="p"
                    color="textSecondary"
                    textAlign="center"
                >
                    I'm a full stack programmer who can do things from designing
                    to writing front-end using html + css + javascript + react
                    all the way to writing backend servers using NodeJS and
                    MongoDB.
                </Typography>
                <Typography
                    className={isVisible ? "text--animation--1" : ""}
                    variant="subtitle1"
                    component="p"
                    color="textSecondary"
                    textAlign="center"
                >
                    I primarily use <strong>javascript</strong> related
                    technologies like <strong>react</strong> and{" "}
                    <strong>nodeJS</strong> to built websites. But I'm also open
                    to learning new frameworks. I enjoy both front-end and
                    backend related work. For pure design work I use{" "}
                    <strong>figma</strong> as my go to tool. For backend I
                    usually use <strong>nodeJS</strong> with{" "}
                    <strong>express</strong> and for database I use{" "}
                    <strong>mongoDB</strong>. Although I'm also comfortable with{" "}
                    <strong>SQL</strong> based databases.
                </Typography>
            </Box>
        </Box>
    );
};

export default AboutMe;
