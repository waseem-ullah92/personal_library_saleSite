"use client";
import React from "react";
import { CONTACT_US_CONTENT } from "@constants";
import { Box } from "@mui/material";
import ContactForm from "@/sections/contact-us/contact-us-form";
import Header from "@/components/header";

const ContactUsPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "neutral.800" : "common.white",
      }}
    >
      <Header headerContent={CONTACT_US_CONTENT} formTextStyle={true} formBoxStyle={true} />
      <Box
        sx={{
          pb: {
            md: 20,
            xs: 10
          },
        }}
      >
        <ContactForm />
      </Box>
    </Box>
  );
};

export default ContactUsPage;
