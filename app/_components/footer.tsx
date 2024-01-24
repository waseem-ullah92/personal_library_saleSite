import type { FC } from "react";
import {
  Box,
  Container,
  Divider,
  Link,
  Typography,
  Grid,
} from "@mui/material";
import { RouterLink } from "@/components/router-link";
import { footerLinks, footerSocialLinks, websitePolicies } from "@constants";
import Image from "next/image";

export const Footer: FC = (props) => (
  <Box
    component="footer"
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === "dark" ? "neutral.800" : "common.white",
      borderTopColor: "divider", // TODO: color to be changed
      borderTopStyle: "solid",
      borderTopWidth: 1,
      pt: {
        md: 13,
        xs: 6,
      },
    }}
    {...props}
  >
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent={"center"}
        columnGap={{
          md: 6
        }}
        rowGap={{
          xs: 3
        }}
        sx={{
          px: {
            xs: 3,
            sm: 0,
            md: 3
          }
        }}
      >
        {footerLinks?.map((item, index) => {
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
            <Grid
              item
              container
              key={item.title}
              sm={3}
              xs={6}
              md="auto"
              sx={{
                order: {
                  md: index + 2,
                  xs: index + 1,
                },
                justifyContent: {
                  xs: 'space-between',
                  sm: 'center'
                }
              }}
            >
              <Link
                sx={{
                  textDecoration: "none",
                  color: "text.primary"
                }}
                variant="h5"
                {...linkProps}
              >
                {item.title}
              </Link>
            </Grid>
          );
        })}
      </Grid>
      {/* TODO: Divider color to be changed */}
      <Divider sx={{ mb: 6, marginTop: 8 }} />
      <Grid
        rowGap={3}
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{
          px: {
            xs: 3,
            sm: 0,
            md: 3
          }
        }}
      >
        <Grid
          md={6}
          sm={5}
          xs={12}
          gap={{
            md: 6,
            sm: 3,
            xs: 3
          }}
          container
          item
          alignItems="center"
        >
          {footerSocialLinks.map((link) => (
            <Grid
              xs="auto"
              item
              container
              key={link.title}
            >
              <Link component="a" target="_blank" href={link.path} width={30} height={30} position="relative">
                <Image src={`/images/footer-icons/${link.title}.svg`} fill loading="lazy" alt={link.title} />
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid container item xs="auto" gap={3} alignItems="center">
          <Grid item xs={12} sm="auto">
            <Link
              component="a"
              target="_blank"
              display="block"
              href="https://apps.apple.com/"
              width={200}
              height={62}
              position="relative"
            >
              <Image src="/images/footer-icons/apple.png" fill loading="lazy" alt="app store" />
            </Link>
          </Grid>
          <Grid item xs="auto">
            <Link
              component="a"
              target="_blank"
              href="https://play.google.com"
              display="block"
              width={200}
              height={62}
              position="relative"
            >
              <Image src="/images/footer-icons/android.png" fill loading="lazy" alt="app store" />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    <Box sx={{
      backgroundColor: '#EBE9FE',
      mt: 6,
    }}>
      <Container>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          py={3}
          rowGap={2}
        >
          <Grid item>
            <Typography color="text.primary" variant="h6">
              Copyrights © 2023 All Rights Reserved by <strong>Personnel Library</strong>
            </Typography>
          </Grid>
          <Grid
            item
            container
            rowGap={2}
            // xs="auto"
            sm="auto"
            justifyContent={{
              xs: 'flex-start',
              md: 'space-between'
            }}
            flexDirection={{
              xs: 'column',
              sm: 'row'
            }}
          >
            {websitePolicies?.map((item, index) => {
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
                <Link
                  key={item.title}
                  sx={{
                    textDecoration: "none",
                    color: "text.primary",
                    px: {
                      xs: 0,
                      sm: 2.5
                    },
                    borderRight: {
                      xs: 'none',
                      sm: '1px solid #475467'
                    }, // TODO: Border color to be set from theme
                    ...(index === websitePolicies.length - 1 && {
                      pr: 0,
                      borderRight: "none",
                    }),
                    ...(index === 0 && {
                      pl: {
                        xs: 0,
                        sm: 0
                      },
                    }),
                  }}
                  variant="h6"
                  {...linkProps}
                >
                  {item.title}
                </Link>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  </Box>
);
