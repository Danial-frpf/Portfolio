import React, { useRef } from "react";
import { useOnScreen } from "../../customHooks";
import { CircularBox, CircularBoxMobile } from "./subComponents";
import { Box, Stack, Typography } from "@mui/material";

const Skills = () => {
    const main = ["Html", "CSS", "Javascript"];
    const main2 = ["MongoDB", "Express", "React", "NodeJS"];
    const secondary = ["MUI", "Tailwind", "NextJS"];
    const secondary2 = ["Redux", "Python", "TypeScript", "WordPress"];
    const secondary3 = ["Git", "Firebase", "Heroku"];

    const skills = [main, main2, secondary, secondary2, secondary3];

    const skillsRef = useRef();
    const isVisible = useOnScreen(skillsRef);

    //688 528
    return (
        <Box id="skills" ref={skillsRef} overflow="hidden">
            <Typography
                variant="h3"
                component="h3"
                p="1rem 0"
                textAlign="center"
            >
                My Skills
            </Typography>
            {skills.map((currentSet, i) => (
                <Stack
                    sx={{
                        display: {
                            xs: "none",
                            sm: "flex",
                            md: "flex",
                            lg: "flex",
                            xl: "flex",
                        },
                    }}
                    justifyContent="center"
                    alignItems="center"
                    direction="row"
                    spacing={4}
                    key={i}
                    p="0.5rem 0"
                >
                    {currentSet.map((skill, i) => (
                        <CircularBox
                            className={
                                isVisible
                                    ? "animation--1 hover--animation--1"
                                    : ""
                            }
                            key={i}
                        >
                            <Typography
                                variant="h6"
                                component="h6"
                                textAlign="center"
                                color="white"
                            >
                                {skill}
                            </Typography>
                        </CircularBox>
                    ))}
                </Stack>
            ))}

            {skills.map((currentSet, i) => (
                <Stack
                    sx={{
                        display: {
                            xs: "flex",
                            sm: "none",
                            md: "none",
                            lg: "none",
                            xl: "none",
                        },
                    }}
                    justifyContent="center"
                    alignItems="center"
                    direction="row"
                    spacing={2}
                    key={i}
                    p="0.5rem 0"
                >
                    {currentSet.map((skill, i) => (
                        <CircularBoxMobile
                            className={
                                isVisible
                                    ? "animation--1 hover--animation--1"
                                    : ""
                            }
                            key={i}
                        >
                            <Typography
                                variant="body2"
                                component="h6"
                                textAlign="center"
                                color="white"
                            >
                                <strong>{skill}</strong>
                            </Typography>
                        </CircularBoxMobile>
                    ))}
                </Stack>
            ))}
        </Box>
    );
};

export default Skills;
