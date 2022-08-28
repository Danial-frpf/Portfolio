import styled from "@emotion/styled";

const Tec = styled("span")(({ theme }) => ({
    padding: "0rem 1rem",
    margin: "0rem 0.2rem",
    backgroundColor: "#222222",
    color: "white",
    borderRadius: "25px",
    cursor: "default",
    "&:hover": {
        backgroundColor: "orange",
    },
}));

export default Tec;
