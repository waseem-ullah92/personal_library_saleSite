import { resourcesBlogs } from "@constants";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const BlogsList = () => {
  return (
    <Grid item md={12} lg={6} spacing={12}>
      {resourcesBlogs.map((item, index: number) => {
        if (index !== 0) {
          return (
            <Grid container key={index} spacing={3} sx={{ mb: 3 }}>
              <Grid item xs={12} xl={4}>
                <Box
                  position="relative"
                  sx={{
                    width: {
                      lg: 220,
                      xs: "100%",
                    },
                    height: {
                      lg: 180,
                      sm: 500,
                      xs: 350
                    },
                  }}
                >
                  <Image
                    style={{ objectFit: "fill" }}
                    src={item.img}
                    alt={item.img}
                    loading="lazy"
                    fill
                    quality={100}
                  />
                </Box>

              </Grid>
              <Grid
                item
                xs={12}
                xl={8}
                mb={{
                  xs: 5,
                  lg: 0
                }}
              >
                <Grid container sx={{ maxWidth: "90%" }}>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle2"
                      color="secondary.lighter"
                      fontWeight="fontWeightMedium"
                    >
                      {item.title}{" "}
                      <a href={item.link}>
                        <Image
                          src={`/images/resources/seeMoreArrow.svg`}
                          width={20}
                          height={20}
                          loading="lazy"
                          alt=""
                        />
                      </a>
                    </Typography>
                    <Typography variant="caption" color="secondary.600">
                      {item.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        }
      })}
    </Grid>
  );
};

export default BlogsList;
