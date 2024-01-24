import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Container, Stack, Typography } from "@mui/material";
import CustomButton from "@/components/custom-button";

const PricingForm = () => {
  const [formData, setFormData] = useState({
    businessEmail: "",
    comments: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log(formData);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: {
          xl: "52%",
          lg: "62%",
          sm: "85%",
          xs: "95%",
        },
        mt: "-150px",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography
          pb={2}
          variant="h4"
          fontWeight="fontWeightMedium"
          color="common.white"
          textAlign="center"
        >
          Get a free price quote today
        </Typography>

        <Container
          sx={{
            backgroundColor: "common.white",
            borderRadius: 5,
            py: 2.5,
            px: {
              sm: 2.5,
              xs: 1.5,
            },
            boxShadow: 1,
          }}
        >
          <Stack
            direction="column"
            spacing={4}
            sx={{
              padding: { xs: "10px", md: "20", lg: "30px" },
            }}
          >
            <Stack
              direction="column"
              justifyContent="start"
              alignItems="center"
              spacing={1}
            >
              <Typography
                variant="h4"
                fontWeight="fontWeightMedium"
                color="secondary.main"
                align="center"
              >
                Unleash Growth with Tailored Flexibility!
              </Typography>
              <Typography
                variant="h4"
                fontWeight="fontWeightMedium"
                color="secondary.main"
                align="center"
              >
                Discover Your Perfect Plan Today!
              </Typography>
            </Stack>

            <form onSubmit={handleSubmit}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                spacing={5}
              >
                <Box>
                  <Typography variant="h5" color="secondary.lighter">
                    Business Email
                  </Typography>
                  <TextField
                    placeholder="Enter Business Email"
                    name="businessEmail"
                    type="email"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                    InputProps={{
                      style: {
                        borderRadius: "10px",
                      },
                    }}
                  />
                </Box>
                <Box>
                  <Typography variant="h5" color="secondary.lighter">
                    Comments
                  </Typography>
                  <TextField
                    placeholder="Write something..."
                    name="comments"
                    multiline
                    rows={4}
                    value={formData.comments}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                    InputProps={{
                      style: {
                        borderRadius: "10px",
                      },
                    }}
                  />
                </Box>
                <CustomButton
                  onClick={() => {
                    alert("Btn called!");
                  }}
                >
                  Submit
                </CustomButton>
              </Stack>
            </form>
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
};

export default PricingForm;
