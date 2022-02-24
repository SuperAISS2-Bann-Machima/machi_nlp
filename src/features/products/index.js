import {
  Box,
  Container,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  LinearProgress,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import UploadText from "../../components/common/UploadText";
import { INFO, WHITE } from "../../constant/colors";
import { withController } from "../../hoc/withController";
import { ProductsProvider, useController } from "./controller";
import Button from "../../components/common/Button";
import QuestionBlank from "./components/QuestionBlank";
import QuestionAnswer from "./components/QuestionAnswer";
import QuestionChoice from "./components/QuestionChoice";
import { example1 } from '../../data/products'

function Products() {
  const controller = useController();
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl" sx={{ my: 10 }}>
        <Box className={classes.container}>
          {/* Header */}
          <div className={classes.header}>
            <Typography className={classes.headerTitle} variant="h5">
              Question Generator
            </Typography>

            <Typography className={classes.headerParagraph} variant="body1">
              สร้างแบบทดสอบของคุณเองง่ายๆ ด้วย AI เพียงไม่กี่คลิ๊ก!
              <ol>
                <li>เตรียมไฟล์บทความของคุณ (นามสกุลไฟล์ .txt)</li>
                <li>
                  กด Choose File
                  เพื่อเลือกไฟล์ของคุณหรือนำไฟล์ของคุณมาไปวางตรงนั้นได้เลย
                </li>
                <li>เลือกประเภทของแบบทดสอบที่คุณอยากได้</li>
                <li>กด Generate เพื่อสร้างแบบทดสอบ</li>
                <li>ทดลองทำแบบทดสอบของคุณ!</li>
              </ol>
            </Typography>
          </div>
          {/* Header */}

          {/* Content */}
          <Grid container className={classes.contentGrid}>
            {/* Upload */}
            <Grid item xs={12} lg={6} className={classes.contentGridItem}>
              <Typography
                variant="h6"
                className={clsx([classes.headerTitle, classes.contentHeader])}
              >
                Put your text file
              </Typography>

              <div
                className={classes.contentExampleContainer}
              >
                <Button title='Example 1' className={classes.contentExampleButton} sx={{ width: 200, mx: 2 }} onClick={() => controller.setFile(example1)} />
                <Button title='Example 2' className={classes.contentExampleButton} sx={{ width: 200, mx: 2 }} onClick={() => controller.setFile(example1)} />
                <Button title='Example 3' className={classes.contentExampleButton} sx={{ width: 200, mx: 2 }} onClick={() => controller.setFile(example1)} />
              </div>

              <UploadText file={controller.file} onChange={(result) => {
                controller.setFile(result)
              }} />

              <RadioGroup
                sx={{ my: 1 }}
                row
                value={controller.anstype}
                onChange={(e) => {
                  controller.setAnstype(e.target.value);
                }}
              >
                <FormControlLabel
                  label="Choices"
                  control={<Radio />}
                  value="MUL"
                />
                <FormControlLabel
                  label="String"
                  control={<Radio />}
                  value="STR"
                />
                <FormControlLabel
                  label="Blank"
                  control={<Radio />}
                  value="BLK"
                />
              </RadioGroup>

              <Button
                title="Generate"
                sx={{
                  background: "linear-gradient(45deg,#222668 0%, #6390CB 80%)",
                  maxWidth: 250,
                }}
                onClick={controller.QuestionGenerationHandle}
              />
            </Grid>

            {/* Question */}
            <Grid item xs={12} lg={6} className={classes.contentGridItem}>
              <Typography
                variant="h6"
                className={clsx([classes.headerTitle, classes.contentHeader])}
              >
                And get your question
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  minHeight: "80vh",
                  maxHeight: "150vh",
                  bgcolor: INFO,
                  boxShadow: "inset 0px 1px 10px 0px #5e5e5e",
                  borderRadius: 3,
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  p: 2,
                  overflowY: "auto",
                }}
              >
                {
                  controller.qgLoading && (<LinearProgress sx={{ width: '100%', height: 5, borderRadius: 25 }} />)
                }

                {controller.questions.map((item, ind) => {
                  // Return Question Type MUL
                  if (item.anstype === "MUL")
                    return (
                      <QuestionChoice
                        key={ind}
                        index={ind + 1}
                        question={item["question"]}
                        answers={item["answer"]}
                        ansid={item["ansid"]}
                        isAnswer={controller.isAnswer}
                        handleSendReport={() => controller.sendReportHandle(ind + 1)}
                      />
                    );
                  // Return Question Type BLK
                  return (
                    <QuestionBlank
                      key={ind}
                      index={ind + 1}
                      question={item["question"]}
                      answer={item["answer"][0]}
                      isAnswer={controller.isAnswer}
                      handleSendReport={() => controller.sendReportHandle(ind + 1)}
                    />
                  );
                })}

                {controller.questions.length > 0 && (
                  <QuestionAnswer
                    onClick={() => controller.setIsAnswer(true)}
                  />
                )}
              </Box>
            </Grid>
          </Grid>
          {/* Content */}
        </Box>
      </Container>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: WHITE,
    borderRadius: 5,
    padding: 30,
    minHeight: "100vh",
    [theme.breakpoints.up("sm")]: {
      maxHeight: "200vh",
    },
  },
  headerTitle: {
    fontFamily: "Prompt",
    fontWeight: "bolder",
    background: "linear-gradient(45deg,#222668 0%, #6390CB 40%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  headerParagraph: {
    fontFamily: "Prompt",
    textIndent: 50,
    marginTop: 20,
  },
  contentGrid: {
    marginTop: 40,
  },
  contentGridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    boxSizing: "border-box",
    padding: 10,
  },
  contentHeader: {
    marginTop: 10,
    marginBottom: 10,
  },
  contentExampleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  contentExampleButton: {
    [theme.breakpoints.down('md')]: {
      marginTop: 10,
      marginBottom: 10
    }
  }
}));

export default withController(ProductsProvider)(Products);
