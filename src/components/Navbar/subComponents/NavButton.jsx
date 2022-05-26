import styled from "@emotion/styled";
import { Button } from "@mui/material";

const NavButton = styled(Button)(({ theme }) => ({
    color: "white",
    borderRadius: "0",
    padding: "0 1rem",
    "&:hover": {
        backgroundColor: "#ec8c0ea2",
    },
}));

export default NavButton;
