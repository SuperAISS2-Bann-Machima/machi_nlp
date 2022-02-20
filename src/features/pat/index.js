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
    <Container maxWidth="lg">
      <Paper sx={{ m: 2, bgcolor: "#fff", height: "100vh" }}>
        <Typography
          variant="h4"
          sx={{ pl: 5, pr: 5, pt: 5, pb: 1, color: "#6390CB" }}
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
        {/* <Box sx={{ textAlign: "left", pl: 2, m: 2 }}></Box> */}

        {/* <Box
          sx={{
            textAlign: "left",
            pt: 5,
            m: 5,
            lineHeight: 2,
            fontWeight: 500,
            fontSize: 24,
            color: "#6390CB",
          }}
        >
          <Grid container alignContent="flex-end"></Grid>
        </Box>
        <UploadText />
        <Buttons /> */}

        {/* Start Grid */}
        <Grid container spacing={5} sx={{ pl: 5, pr: 5 }}>
          {/* Start Left Grid */}
          <Grid item xs={6}>
            <Typography sx={{ pl: 5, pr: 5, pt: 2, pb: 2 }} align="center">
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
                    value="True/False"
                    control={<Radio />}
                    label="True/False"
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
              <Button variant="contained">Generate</Button>
            </Grid>
          </Grid>
          {/* End Left Grid */}
          {/* Start Right Grid */}
          <Grid item xs={6}>
            <Typography sx={{ pl: 5, pr: 5, pt: 2, pb: 2 }} align="center">
              And get your quesion
            </Typography>
            <Box
              sx={{
                p: 2,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#F3F1F1",
              }}
            ></Box>
          </Grid>
          {/* End Right Grid */}
        </Grid>
        {/* End Grid */}
      </Paper>
    </Container>
  );
}

export default Pat;