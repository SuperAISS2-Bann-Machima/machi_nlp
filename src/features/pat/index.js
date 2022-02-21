import React, { useEffect, useState, useCallback, useContext } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
} from "@mui/material";
import UploadText from "../../components/common/UploadText";

function Pat() {
  return (
    <Container maxWidth="xl" sx={{ my: 10 }}>
      <Paper sx={{ m: 2, paddingBottom: 10, bgcolor: "#fff", minHeight: '100vh', maxHeight: '200vh', overflowY: 'auto' }}>
        <Typography
          variant="h5"
          sx={{
            pl: 5,
            pr: 5,
            pt: 5,
            pb: 1,
            fontFamily: "Prompt",
            fontWeight: "bolder",
            background: "linear-gradient(45deg,#222668 30%, #6390CB 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          RQA Generator
        </Typography>
        <Typography sx={{ pl: 5, pr: 5, pt: 1, pb: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend
          elit a neque elementum, adipiscing. Egestas diam sed orci risus.
          Gravida donec in netus vehicula pellentesque morbi urna senectus.
          Euismod gravida pharetra ipsum, egestas bibendum ac diam. Blandit
          posuere Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          eleifend elit a neque elementum, adipiscing. Egestas diam sed orci
          risus. Gravida donec in netus vehicula pellentesque morbi urna
          senectus. Euismod gravida pharetra ipsum, egestas bibendum ac diam.
          Blandit posuere
        </Typography>

        {/* Start Grid */}
        <Grid container spacing={5} sx={{ pl: 5, pr: 5 }}>
          {/* Start Left Grid */}
          <Grid item xs={6}>
            <Typography
              sx={{
                pl: 5,
                pr: 5,
                pt: 2,
                pb: 2,
                fontFamily: "Prompt",
                fontWeight: "bolder",
                background: "linear-gradient(45deg,#222668 30%, #6390CB 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              align="center"
            >
              Put your text file
            </Typography>
            {/* Start Upload Text  */}
            <UploadText />
            {/* End Upload Text  */}
            {/* Start Radio Button */}
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <FormControl>
                {/* <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel> */}
                <RadioGroup row name="row-radio-buttons-group">
                  <FormControlLabel
                    value="Choices"
                    control={<Radio />}
                    label="Choices"
                  />
                  <FormControlLabel
                    value="Blank"
                    control={<Radio />}
                    label="Blank"
                  />
                </RadioGroup>
              </FormControl>
              {/* End Radio Button */}
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(45deg,#222668 30%, #6390CB 90%)",
                  width: 200,
                }}
              >
                Generate
              </Button>
            </Grid>
          </Grid>
          {/* End Left Grid */}
          {/* Start Right Grid */}
          <Grid item xs={6}>
            <Typography
              sx={{
                pl: 5,
                pr: 5,
                pt: 2,
                pb: 2,
                fontFamily: "Prompt",
                fontWeight: "bolder",
                background: "linear-gradient(45deg,#222668 30%, #6390CB 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              align="center"
            >
              And get your quesion
            </Typography>
            <Box
              sx={{
                p: 2,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#F3F1F1",
              }}
            >
              {/* Question */}

            </Box>
          </Grid>
          {/* End Right Grid */}
        </Grid>
        {/* End Grid */}
      </Paper>
    </Container>
  );
}

export default Pat;
