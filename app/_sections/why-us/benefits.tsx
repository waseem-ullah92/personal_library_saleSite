import { benefits } from '@constants'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const BenefitSection = () => {
    return (
        <Box
            sx={{
                backgroundColor: "common.white",
                pb: {
                    md: 18.75
                }
            }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                    backgroundColor: '#EBE9FE', // TODO: To be changed later from theme
                    px: {
                        xs: 5,
                        sm: 10,
                        md: 15,
                        lg: 10,
                        xl: 25
                    },
                    py: {
                        md: 12.75,
                        xs: 8,
                    },
                }}
            >
                <Typography
                    mb={{
                        sm: 3,
                        xs: 1
                    }}
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
                    Benefits
                </Typography>
                <Typography
                    mb={6}
                    sx={{
                        typography: {
                            xs: 'h5',
                            sm: 'h4',
                        }
                    }}
                    color="secondary.600"
                >
                    Experience the Difference with Personnel Library
                </Typography>
                <Grid
                    container
                    spacing={3}
                >
                    {benefits.map((feature, index: number) => (
                        <Grid
                            item
                            key={feature.title}
                            lg={4}
                            sm={6}
                            xs={12}
                        >
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                                gap={3}
                                py={6}
                                px={3}
                                sx={{
                                    borderRadius: 3,
                                    minHeight: 300,
                                    borderWidth: 1,
                                    borderBlockStyle: 'solid',
                                    borderColor: "grey.A800",
                                    backgroundColor: "common.white",
                                    boxShadow: "0px -1px 1px 1px rgba(13, 34, 71, 0.10) inset, 0px 2px 5px 0px rgba(13, 34, 71, 0.08)"
                                }}
                            >
                                <Image
                                    src={`/images/why-us/benefits/benefit-${index + 1}.svg`}
                                    width={80}
                                    height={80}
                                    loading="lazy"
                                    alt=""
                                />
                                <Stack gap={2}>
                                    <Typography
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
                                        color="secondary.light"
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            typography: {
                                                xs: 'h6',
                                                sm: 'caption',
                                            },
                                        }}
                                        color="secondary.lighter"
                                    >
                                        {feature.description}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
                <Typography
                    mt={12.5}
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
                    color="secondary.main"
                >
                    Join the <Box component="span" color="primary.main">ranks of businesses</Box> experiencing these benefits!
                </Typography>
            </Box>
        </Box>
    )
}

export default BenefitSection