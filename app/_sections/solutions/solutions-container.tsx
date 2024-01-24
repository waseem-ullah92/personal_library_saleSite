'use-client';

import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { SOLUTIONS_CONTENT } from "@constants";
import Image from "next/image";
import Header from "@/components/header";

const SolutionsContainer = (props: any) => {
  const { data, images, children } = props;
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "neutral.800" : "common.white",
      }}
    >
      <Header headerContent={SOLUTIONS_CONTENT} />
      <Box pt={13} pb={18.75}>
        <Container maxWidth="xl">
          <Grid container px={4} rowGap={6} justifyContent="center" alignItems="center">
            <Grid container gap={6} item lg={7} md={12} sm={12} xs={12}>
              {data.map((item: any, i: number) => (
                <Grid gap={3} item md={12} container key={i}>
                  <Grid
                    container
                    alignItems="center"
                    gap={3}
                  >
                    <Image
                      src={item.img}
                      width={48}
                      height={48}
                      loading="lazy"
                      alt=""
                    />
                    <Typography variant="subtitle1" fontWeight="fontWeightMedium" color="secondary.main">
                      {item.heading}
                    </Typography>
                  </Grid>
                  <Typography variant="h4" color="secondary.600">
                    {item.paragraph}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <Grid justifyContent="center" item lg={5} md={12} sm={12} xs={12}>
              <Box maxWidth={672} m="auto" position="relative">
                <Box
                  component="img"
                  width="100%"
                  height="100%"
                  alt=""
                  src={images}
                />
              </Box>
            </Grid>
          </Grid>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default SolutionsContainer;
