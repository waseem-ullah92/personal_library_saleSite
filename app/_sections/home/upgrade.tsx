'use client';

import CustomButton from '@/components/custom-button';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import type { Theme } from "@mui/material/styles";
import React from 'react'

const UpgradeSection = () => {
    const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
    return (
        <Box
            component="section"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "neutral.800" : "common.white",
                pt: {
                    lg: 23.75,
                    md: 15,
                    xs: 8
                },
                pb: {
                    lg: 25,
                    md: 15,
                    xs: 8
                },
                px: {
                    xs: 3
                }
            }}
        >
            <Stack
                textAlign="center"
                alignItems="center"
                justifyContent="center"
                rowGap={6}
            >
                <Typography
                    maxWidth={951}
                    color="secondary.main"
                    sx={{
                        typography: {
                            xs: 'subtitle1',
                            sm: 'h2',
                        },
                        fontWeight: {
                            xs: 'fontWeightMedium',
                        }
                    }}
                >
                    Why Wait? Upgrade to any of the offering of Personnel Library Today!
                </Typography>
                <Typography
                    maxWidth={1200}
                    color="secondary.light"
                    sx={{
                        typography: {
                            xs: 'h5',
                            sm: 'h4',
                        }
                    }}
                >
                    Join the ranks of forward-thinking companies that are changing the
                    way they manage HR. Say goodbye to paperwork overload and hello to
                    streamlined processes, engaged employees, and data-backed decisions.
                    With Personnel Library, the future of HR management is here – and
                    it&apos;s brighter than ever.
                </Typography>
                <Box>
                    <Typography
                        mb={3}
                        maxWidth={804}
                        sx={{
                            typography: {
                                xs: 'h4',
                                sm: 'subtitle2',
                            },
                            fontWeight: {
                                xs: 'fontWeightMedium',
                                sm: 'fontWeightMedium'
                            }
                        }}
                        color="secondary.light"
                    >
                        Ready to{" "}
                        <Box component="span" color="primary.main">
                            Revolutionise Your HR?
                        </Box>{" "}
                        Let&apos;s Get Started!
                    </Typography>
                    <CustomButton
                        component="a"
                        size={mdUp ? "medium" : "small"}
                        href="#"
                    >
                        Request a demo
                    </CustomButton>
                </Box>
            </Stack>
        </Box>
    )
}

export default UpgradeSection