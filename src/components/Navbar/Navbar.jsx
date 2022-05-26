import React from "react";
import { NavButton } from "./subComponents";
import {
    AppBar,
    IconButton,
    Slide,
    Stack,
    Typography,
    useScrollTrigger,
} from "@mui/material";
import { Box } from "@mui/system";
import { Menu } from "@mui/icons-material";

const Navbar = () => {
    const trigger = useScrollTrigger();
    return (
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
                        }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography
                        variant="h4"
                        component="h4"
                        fontFamily="smooch"
                        p="0.5rem"
                        flex={1}
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
                        <NavButton size="large" component="a" href="#profile">
                            Profile
                        </NavButton>
                        <NavButton size="large" component="a" href="#aboutMe">
                            About Me
                        </NavButton>
                        <NavButton size="large" component="a" href="#skills">
                            Skills
                        </NavButton>
                        <NavButton size="large" component="a" href="#projects">
                            Projects
                        </NavButton>
                        <NavButton size="large" component="a" href="#resume">
                            Resume
                        </NavButton>
                        <NavButton size="large" component="a" href="#contactMe">
                            Contact Me
                        </NavButton>
                    </Stack>
                </Box>
            </AppBar>
        </Slide>
    );
};

export default Navbar;
