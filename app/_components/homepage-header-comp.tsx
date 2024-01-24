"use client";
import { Box, useMediaQuery, Stack, Typography } from "@mui/material";
import React from "react";
import type { Theme } from "@mui/material/styles";
import CustomButton from '@/components/custom-button';

const HomePageHeaderComp = () => {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return (
    <Stack direction="column" spacing={4} textAlign={"center"}>
      <Box
        width="100%"
        component="img"
        alt="Personnel Library Dashboard"
        src="/images/homepage/HomeDash.png"
      />
      <Stack direction="column" spacing={3} textAlign={"center"} sx={{ py: { md: 8, xs: 3, } }}>
        <Typography
          sx={{
            fontSize: {
              md: "2.25rem",
              sm: "1.8rem",
              xs: "1.5rem"
            },
            fontWeight: 400,
            letterSpacing: "-0.045rem",
          }}
          color="common.white">
          Unlock the Power of Efficiency, Engagement, and Excellence!
        </Typography>

        <Stack direction="column" spacing={3}>
          <Typography
            sx={{
              typography: {
                xs: 'h5',
                sm: 'h4',
              }
            }}
            color="common.white"
          >
            Experience our magic!
          </Typography>
          <Box>
            <CustomButton
              component="a"
              size={mdUp ? "medium" : "small"}
              href="#"
              variant="secondary"
            >
              Book a free demo
            </CustomButton>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HomePageHeaderComp;
