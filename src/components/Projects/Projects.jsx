import React from "react";
import { Carousel } from "./subComponents/";
import { myStoryImages } from "../../media/";
import { Box, Card, CardContent, Typography } from "@mui/material";

const Projects = () => {
    return (
        <Box id="projects" p="1rem 0">
            <Typography
                variant="h3"
                component="h3"
                color="primary"
                textAlign="center"
            >
                Projects
            </Typography>
            <Box>
                <Card raised>
                    <CardContent>
                        <Typography variant="h4" component="h4">
                            My Story:
                        </Typography>
                    </CardContent>
                </Card>

                <Carousel
                    images={myStoryImages}
                    height={{
                        xs: "40vh",
                        sm: "60vh",
                        md: "80vh",
                        lg: "100vh",
                        xl: "120vh",
                    }}
                />
                <Typography variant="h4" component="h4">
                    <span
                        style={{
                            backgroundColor: "orange",
                            color: "white",
                            borderRadius: "40px",
                            padding: "0 1rem",
                        }}
                    >
                        Description
                    </span>
                </Typography>
                <Typography variant="body1" component="p" color="textSecondary">
                    My Story is a social media web app where people can share
                    stories of their journeys and travels across the world. You
                    can create an account to like and comment on those stories.
                    Or you can post your own stories and see what people think
                    about it.
                </Typography>
                <Card sx={{ margin: "1rem 1rem" }} raised>
                    <CardContent>
                        <Typography variant="h4" component="h4">
                            How it started
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            color="textSecondary"
                        >
                            Actually I started working on this project from a
                            tutorial video on MERN but later I changed and added
                            a lot of things in this project. For example, Added
                            lots of animation. (card animation, text animation
                            etc). Added show more button for text. Made changes
                            in back-end to make the search more user-friendly.
                            Added some security measures in back-end. Changed
                            the way how comments were displayed originally.
                            Added length restriction to all input fields. Added
                            error messages for all kinds of user errors. I
                            changed the CSS to be more mobile responsive (before
                            it was not consistent). Also I changed the color
                            pallet, background and shapes while keeping the
                            original feel of the app. Fixed a lot of bugs.
                            Example of some big ones are, Showing loading
                            animation even though pages were completely loaded.
                            Not able to go to sign-In page just after logging
                            out and so on...
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default Projects;
