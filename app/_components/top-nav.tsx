"use client";

import type { FC } from "react";
import React, { useCallback, useEffect, useState } from "react";
import Menu01Icon from "@untitled-ui/icons-react/build/esm/Menu01";
import type { Theme } from "@mui/material/styles";
import {
  Box,
  Container,
  IconButton,
  Stack,
  SvgIcon,
  useMediaQuery,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Logo } from "@/components/logo";
import { RouterLink } from "@/components/router-link";
import { usePathname } from "@hooks";
import { useWindowScroll } from "@hooks";
import { paths, navLinks } from "@constants";
import { TopNavItem } from "@/components/top-nav-item";
import CustomButton from "@/components/custom-button";
import Sidebar from "@/components/sidebar";

const TOP_NAV_HEIGHT: number = 90;

interface TopNavProps {
  onMobileNavOpen?: () => void;
}

export const TopNav: FC<TopNavProps> = (props) => {
  const pathname = usePathname();
  const [elevate, setElevate] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const offset = 48;
  const delay = 100;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    handleWindowScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleWindowScroll = useCallback((): void => {
    if (window.scrollY > offset) {
      setElevate(true);
    } else {
      setElevate(false);
    }
  }, []);

  useWindowScroll({
    handler: handleWindowScroll,
    delay,
  });

  return (
    <Box
      component="header"
      sx={{
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        pt: 6,
        zIndex: (theme) => theme.zIndex.appBar,
        ...(elevate && {
          pt: 0,
          backgroundColor: 'common.white'
        }),
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '95%',
          backdropFilter: "blur(6px)",
          backgroundColor: "background.paper",
          borderRadius: 4,
          boxShadow: "none",
          transition: (theme) =>
            theme.transitions.create("box-shadow, background-color", {
              easing: theme.transitions.easing.easeInOut,
              duration: 200,
            }),
          ...(elevate && {
            maxWidth: '100%',
            borderRadius: 'unset',
            backgroundColor: (theme) =>
              alpha(theme.palette.background.paper, 0.9),
            boxShadow: 8,
          }),
        }}
      >
        <Stack direction="row" spacing={2} sx={{ height: TOP_NAV_HEIGHT }}>
          <Stack
            alignItems="center"
            direction="row"
            spacing={1}
            sx={{ flexGrow: 1 }}
          >
            <Stack
              alignItems="center"
              component={RouterLink}
              direction="row"
              display="inline-flex"
              href={paths.index}
              spacing={1}
              sx={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  mt: "0.625rem !important",
                  width: '100%'
                }}
              >
                <Logo />
              </Box>
            </Stack>
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{
              display: {
                xs: 'none',
                lg: 'flex'
              }
            }}
          >
            <Box component="nav" sx={{ height: "100%" }}>
              <Stack
                component="ul"
                alignItems="center"
                justifyContent="center"
                direction="row"
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
                      />
                    );
                  })}
                </>
              </Stack>
            </Box>
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="flex-end"
            spacing={{
              xs: 2,
              lg: 1,
              xl: 2
            }}
            sx={{ flexGrow: 1 }}
          >
            <Box
              sx={{
                display: {
                  xs: 'none',
                  sm: 'flex'
                }
              }}
            >
              <CustomButton
                component="a"
                size={"medium"}
                href="#"
                variant="text"
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
            </Box>
            <IconButton
              onClick={handleDrawerOpen}
              sx={{
                display: {
                  xs: 'block',
                  lg: 'none'
                }
              }}
            >
              <SvgIcon fontSize="small">
                <Menu01Icon />
              </SvgIcon>
            </IconButton>
            <Sidebar
              open={open}
              onClose={handleDrawerClose}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
