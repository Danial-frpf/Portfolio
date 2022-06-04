import React, { useState } from "react";
import { Navbar, Profile, AboutMe, Skills, Projects, Footer } from "../";
import { Box, SwipeableDrawer } from "@mui/material";

const Home = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <Box>
            <SwipeableDrawer
                open={openDrawer}
                onOpen={() => {
                    console.log("open");
                    setOpenDrawer(true);
                }}
                onClose={() => {
                    console.log("rans");
                    setOpenDrawer(false);
                }}
            >
                Things
            </SwipeableDrawer>
            <Navbar setOpenDrawer={setOpenDrawer} />
            <Profile />
            <AboutMe />
            <Skills />
            <Projects />
            <Footer />
        </Box>
    );
};

export default Home;
