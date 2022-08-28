import React from "react";
import { ContactForm } from "./subComponents";
import { Box, Grid, Stack, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
    return (
        <Box id="contactMe" bgcolor="orange" p="2rem 2rem">
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography variant="h6" component="h6">
                        Contacts:
                    </Typography>
                    <Stack spacing={1}>
                        <Box>
                            <Grid
                                container
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                                    <EmailIcon fontSize="large" />
                                </Grid>
                                <Grid
                                    item
                                    xs={10}
                                    sm={10}
                                    md={11}
                                    lg={11}
                                    xl={11}
                                >
                                    <Typography variant="body1" component="p">
                                        danialzafarfrpf@gmail.com
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box>
                            <Grid
                                container
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                                    <PhoneAndroidIcon fontSize="large" />
                                </Grid>
                                <Grid
                                    item
                                    xs={10}
                                    sm={10}
                                    md={11}
                                    lg={11}
                                    xl={11}
                                >
                                    <Typography variant="body1" component="p">
                                        +92 314 6903449
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box style={{ overflow: "hidden" }}>
                            <Grid
                                container
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                                    <LinkedInIcon fontSize="large" />
                                </Grid>
                                <Grid
                                    item
                                    xs={10}
                                    sm={10}
                                    md={11}
                                    lg={11}
                                    xl={11}
                                >
                                    <Typography
                                        variant="body1"
                                        component="a"
                                        href="https://www.linkedin.com/in/muhammad-danial-zafar-11a12b240/"
                                    >
                                        https://www.linkedin.com/in/muhammad-danial-zafar-11a12b240/
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box style={{ overflow: "hidden" }}>
                            <Grid
                                container
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                                    <GitHubIcon fontSize="large" />
                                </Grid>
                                <Grid
                                    item
                                    xs={10}
                                    sm={10}
                                    md={11}
                                    lg={11}
                                    xl={11}
                                >
                                    <Typography
                                        variant="body1"
                                        component="a"
                                        href="https://github.com/Danial-frpf"
                                    >
                                        https://github.com/Danial-frpf
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography variant="h4" component="h4" gutterBottom>
                        Contact Me
                    </Typography>
                    <ContactForm />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
