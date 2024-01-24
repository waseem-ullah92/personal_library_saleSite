"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Container, Stack, Typography } from "@mui/material";
import CustomButton from "@/components/custom-button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    description: "",
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
        spacing={3}
      >
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
            spacing={3}
            sx={{
              padding: { xs: "10px", md: "20", lg: "30px" },
            }}
          >
            <form onSubmit={handleSubmit}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                spacing={3}
              >
                <Stack direction={{ md: "row" }} spacing={3}>
                  <Box
                    sx={{
                      width: "100%",
                      mb: {
                        xs: 3,
                        md: 0
                      }
                    }}
                  >
                    <Typography variant="h5" color="secondary.lighter">
                      Fist Name
                    </Typography>
                    <TextField
                      placeholder="Enter first name"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      margin="normal"
                      required
                      fullWidth
                      InputProps={{
                        style: {
                          borderRadius: "10px",
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Typography variant="h5" color="secondary.lighter">
                      Last Name
                    </Typography>
                    <TextField
                      placeholder="Enter last name"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      margin="normal"
                      fullWidth
                      required
                      InputProps={{
                        style: {
                          borderRadius: "10px",
                        },
                      }}
                    />
                  </Box>
                </Stack>
                <Stack direction={{ md: "row" }} spacing={3}>
                  <Box
                    sx={{
                      width: "100%",
                      mb: {
                        xs: 3,
                        md: 0
                      }
                    }}
                  >
                    <Typography variant="h5" color="secondary.lighter">
                      Email
                    </Typography>
                    <TextField
                      placeholder="Enter email"
                      name="email"
                      type="email"
                      value={formData.email}
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
                  <Box sx={{ width: "100%" }}>
                    <Typography variant="h5" color="secondary.lighter">
                      Phone Number
                    </Typography>
                    <TextField
                      placeholder="Enter Phone Number"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
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
                </Stack>
                <Box>
                  <Typography variant="h5" color="secondary.lighter">
                    Description
                  </Typography>
                  <TextField
                    placeholder="Write something..."
                    name="description"
                    multiline
                    rows={4}
                    value={formData.description}
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

export default ContactForm;
