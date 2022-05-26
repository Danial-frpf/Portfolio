import React from "react";
import { Carousel } from "../";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Project = () => {
    return (
        <Box>
            <Typography variant="h4" component="h4">
                Title:
            </Typography>
            <Box></Box>
            <Carousel />
        </Box>
    );
};

export default Project;
