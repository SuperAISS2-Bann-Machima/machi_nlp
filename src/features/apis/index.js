import { withController } from "../../hoc/withController";
import { useController, APISProvider } from "./controller";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <h1>Machima NLP</h1>
      <FormControl fullWidth sx={{ s: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">
          พิมพ์ประโยคตรงนี้
        </InputLabel>
        <OutlinedInput id="outlined-adornment-amount" label="Amount" />
      </FormControl>
    </CardContent>
    <CardActions>
      <Button variant="outlined">เริ่มเลย!</Button>
    </CardActions>
  </React.Fragment>
);

const useStyles = makeStyles((theme) => ({
  featureDetail: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      margin: 5,
    },
  },
}));

function APIS() {
  const controller = useController();

  return (
    <>
      <h1>{controller.test}</h1>
      <Box>
        <Card variant="outlined">{card}</Card>
      </Box>
    </>
  );
}

export default withController(APISProvider)(APIS);
