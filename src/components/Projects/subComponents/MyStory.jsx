import React, { useRef } from "react";
import { Carousel, Tec } from "./";
import { myStoryImages } from "../../../media/";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { useOnScreen } from "../../../customHooks";

const MyStory = () => {
    const myStoryRef = useRef();
    const isVisible = useOnScreen(myStoryRef);
    return (
        <Box ref={myStoryRef}>
            <Typography
                variant="h4"
                component="h4"
                color="white"
                textAlign="center"
                gutterBottom
            >
                1) <span style={{ textDecoration: "underline" }}>My Story</span>
            </Typography>

            <Carousel
                images={myStoryImages}
                height={{
                    xs: "40vh",
                    sm: "60vh",
                    md: "80vh",
                    lg: "80vh",
                    xl: "80vh",
                }}
            />
            <Stack
                p="2rem 5rem"
                justifyContent="center"
                alignItems="center"
                direction="column"
                spacing={2}
            >
                <Card className={isVisible ? "animation--2" : ""}>
                    <CardContent>
                        <Typography variant="h4" component="h4" gutterBottom>
                            Description:
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            color="textSecondary"
                        >
                            My Story is a social media web app where people can
                            share stories of their journeys and travels across
                            the world. You can create an account to like and
                            comment on those stories. Or you can post your own
                            stories and see what people think about it.
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="h4" component="h4" gutterBottom>
                            Links:
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            color="textSecondary"
                        >
                            Site link:{" "}
                            <Typography
                                variant="body1"
                                component="a"
                                href="https://my-stories-349015.web.app"
                            >
                                https://my-stories-349015.web.app
                            </Typography>
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            color="textSecondary"
                        >
                            Git hub link:{" "}
                            <Typography
                                variant="body1"
                                component="a"
                                href="https://github.com/Danial-frpf/my-story"
                            >
                                https://github.com/Danial-frpf/my-story
                            </Typography>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={isVisible ? "animation--2" : ""}>
                    <CardContent>
                        <Typography variant="h4" component="h4" gutterBottom>
                            Technologies:
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            color="textSecondary"
                            gutterBottom
                        >
                            Front-end:
                        </Typography>
                        <Typography sx={{ cursor: "default" }}>
                            <Tec>Html</Tec> <Tec>CSS</Tec> <Tec>Javascript</Tec>{" "}
                            <Tec>React</Tec> <Tec>MUI</Tec> <Tec>Axios</Tec>{" "}
                            <Tec>Moment</Tec>
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            color="textSecondary"
                            gutterBottom
                        >
                            Back-end:
                        </Typography>
                        <Typography sx={{ cursor: "default" }}>
                            <Tec className="hover--animation--1">Express</Tec>{" "}
                            <Tec>MonogoDB</Tec> <Tec>Mongoose</Tec>{" "}
                            <Tec>NodeJS</Tec> <Tec>JsonWebToken</Tec>{" "}
                            <Tec>Nodemon</Tec> <Tec>BodyParser</Tec>{" "}
                            <Tec>BCrypt</Tec> <Tec>Dotenv</Tec>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={isVisible ? "animation--2" : ""}>
                    <CardContent>
                        <Typography variant="h4" component="h4" gutterBottom>
                            How it started:
                        </Typography>
                        <Typography
                            variant="body1"
                            component="div"
                            color="textSecondary"
                        >
                            Actually I started working on this project from a
                            tutorial on MERN but later I changed and added a lot
                            of things in this project. For example,
                            <ul>
                                <li>
                                    Added lots of animation. (card animation,
                                    text animation etc).
                                </li>
                                <li>Added show more button for text.</li>
                                <li>
                                    Made changes in back-end to make the search
                                    more user-friendly.
                                </li>
                                <li>
                                    Added some security measures in back-end.
                                </li>
                                <li>
                                    Changed the way how comments were displayed
                                    originally.
                                </li>
                                <li>
                                    Added length restriction to all input
                                    fields.
                                </li>
                                <li>
                                    Added error messages for all kinds of user
                                    errors.
                                </li>
                                <li>
                                    I changed the CSS to be more mobile
                                    responsive (before it was not consistent).
                                </li>
                                <li>
                                    Also I changed the color pallet, background
                                    and shapes while keeping the original feel
                                    of the app.
                                </li>
                                <li>
                                    Fixed a lot of bugs. Example of some big
                                    ones are,
                                    <ul>
                                        <li>
                                            Showing loading animation even
                                            though pages were completely loaded.
                                        </li>
                                        <li>
                                            Not able to go to sign-In page just
                                            after logging out.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    );
};

export default MyStory;
