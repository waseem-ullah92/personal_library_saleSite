"use client";

import type { FC } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import ChevronDownIcon from "@untitled-ui/icons-react/build/esm/ChevronDown";
import {
  Box,
  ButtonBase,
  Popover,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { RouterLink } from "@/components/router-link";
import { navPopoverTypes } from "@constants";

const TOP_NAV_HEIGHT: number = 64;
const TOP_NAV_SPACE: number = 16;
const OFFSET: number = 16;

interface TopNavItemProps {
  active?: boolean;
  external?: boolean;
  path?: string;
  popover?: navPopoverTypes;
  title: string;
  onClose?: () => void;
}

export const TopNavItem: FC<TopNavItemProps> = (props) => {
  const { active, external, path, popover, title, onClose } = props;
  const [open, setOpen] = useState<boolean>(true);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    handleSidebarClose();
  };

  const popoverOpen = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleSidebarClose = () => {
    onClose && onClose();
  }

  // With mega-menu

  if (!!popover?.popoverLinks?.length) {
    return (
      <>
        <Box
          component="li"
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <ButtonBase
            disableRipple
            onClick={handleClick}
            sx={{
              alignItems: "center",
              borderRadius: 1,
              display: "flex",
              justifyContent: "flex-start",
              px: {
                xs: 0,
                lg: 1,
                xl: 2
              },
              py: 1,
              textAlign: "left",
              color: "secondary.600",
              ...(active && {
                color: "primary.main",
              }),
            }}
          >
            <Box>
              <Typography component="span" variant="h5" fontWeight={active ? "fontWeightMedium" : ""}>
                {title}
              </Typography>
              {active && (
                <Box
                  component="span"
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    left: '40%',
                    bottom: 0,
                    transform: "translate(-50%, -50%)",
                    width: 8,
                    height: 8,
                    borderRadius: 50,
                    backgroundColor: 'primary.main',
                    display: {
                      xs: 'none',
                      xl: 'inline'
                    }
                  }}
                />
              )}
            </Box>
            <SvgIcon
              sx={{
                fontSize: 16,
                ml: 0.5,
              }}
            >
              <ChevronDownIcon />
            </SvgIcon>

          </ButtonBase>
          {open && (
            <Popover
              anchorEl={anchorEl}
              id={id}
              open={popoverOpen}
              onClose={handleClose}
              disableScrollLock
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Stack
                justifyContent='center'
                minWidth={279}
                gap={1}
                sx={{
                  py: 1,
                  borderRadius: 2,
                  backgroundColor: 'common.white',
                  boxShadow: '0px 0px 1px 0px rgba(76, 93, 112, 0.30), 0px 4px 8px 0px rgba(76, 93, 112, 0.30)',
                }}
              >
                {popover.popoverLinks.map((item) => {
                  const linkProps = item.path
                    ? item.external
                      ? {
                        component: "a",
                        href: item.path,
                        target: "_blank",
                      }
                      : {
                        component: RouterLink,
                        href: item.path,
                      }
                    : {};
                  return (
                    <ButtonBase
                      disableRipple
                      key={item.title}
                      onClick={handleClose}
                      sx={{
                        alignItems: "center",
                        borderRadius: 1,
                        display: "flex",
                        justifyContent: "flex-start",
                        position: 'relative',
                        px: 2,
                        py: 1,
                        textAlign: "left",
                        color: "secondary.600",
                        "&:hover": {
                          backgroundColor: "action.hover",
                          boxShadow: 'none'
                        },
                        ...(active && {
                          color: "primary.main",
                        }),
                      }}
                      {...linkProps}
                    >
                      <Typography maxWidth={231} variant="h5" color="secondary.light">{item.title}</Typography>
                    </ButtonBase>
                  )
                })}
              </Stack>
            </Popover>
          )}
        </Box>
      </>
    );
  }

  // Simple

  const linkProps = path
    ? external
      ? {
        component: "a",
        href: path,
        target: "_blank",
      }
      : {
        component: RouterLink,
        href: path,
      }
    : {};

  return (
    <Box
      component="li"
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <ButtonBase
        disableRipple
        sx={{
          alignItems: "center",
          borderRadius: 1,
          display: "flex",
          justifyContent: "flex-start",
          position: 'relative',
          px: {
            xs: 0,
            lg: 1,
            xl: 2
          },
          py: 1,
          textAlign: "left",
          color: "secondary.600",
          ...(active && {
            color: "primary.main",
          }),
        }}
        onClick={handleSidebarClose}
        {...linkProps}
      >
        <Typography component="span" variant="h5" fontWeight={active ? "fontWeightMedium" : ""}>
          {title}
        </Typography>
        {active && (
          <Box
            component="span"
            sx={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              bottom: 0,
              transform: "translate(-50%, -50%)",
              width: 8,
              height: 8,
              borderRadius: 50,
              backgroundColor: 'primary.main',
              display: {
                xs: 'none',
                xl: 'inline'
              }
            }}
          />
        )}
      </ButtonBase>

    </Box>
  );
};

TopNavItem.propTypes = {
  active: PropTypes.bool,
  external: PropTypes.bool,
  path: PropTypes.string,
  popover: PropTypes.any,
  title: PropTypes.string.isRequired,
};
