import React from "react";
import { Card } from "@mui/material";

const ProjectCard = ({ children, ...props }) => {
    return (
        <Card
            sx={{
                width: {
                    xs: "100%",
                    sm: "100%",
                    md: "80%",
                    lg: "80%",
                    xl: "70%",
                },
            }}
            {...props}
        >
            {children}
        </Card>
    );
};

export default ProjectCard;
