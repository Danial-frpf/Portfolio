import React, { useState } from "react";
import { Navbar, Profile, AboutMe, Skills, Projects, Footer } from "../";
import { Box, SwipeableDrawer } from "@mui/material";
import { SideMenu } from "./subComponents";

const Home = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <Box>
            <SwipeableDrawer
                open={openDrawer}
                onOpen={() => {
                    setOpenDrawer(true);
                }}
                onClose={() => {
                    setOpenDrawer(false);
                }}
            >
                <SideMenu setOpenDrawer={setOpenDrawer} />
            </SwipeableDrawer>

            <Navbar setOpenDrawer={setOpenDrawer} />
            <Profile />
            <Box height={{ xs: "240vh", sm: "220vh", md: "220vh" }}>
                <ul className="bg--animation--2">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <AboutMe />
                <Skills />
            </Box>
            <Projects />
            <Footer />
        </Box>
    );
};

export default Home;
