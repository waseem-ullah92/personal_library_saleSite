'use client';

import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const CareerSection = () => {
    return (
        <Box
            component="section"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "neutral.800" : "common.white",
                pt: {
                    md: 10,
                    xs: 8
                },
                pb: {
                    md: 10,
                    xs: 8
                },
                px: {
                    sm: 3,
                    xs: 0
                }
            }}
        >
            <Container maxWidth="lg">
                <Stack mb={6} textAlign="center" alignItems="center" justifyContent="center">
                    <Typography
                        variant="h5"
                        letterSpacing={1.6}
                        color="secondary.light"
                        fontWeight="fontWeightMedium"
                        textTransform="uppercase"
                    >
                        Come join us
                    </Typography>
                    <Typography
                        mt={3}
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
                        Career Openings
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
                        We are always looking for creative, talented self-starters to join the Personal Library family. Check out our open roles below and fill out an application.
                    </Typography>

                </Stack>
                <Box
                    sx={{
                        borderRadius: {
                            sm: 5,
                            xs: 'unset'
                        },
                        px: {
                            sm: 7,
                            xs: 0
                        },
                        pt: 1,
                        pb: 4,
                        border: '1px solid #EDEDED',
                        backgroundColor: '#FFF',
                        boxShadow: '0px -1px 1px 1px rgba(13, 34, 71, 0.10) inset, 0px 2px 5px 0px rgba(13, 34, 71, 0.08)',
                        minHeight: {
                            lg: 950,
                            xs: 1150,
                        },
                    }}
                >
                    <iframe
                        src='https://jobs.orcaloholding.co.uk/jobs/companies/E0vR6qnY83Vk02AZwPaG1L5Odb'
                        width='100%'
                        height='100%'
                        no-border
                        title='Jobs Widget'
                        style={{ border: 'none', minHeight: "inherit" }}
                    />
                </Box>
            </Container>
        </Box>
    )
}

export default CareerSection