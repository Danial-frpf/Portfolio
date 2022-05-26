import React, { useState } from "react";
import { Box } from "@mui/system";
import { Slide } from "@mui/material";
import { ArrowButton } from "../";

const Carousel = ({ height, images }) => {
    const [active, setActive] = useState(1);
    const [slideDirection, setSlideDirection] = useState(false);

    const rightHandler = () => {
        setSlideDirection(true);
        if (active < images.length) {
            setActive((prevActive) => prevActive + 1);
        } else {
            setActive(1);
        }
    };

    const leftHandler = () => {
        setSlideDirection(false);
        if (active > 1) {
            setActive((prevActive) => prevActive - 1);
        } else {
            setActive(images.length);
        }
    };

    if (!images) {
        return null;
    }

    return (
        <Box width="100%" height={height ? height : "80vh"}>
            <ArrowButton leftHandler={leftHandler} direction="left" />
            <ArrowButton rightHandler={rightHandler} direction="right" />
            {images.map((image, i) => {
                if (i + 1 === active) {
                    return (
                        <Slide
                            direction={slideDirection ? "right" : "left"}
                            in
                            key={i}
                        >
                            <img
                                style={{
                                    objectFit: "contain",
                                    width: "inherit",
                                    height: "inherit",
                                }}
                                src={image}
                                alt=""
                            />
                        </Slide>
                    );
                } else {
                    return null;
                }
            })}
        </Box>
    );
};

export default Carousel;
