import { Box, Grid, Stack, Typography } from "@mui/material";
import { resourcesBlogs } from "@constants";
import Image from "next/image";
import React from "react";

const BlogDetails = () => {
  return (
    <Grid item md={12} lg={6} spacing={12}>
      <Stack direction="column" gap={2}>
        <Box
          position="relative"
          sx={{
            width: "100%",
            height: {
              lg: 400,
              sm: 500,
              xs: 350
            },
          }}
        >
          <Image
            style={{ objectFit: "fill" }}
            src={resourcesBlogs[0].img}
            alt="Blogpost"
            loading="lazy"
            fill
            quality={100}
          />
        </Box>
        <Stack direction="row" gap={2} alignItems="center">
          <Typography
            variant="subtitle2"
            color="secondary.lighter"
            fontWeight="fontWeightMedium"
          >
            {resourcesBlogs[0].title}
          </Typography>
          <Box
            component="a"
            href={resourcesBlogs[0].link}
            sx={{
              width: 24,
              height: 24,
              position: "relative",
            }}
          >
            <Image
              src={`/images/resources/seeMoreArrow.svg`}
              fill
              loading="lazy"
              alt=""
            />
          </Box>
        </Stack>
        <Stack sx={{ maxWidth: "90%" }}>
          <Typography variant="caption" color="secondary.600">
            {resourcesBlogs[0].description}
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default BlogDetails;
