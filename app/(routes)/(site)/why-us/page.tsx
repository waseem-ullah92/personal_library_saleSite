"use client";
import { Box } from "@mui/material";
import React from "react";
import { WHY_US_CONTENT } from "@constants";
import BenefitSection from "@/sections/why-us/benefits";
import FeatureSection from "@/sections/why-us/features";
import Header from "@/components/header";

const WhyUsPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "neutral.800" : "common.white",
      }}
    >
      <Header headerContent={WHY_US_CONTENT} />
      <FeatureSection />
      <BenefitSection />
    </Box>
  );
};

export default WhyUsPage;
