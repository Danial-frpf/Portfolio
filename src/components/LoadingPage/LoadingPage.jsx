import { LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const LoadingPage = () => {
    return (
        <Box
            className="bg--animation--1"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            width="100%"
            height="100vh"
        >
            <Typography
                variant="h3"
                component="h3"
                fontFamily="smooch"
                textAlign="center"
                color="common.white"
            >
                DNail
            </Typography>
            <Typography
                variant="subtitle1"
                component="p"
                textAlign="center"
                color="grey.500"
            >
                An Aspiring Web Developer
            </Typography>
            <Box width="25%">
                <LinearProgress color="warning" />
            </Box>
        </Box>
    );
};

export default LoadingPage;
