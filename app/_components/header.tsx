"use client";

import { Container, Typography, Box, Stack } from "@mui/material";
export default function Header(props: any) {
  const { title, subTitle } = props.headerContent;
  const { formTextStyle, formBoxStyle } = props;

  return (
    <Box sx={{ background: "radial-gradient( #7555ef, #502fb4)" }}>
      <Box
        sx={{
          backgroundImage: `url(/images/bgImg.png)`,
          backgroundPosition: "right center",
          backgroundSize: 1200,
          backgroundRepeat: "no-repeat",
          pt: {
            md: 40,
            sm: 30,
            xs: 25
          },
          pb: {
            md: 10,
            xs: 3
          },
          ...(formTextStyle && {
            pb: {
              xs: 10,
            },
          }),
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: {
              md: "90%",
              xs: "100%"
            },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack alignItems='center' direction="column" spacing={0} textAlign={"center"}>
            <Stack
              direction="column"
              alignItems='center'
              spacing={4}
              sx={{
                pb: {
                  md: 20,
                  xs: 10
                },
                ...(formBoxStyle && {
                  pb: {
                    md: 20,
                    xs: 15,
                  },
                }),
              }}
            >
              {title ? (
                <Typography
                  sx={{
                    typography: {
                      xs: 'subtitle1',
                      sm: 'h2',
                    },
                    fontWeight: {
                      sm: 'fontWeightMedium',
                      xs: 'fontWeightMedium',
                    }
                  }}
                  color="common.white"
                >
                  {title}
                </Typography>

              ) : (
                ""
              )}
              {subTitle ? (
                <Typography
                  lineHeight={1.5}
                  maxWidth={1158}
                  sx={{
                    typography: {
                      xs: 'h5',
                      sm: 'h4',
                    }
                  }}
                  color="common.white"
                >
                  {subTitle}
                </Typography>
              ) : (
                ""
              )}
              {props.searchComp && (
                <Box>
                  <props.searchComp />
                </Box>
              )}
            </Stack>
            {props.otherComp && <props.otherComp />}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
