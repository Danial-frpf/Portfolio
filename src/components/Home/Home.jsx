import React from "react";
import { Navbar, Profile, AboutMe, Skills, Projects, Footer } from "../";
import { Box } from "@mui/material";

const Home = () => {
    return (
        <Box>
            <Navbar />
            <Profile />
            <AboutMe />
            <Skills />
            <Projects />
            <Footer />
        </Box>
    );
};

export default Home;
