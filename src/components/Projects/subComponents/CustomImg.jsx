import React, { useState } from "react";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";

const CustomImg = ({ image }) => {
    const [loaded, setLoaded] = useState(false);
    return (
        <>
            <Box
                height="inherit"
                width="inherit"
                display={loaded ? "block" : "none"}
            >
                <img
                    style={{
                        objectFit: "contain",
                        width: "inherit",
                        height: "inherit",
                    }}
                    src={image}
                    alt=""
                    onLoad={() => {
                        setLoaded(true);
                    }}
                />
            </Box>

            {loaded ? null : (
                <Box
                    height="inherit"
                    width="inherit"
                    position="absolute"
                    top="0"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <CircularProgress />
                </Box>
            )}
        </>
    );
};

export default CustomImg;
