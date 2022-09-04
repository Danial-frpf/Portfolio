import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import React from "react";

const SideMenu = ({ setOpenDrawer }) => {
    const MENU = [
        "Profile",
        "About Me",
        "Skills",
        "Projects",
        "Resume",
        "Contact Me",
    ];
    const MENULINK = [
        "#profile",
        "#aboutMe",
        "#skills",
        "#projects",
        "#resume",
        "#contactMe",
    ];
    const clickHandler = () => {
        setOpenDrawer(false);
    };
    return (
        <Box bgcolor="#10022b" height="100%">
            <List>
                {MENU.map((item, i) => (
                    <div key={i}>
                        <ListItem disablePadding>
                            <ListItemButton
                                bgcolor="red"
                                component="a"
                                href={MENULINK[i]}
                                onClick={clickHandler}
                            >
                                <ListItemText
                                    primary={
                                        <Typography
                                            variant="h6"
                                            color="white"
                                            p="0rem 2rem"
                                        >
                                            <strong>{item}</strong>
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                        <Divider color="#aaaaaa" />
                    </div>
                ))}
            </List>
        </Box>
    );
};

export default SideMenu;
