'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import { TopNavItem } from './top-nav-item';
import { navLinks } from '@constants';
import { usePathname } from 'next/navigation';
import { Grid, Stack, useMediaQuery } from '@mui/material';
import { Logo } from './logo';
import CustomButton from './custom-button';
import { Theme } from '@mui/material/styles';

export default function Sidebar({ ...props }) {
    const pathname = usePathname();
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

    const list = () => (
        <Box
            sx={{
                py: 2,
                px: 3
            }}
            role="presentation"
        >
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Box
                        sx={{
                            display: "inline-flex",
                            mt: "0.625rem !important",
                            width: {
                                xs: '90%',
                            }
                        }}
                    >
                        <Logo />
                    </Box>
                </Grid>
                <Grid item>
                    <CloseIcon onClick={() => { props.onClose() }} />
                </Grid>
            </Grid>
            <Divider sx={{ mb: 1 }} />
            <Stack spacing={2}>
                <Box component="nav" sx={{ height: "100%" }}>
                    <Stack
                        component="ul"
                        spacing={1}
                        sx={{
                            height: "100%",
                            listStyle: "none",
                            m: 0,
                            p: 0,
                            whiteSpace: 'nowrap'
                        }}
                    >
                        <>
                            {navLinks?.map((item, index) => {
                                const checkPath = !!(item.path && pathname);
                                const exactMatch = checkPath
                                    ? pathname === item.path
                                    : false;
                                const active = item.popover?.popoverEnabled ? item.popover?.popoverLinks?.some((link) =>
                                    pathname.includes(link.path || "")
                                ) : exactMatch;

                                return (
                                    <TopNavItem
                                        active={active}
                                        external={item.external}
                                        key={item.title}
                                        path={item.path}
                                        popover={item.popover}
                                        title={item.title}
                                        onClose={props.onClose}
                                    />
                                );
                            })}
                        </>
                    </Stack>
                </Box>
                {smDown && (
                    <React.Fragment>
                        <CustomButton
                            component="a"
                            size={"medium"}
                            href="#"
                        >
                            Login
                        </CustomButton>
                        <CustomButton
                            component="a"
                            size={"medium"}
                            href="#"
                        >
                            Book a Demo
                        </CustomButton>
                    </React.Fragment>
                )}
            </Stack>
        </Box>
    );

    return (
        <Drawer
            anchor="left"
            open={props.open}
            onClose={() => { props.onClose() }}
        >
            {list()}
        </Drawer>
    );
}