import React from "react";
import { ArrowBackIosNewTwoTone, ArrowForwardIos } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";

const ArrowButton = ({ direction, rightHandler, leftHandler }) => {
    return (
        <Box
            float={direction}
            right={direction === "right" ? "0" : ""}
            position="absolute"
            width={{ xs: "20%", sm: "20%", md: "15%", lg: "10%", xl: "10%" }}
            height="inherit"
            zIndex={1}
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="inherit"
            >
                <IconButton
                    sx={{
                        backgroundColor: "rgba(100,100,100,0.5)",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "orange",
                        },
                    }}
                    size="large"
                    onClick={direction === "left" ? leftHandler : rightHandler}
                >
                    {direction === "left" ? (
                        <ArrowBackIosNewTwoTone />
                    ) : (
                        <ArrowForwardIos />
                    )}
                </IconButton>
            </Box>
        </Box>
    );
};

export default ArrowButton;
