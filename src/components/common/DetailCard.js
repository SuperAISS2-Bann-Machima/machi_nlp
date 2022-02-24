import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BACKGROUND } from "../../constant/colors";
export default function DetailCard({ title, desc, icon }) {
  const classes = useStyles();

  return (
    <Card
      elevation={3}
      sx={{
        maxWidth: 300,
        height: 350,
        padding: 2,
        boxSizing: "border-box",
        borderRadius: 6,
      }}
    >
      <CardContent>
        <div className={classes.container}>
          <div className={classes.header}>{icon}</div>

          <div className={classes.desc}>
            <Typography
              variant="h4"
              fontFamily="Prompt"
              marginBottom={2}
              color={BACKGROUND}
            >
              {title}
            </Typography>

            <Typography
              variant="body2"
              fontSize={14}
              fontFamily="Prompt"
              textOverflow="clip"
              overflow="hidden"
              color={BACKGROUND}
            >
              {desc}
            </Typography>
            <div />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  container: {
    height: 295,
    width: "100%",
  },
  header: {
    height: "30%",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  desc: {
    height: "62%",
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});
