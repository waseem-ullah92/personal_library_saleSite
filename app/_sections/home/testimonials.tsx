"use client";

import { homeTestimonials } from "@constants";
import { West } from "@mui/icons-material";
import EastIcon from "@mui/icons-material/East";
import {
  Avatar,
  Badge,
  Box,
  Grid,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TestimonialSection = () => {
  const sliderRef = useRef<Carousel>(null);
  const SmallAvatar = styled(Avatar)(() => ({
    width: 28,
    height: 28,
  }));

  const handlePrevSlide = () => {
    if (sliderRef?.current) {
      sliderRef.current.previous(sliderRef.current.state.currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (sliderRef?.current) {
      sliderRef.current.next(sliderRef.current.state.currentSlide + 1);
    }
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "neutral.800" : "#fafaff", // TODO: To be changed later from theme
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(/images/homepage/Ellipse.png)`,
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          pt: {
            lg: 12.5,
            xs: 8,
          },
          pb: {
            lg: 8.375,
            xs: 8
          },
          px: {
            lg: 5,
            sm: 8,
            xs: 3
          }
        }}
      >
        <Grid
          container
          justifyContent="center"
          // flexWrap="nowrap"
          rowGap={10}
        >
          <Grid item xs={12} md={12} lg={4}>
            <Stack gap={3}>
              <Typography
                sx={{
                  display: {
                    xs: 'none',
                    lg: 'block'
                  }
                }}
                variant="h5"
                letterSpacing={1.6}
                color="secondary.light"
                fontWeight="fontWeightMedium">
                Testimonials
              </Typography>
              <Typography
                sx={{
                  maxWidth: {
                    lg: 397
                  },
                  textAlign: {
                    xs: 'center',
                    lg: 'left'
                  },
                  typography: {
                    xs: 'subtitle1',
                    sm: 'h2',
                    lg: 'h1'
                  },
                  fontWeight: {
                    xs: 'fontWeightMedium',
                  }
                }}
                // variant="h1"
                color="secondary.main">
                What our clients think about us?
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg="auto" xs={12}>
            <Box
              width={{
                lg: 752,
              }}
              height="100%"
            >
              <Carousel
                ref={sliderRef}
                containerClass="carousel-container"
                responsive={responsive}
                ssr={false}
                arrows={false}
                showDots={false}
                swipeable={false}
                draggable={false}
              >
                {homeTestimonials.map((testimonial) => (
                  <Stack textAlign="left" key={testimonial.author} gap={3}>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        badgeContent={
                          <SmallAvatar
                            alt="Remy Sharp"
                            src="/images/homepage-testimonials/testimonial-icon.svg"
                          />
                        }
                      >
                        <Avatar
                          sx={{ width: 80, height: 80 }}
                          alt="Travis Howard"
                          src="/images/homepage-testimonials/avatar-1.svg"
                        />
                      </Badge>
                      <Stack direction="row" gap={3}>
                        <West
                          onClick={handlePrevSlide}
                          sx={{
                            height: {
                              xs: 30,
                              sm: 48
                            },
                            width: {
                              xs: 30,
                              sm: 48
                            },
                            cursor: "pointer"
                          }}
                        />
                        <EastIcon
                          onClick={handleNextSlide}
                          sx={{
                            height: {
                              xs: 30,
                              sm: 48
                            },
                            width: {
                              xs: 30,
                              sm: 48
                            },
                            cursor: "pointer"
                          }}
                        />
                      </Stack>
                    </Grid>
                    <Typography
                      color="secondary.main"
                      fontStyle="italic"
                      sx={{
                        maxWidth: {
                          lg: 752
                        },
                        typography: {
                          xs: 'h5',
                          sm: 'h4',
                        },
                      }}
                    >
                      &lsquo;&lsquo; {testimonial.description} &rsquo;&rsquo;
                    </Typography>
                    <Typography
                      color="secondary.800"
                      sx={{
                        typography: {
                          xs: 'h5',
                          sm: 'h4',
                        },
                        fontWeight: {
                          xs: 'fontWeightMedium',
                          sm: 'fontWeightMedium'
                        }
                      }}
                    >
                      {testimonial.author}
                    </Typography>
                  </Stack>
                ))}
              </Carousel>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TestimonialSection;
