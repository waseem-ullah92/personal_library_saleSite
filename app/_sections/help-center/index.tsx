import { helpCenterData } from '@constants';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import React from 'react'

const FAQSection = () => {
    return (
        <Container
            maxWidth={false}
            sx={{
                maxWidth: {
                    lg: "80%",
                    xs: "95%"
                },
                py: {
                    lg: 20,
                    sm: 10,
                    xs: 5
                },
            }}
        >
            <Stack
                mb={{
                    md: 12.5,
                    sm: 8,
                    xs: 5
                }}
                alignItems="center"
                justifyContent="center"
            >
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
                    textAlign="center"
                    color="secondary.light"
                >
                    Frequently Asked Questions
                </Typography>
            </Stack>
            <Stack mb={6} alignItems="left" justifyContent="left" gap={5}>
                {helpCenterData.map((item: any, idx: any) => {
                    return (
                        <Stack key={idx} gap={2}>
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
                                color="secondary.main"
                            >
                                Q{idx + 1}. {item.title}
                            </Typography>
                            <Typography
                                sx={{
                                    typography: {
                                        xs: 'h5',
                                        sm: 'h4',
                                    }
                                }}
                                color="secondary.600"
                            >
                                {item.description}
                                {item.anchor ? (
                                    <Box component="a" href={item?.anchor?.link} color="primary.main">
                                        {item?.anchor?.name}
                                    </Box>
                                ) : (
                                    ""
                                )}
                            </Typography>
                            <Divider />
                        </Stack>
                    );
                })}
            </Stack>
        </Container>
    )
}

export default FAQSection