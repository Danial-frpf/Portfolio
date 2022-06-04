import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { MyStory, SpaceShooter } from "./subComponents";

const Projects = () => {
    return (
        <Box id="projects" m="5rem 0 0 0" bgcolor="#222222">
            <Typography
                variant="h3"
                component="h3"
                textAlign="center"
                color="primary"
                bgcolor="#111111"
                p="2rem 0"
                gutterBottom
            >
                Projects
            </Typography>
            <MyStory />
            <SpaceShooter />
            <Divider />
        </Box>
    );
};

export default Projects;
