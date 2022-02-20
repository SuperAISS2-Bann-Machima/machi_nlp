import { withController } from "../../hoc/withController";
import { useController, APISProvider } from "./controller";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import ApiInputCard from "./components/ApiInputCard";
import ApiOutputCard from "./components/ApiOutputCard";
import ReactJson from "react-json-view";

function APIS() {
  const controller = useController();

  return (
    <Container sx={{ my: 10, fontFamily: 'Prompt' }}>
      {/* API INPUT */}
      <Box>
        <Card variant="outlined" sx={{ m: 1 }}>
          <ApiInputCard
            onChange={e => controller.setParagraph(e.target.value)}
            value={controller.paragraph}
            maxLength={300}
            onClick={controller.ProcessingHandle}
          />
        </Card>
      </Box>

      {
        !controller.wordSeg ? (<></>) : (<>
          {/* Task1 */}
          <Box>
            <Card variant="outlined" sx={{ m: 1 }}>
              <ApiOutputCard title="Task 1 Word Segment">
                <Typography sx={{ fontFamily: 'Prompt' }}>
                  {controller.wordSeg}
                </Typography >
              </ApiOutputCard>
            </Card>
          </Box>
          {/* Task1 */}

          {/* Task2 */}
          <Box>
            <Card variant="outlined" sx={{ m: 1 }}>
              <ApiOutputCard title="Task 2 POS Tagging">
                <OutputJson>
                  <ReactJson name='POS tagging' src={controller.pos} />
                </OutputJson>
              </ApiOutputCard>
            </Card>
          </Box>
          {/* Task2 */}

          {/* Task3 */}
          <Box>
            <Card variant="outlined" sx={{ m: 1 }}>
              <ApiOutputCard title="Task 3 NER">
                <OutputJson>
                  <ReactJson name='NER' src={controller.ner} />
                </OutputJson>
              </ApiOutputCard>
            </Card>
          </Box>
          {/* Task3 */}

          {/* Task4 */}
          <Box>
            <Card variant="outlined" sx={{ m: 1 }}>
              <ApiOutputCard title="Task 4 Sentence Segment">
                <Typography sx={{ fontFamily: 'Prompt' }}>
                  {controller.senSeg}
                </Typography>
              </ApiOutputCard>
            </Card>
          </Box>
          {/* Task4 */}
        </>)
      }
    </Container >
  );
}

const OutputJson = ({ children }) => (
  <div
    style={{
      width: '100%',
      minHeight: '200px',
      maxHeight: '350px',
      overflowY: 'auto'
    }}
  >
    {children}
  </div>
)

export default withController(APISProvider)(APIS);
