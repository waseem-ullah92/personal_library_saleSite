'use client';
import { homePerks } from '@constants'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import EastIcon from "@mui/icons-material/East";

const PerkSection = () => {
    return (
        <Box
            component="section"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "neutral.800" : "common.white",
                pt: {
                    lg: 31,
                    md: 10,
                    xs: 8
                },
                pb: {
                    lg: 26,
                    md: 10,
                    xs: 8
                },
                px: {
                    // lg: 5,
                    // sm: 8,
                    xs: 3
                }
            }}
        >
            <Stack mb={6} textAlign="center" alignItems="center" justifyContent="center">
                <Typography
                    sx={{
                        typography: {
                            xs: 'subtitle1',
                            sm: 'h2',
                        },
                        fontWeight: {
                            xs: 'fontWeightMedium',
                        }
                    }}
                    color="secondary.main"
                >
                    The leading people success platform
                </Typography>
                <Typography
                    maxWidth={729}
                    color="secondary.200"
                    sx={{
                        typography: {
                            xs: 'h5',
                            sm: 'h4',
                        }
                    }}
                    mt={3}
                >
                    Learn how companies are leveraging Personnel Library to drive
                    performance and engage employees to do their best work.
                </Typography>
            </Stack>

            <Grid
                container
                maxWidth={1225}
                m="auto"
                rowGap={5.25}
            >
                {homePerks.map((item, index: number) => (
                    <Grid
                        key={item.title}
                        container
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        justifyContent={{
                            sm: 'center'
                        }}
                    >
                        <Grid item xs={2}>
                            <Image
                                src={`/images/homepage-perks/perk-${index + 1}.svg`}
                                width={40}
                                height={40}
                                loading="lazy"
                                alt=""
                            />
                        </Grid>
                        <Grid item xs="auto">
                            <Stack
                                gap={0.375}
                                maxWidth={212}
                            >
                                <Grid container alignItems="center" gap={1}>
                                    <Typography fontWeight="fontWeightMedium" color="secondary.light" variant="h4">
                                        {item.title}
                                    </Typography>
                                    <EastIcon />
                                </Grid>
                                <Typography variant="h5" color="secondary.lighter">{item.description}</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default PerkSection