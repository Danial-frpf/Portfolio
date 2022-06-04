import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
    Button,
    CircularProgress,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

const ContactForm = () => {
    //Initial State
    const InitialPostState = { name: "", email: "", message: "" };
    const InitialResponseState = { message: null, error: false };

    //Form Input
    const [post, setPost] = useState(InitialPostState);
    //Ref
    const formRef = useRef();
    //Form state
    const [submittingForm, setSubmittingForm] = useState(false);
    const [formResponse, setFormResponse] = useState(InitialResponseState);

    //EmailJs form function
    const sendEmail = (e) => {
        e.preventDefault();

        setSubmittingForm(true);
        setFormResponse(InitialResponseState);

        emailjs
            .sendForm(
                "service_zx97srf",
                "template_lng8uxf",
                formRef.current,
                "bn-Aw4XVDz-PHn0Qz"
            )
            .then(
                (result) => {
                    setFormResponse({
                        message: "Form submitted successfully",
                        error: false,
                    });
                    setSubmittingForm(false);
                },
                (error) => {
                    console.log(error.text);
                    setSubmittingForm(false);
                    setFormResponse({
                        message: "Submission failed. Please try again.",
                        error: true,
                    });
                }
            );
    };

    return (
        <form ref={formRef} onSubmit={sendEmail}>
            <Stack direction="column" spacing={2}>
                <TextField
                    type="text"
                    label="Name"
                    name="name"
                    value={post.name}
                    onChange={(e) => setPost({ ...post, name: e.target.value })}
                    required
                    fullWidth
                />
                <TextField
                    type="email"
                    label="Email"
                    name="email"
                    value={post.email}
                    onChange={(e) =>
                        setPost({ ...post, email: e.target.value })
                    }
                    required
                    fullWidth
                />
                <TextField
                    type="text"
                    label="Message"
                    name="message"
                    multiline
                    minRows={4}
                    maxRows={4}
                    value={post.message}
                    onChange={(e) =>
                        setPost({ ...post, message: e.target.value })
                    }
                    required
                    fullWidth
                />
                <Button
                    sx={{ width: "25%" }}
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={submittingForm}
                >
                    {submittingForm ? <CircularProgress /> : "Submit"}
                </Button>
                {formResponse.message ? (
                    <Typography
                        variant="body1"
                        component="p"
                        color={formResponse.error ? "error" : "darkGreen"}
                    >
                        <strong>{formResponse.message}</strong>
                    </Typography>
                ) : null}
            </Stack>
        </form>
    );
};

export default ContactForm;
