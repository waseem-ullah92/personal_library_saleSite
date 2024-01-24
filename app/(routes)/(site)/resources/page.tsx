"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { RESOURCES_CONTENT } from "@constants";
import Header from "@/components/header";
import BlogDetails from "@/sections/resources/blog";
import BlogsList from "@/sections/resources/blogs-list";

const ResourcesPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "neutral.800" : "common.white",
      }}
    >
      <Header headerContent={RESOURCES_CONTENT} />
      <Container
        maxWidth="xl"
        sx={{
          pt: {
            lg: 22,
            sm: 8,
            xs: 5
          },
          pb: {
            lg: 18,
            sm: 8,
            xs: 5
          },
          px: {
            lg: 5,
            md: 8,
            sm: 5,
            xs: 3
          }
        }}
      >
        <Typography
          sx={{
            typography: {
              xs: 'subtitle1',
              sm: 'h2',
            },
            fontWeight: {
              xs: 'fontWeightBold',
              sm: 'fontWeightBold'
            }
          }}
          color="secondary.main"
          pb={3}
        >
          Recent Blog Posts
        </Typography>
        <Grid container columnSpacing={12} rowSpacing={8}>
          <BlogDetails />
          <BlogsList />
        </Grid>
      </Container>
    </Box>
  );
};

export default ResourcesPage;
