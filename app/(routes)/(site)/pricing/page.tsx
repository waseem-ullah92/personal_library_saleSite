"use client"
import { Box } from "@mui/material";
import React from "react";
import { PRICING_CONTENT } from "@constants";
import Header from "@/components/header";
import PricingForm from "@/sections/pricing/pricing-form";

const PricingPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "neutral.800" : "common.white",
      }}
    >
      <Header headerContent={PRICING_CONTENT} formTextStyle={true} formBoxStyle={true} />
      <Box
        sx={{
          pb: {
            md: 20,
            xs: 10
          },
        }}
      >
        <PricingForm />
      </Box>
    </Box>
  );
};

export default PricingPage;
