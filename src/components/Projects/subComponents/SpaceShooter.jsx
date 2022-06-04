import React from "react";
import { Carousel, Tec } from "./";
import { spaceShooterImages } from "../../../media/";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

const SpaceShooter = () => {
    return (
        <Box m="5rem 0 0 0">
            <Typography
                variant="h4"
                component="h4"
                color="white"
                textAlign="center"
                gutterBottom
            >
                2) Space Shooter Game Prototype
            </Typography>

            <Carousel
                images={spaceShooterImages}
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
                <Card>
                    <CardContent>
                        <Typography variant="h4" component="h4" gutterBottom>
                            Description:
                        </Typography>
                        <Typography
                            variant="body1"
                            component="div"
                            color="textSecondary"
                        >
                            Prototype of a retro space shooter game that I
                            mostly developed from scratch, where you control a
                            ship and use it to clear the enemies on each stage.
                            <br />
                            Some of the features are given below:
                            <ul>
                                <li>4 different Stages</li>
                                <li>3 Unique bosses to fight with</li>
                                <li>Ship upgrades on clearing each stage</li>
                                <li>Story that will make you laugh</li>
                                <li>Voiced in Punjabi</li>
                            </ul>
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="h4" component="h4" gutterBottom>
                            Technologies:
                        </Typography>
                        <Typography>
                            <Tec>C++</Tec> <Tec>Sigil Lib</Tec>{" "}
                            <Tec>VS(2019)</Tec>
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
                            Download link:{" "}
                            <Typography
                                variant="body1"
                                component="a"
                                href="https://drive.google.com/file/d/1oHolhGwemSSuSs9-hm0CNw3-jg7la8gr/view?usp=sharing"
                            >
                                https://drive.google.com/file/d/1oHolhGwemSSuSs9-hm0CNw3-jg7la8gr/view?usp=sharing
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
                                href="https://github.com/Danial-frpf/Space-Shooter-Game"
                            >
                                https://github.com/Danial-frpf/Space-Shooter-Game
                            </Typography>
                        </Typography>
                    </CardContent>
                </Card>
                <Card></Card>
                <Card>
                    <CardContent>
                        <Typography variant="h4" component="h4" gutterBottom>
                            How it came to be:
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            color="textSecondary"
                        >
                            After learning pygame (a python game development
                            library) I wanted to make a game that I can enjoy
                            with my friends and just have a laugh. So I started
                            developing this game using python and pygame. But
                            soon I realized that for PC games python was not
                            that fast. So I shifted from python to C++. I used a
                            C++ library called sigil that gave me basic
                            functionality to render items on the screen. All the
                            remaining functionality like collision detection,
                            physics etc were developed by me. I really enjoyed
                            the development process and I was so into it that I
                            was working for like 14-17 hrs a day on it. After
                            almost 4-5 days the prototype was finished. My
                            friends and I really loved playing this game and
                            according to them the voice acting was the best part
                            about it.
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    );
};

export default SpaceShooter;
