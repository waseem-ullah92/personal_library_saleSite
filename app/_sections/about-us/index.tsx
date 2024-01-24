"use client";

import Header from '@/components/header';
import { ABOUT_US_CONTENT, aboutUsData } from '@constants'
import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const AboutUsSection = () => {
    return (
        <Box
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "neutral.800" : "common.white",
            }}
        >
            <Header headerContent={ABOUT_US_CONTENT} />
            <Container maxWidth="lg">
                <Grid
                    direction="column"
                    rowGap={{
                        md: 18.75,
                        xs: 10
                    }}
                    container
                    maxWidth={1266}
                    m="auto"
                    sx={{
                        pt: {
                            md: 18.75,
                            xs: 8
                        },
                        pb: {
                            md: 34,
                            xs: 8
                        },
                        px: {
                            md: 0,
                            sm: 3,
                            xs: 1
                        }
                    }}
                >
                    {aboutUsData.map((obj, idx) => (
                        <Grid
                            container
                            spacing={{
                                md: 6,
                                xs: 3
                            }}
                            key={obj.id}
                        >
                            <Grid item md={6} xs={12} sx={{ order: obj.contentOrder }}>
                                <Box>
                                    <Typography
                                        sx={{
                                            typography: {
                                                xs: 'h4',
                                                md: 'subtitle1',
                                            },
                                            fontWeight: {
                                                md: 'fontWeightMedium',
                                                xs: 'fontWeightMedium',
                                            }
                                        }}
                                        color="secondary.main"
                                    >
                                        {obj.subTitle}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            typography: {
                                                xs: 'subtitle2',
                                                sm: 'subtitle1',
                                                md: 'h2',
                                            },
                                            fontWeight: {
                                                md: 'fontWeightBold',
                                                sm: 'fontWeightBold',
                                                xs: 'fontWeightBold',
                                            }
                                        }}
                                        pb={{
                                            md: 3,
                                            xs: 2
                                        }}
                                    >
                                        {obj.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            typography: {
                                                xs: 'h5',
                                                md: 'h4',
                                            }
                                        }}
                                        color="secondary.600"
                                    >
                                        {obj.desc}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid
                                item
                                md={6}
                                xs={12}
                                sx={{
                                    order: {
                                        md: obj.imgOrder
                                    }
                                }}
                            >
                                <Box
                                    maxWidth={{
                                        md: 720,
                                        xs: '100%'
                                    }}
                                    height={{
                                        sm: 500,
                                        xs: 250
                                    }}
                                    position="relative"
                                >
                                    <Image
                                        style={{ objectFit: "cover", borderRadius: 16 }}
                                        src={`/images/about-us/${idx + 1}.png`}
                                        loading="lazy"
                                        fill
                                        alt=""
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default AboutUsSection