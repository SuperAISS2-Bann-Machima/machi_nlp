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
import Container from "@mui/material/Container";

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
    <CardActions sx={{ flexDirection: "row-reverse" }}>
      <Button variant="outlined">เริ่มเลย!</Button>
    </CardActions>
  </React.Fragment>
);

const card_api = (
  <React.Fragment>
    <CardContent>
      <h2>Task1: word secmentation</h2>
      <p>สวัสดี || ครับ || ทุกคน</p>
    </CardContent>
  </React.Fragment>
);

function APIS() {
  const controller = useController();

  return (
    <Container>
      <Box>
        <Card variant="outlined" sx={{ m: 1 }}>
          {card}
        </Card>
      </Box>
      <Box>
        <Card variant="outlined" sx={{ m: 1 }}>
          {card_api}
        </Card>
      </Box>
    </Container>
  );
}

export default withController(APISProvider)(APIS);
