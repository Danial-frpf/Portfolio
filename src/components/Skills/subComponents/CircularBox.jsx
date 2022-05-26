import styled from "@emotion/styled";
import { Box } from "@mui/system";

const CircularBox = styled(Box)(({ theme }) => ({
    width: "6.5rem",
    height: "6.5rem",
    borderRadius: "50px",
    backgroundColor: "orange",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
        backgroundColor: "darkRed",
        cursor: "default",
    },
}));

export default CircularBox;
