"use client";
import React from "react";
import { HELP_CENTER_CONTENT } from "@constants";
import { Box } from "@mui/material";
import FAQSection from "@/sections/help-center";
import Header from "@/components/header";
import HelpCenterSearch from "@/components/help-center-search-comp";

const HelpCenterPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "neutral.800" : "common.white",
      }}
    >
      <Header headerContent={HELP_CENTER_CONTENT} searchComp={HelpCenterSearch} />
      <FAQSection />
    </Box>
  );
};

export default HelpCenterPage;
