import React from "react";
import { NavButton } from "./subComponents";
import { useScrollProgress } from "../../customHooks";
import {
    AppBar,
    IconButton,
    LinearProgress,
    Slide,
    Stack,
    Typography,
    useScrollTrigger,
} from "@mui/material";
import { Box } from "@mui/system";
import { Menu } from "@mui/icons-material";

const Navbar = ({ setOpenDrawer }) => {
    const trigger = useScrollTrigger();
    const scrollValue = useScrollProgress();
    return (
        <>
            <div id="profile"></div>
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar position="sticky">
                    <Box bgcolor="#10022b" display="flex">
                        <IconButton
                            sx={{
                                color: "white",
                                display: {
                                    xs: "block",
                                    sm: "block",
                                    md: "none",
                                    lg: "none",
                                    xl: "none",
                                },
                                marginLeft: "20px",
                            }}
                            onClick={() => {
                                setOpenDrawer(true);
                            }}
                        >
                            <Menu />
                        </IconButton>
                        <Typography
                            variant="h4"
                            component="a"
                            fontFamily="smooch"
                            color="white"
                            p="0.5rem"
                            flex={1}
                            href="#profile"
                        >
                            DNail
                        </Typography>
                        <Stack
                            sx={{
                                display: {
                                    xs: "none",
                                    sm: "none",
                                    md: "flex",
                                    lg: "flex",
                                    xl: "flex",
                                },
                            }}
                            direction="row"
                            spacing={0}
                        >
                            <NavButton
                                size="large"
                                component="a"
                                href="#profile"
                            >
                                Profile
                            </NavButton>
                            <NavButton
                                size="large"
                                component="a"
                                href="#aboutMe"
                            >
                                About Me
                            </NavButton>
                            <NavButton
                                size="large"
                                component="a"
                                href="#skills"
                            >
                                Skills
                            </NavButton>
                            <NavButton
                                size="large"
                                component="a"
                                href="#projects"
                            >
                                Projects
                            </NavButton>
                            <NavButton
                                size="large"
                                component="a"
                                href="#resume"
                            >
                                Resume
                            </NavButton>
                            <NavButton
                                size="large"
                                component="a"
                                href="#contactMe"
                            >
                                Contact Me
                            </NavButton>
                        </Stack>
                    </Box>
                </AppBar>
            </Slide>
            <AppBar position="fixed">
                <LinearProgress variant="determinate" value={scrollValue} />
            </AppBar>
        </>
    );
};

export default Navbar;
