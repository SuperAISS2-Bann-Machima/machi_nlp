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
          />
        </Card>
      </Box>

      {/* Task1 */}
      <Box>
        <Card variant="outlined" sx={{ m: 1 }}>
          <ApiOutputCard title="Task 1 Word Segment">
            <Typography sx={{ fontFamily: 'Prompt' }}>
              หมายเหตุ | | deepcut | | ตอน | นี้ | ถูก | ผนวก | เข้า | กับ | | โมดูล | | pythainlp | | จึง | สามารถ | เรียก | ผ่าน | | pythainlp | | ได้ | เช่น | กัน
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
              <ReactJson src={tmp_json} />
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
              <ReactJson src={tmp_json} />
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
              หมายเหตุ | | deepcut ตอนนี้ถูกผนวกเข้ากับโมดูล pythainlp | | จึงสามารถเรียกผ่าน pythainlp ได้ | | เช่นกัน
            </Typography>
          </ApiOutputCard>
        </Card>
      </Box>
      {/* Task4 */}
    </Container>
  );
}

const OutputJson = ({ children }) => (
  <div
    style={{
      width: '100%',
      height: '350px',
      overflowY: 'auto'
    }}
  >
    {children}
  </div>
)

const tmp_json = [{ 'พลเอก': 'B_DES-B_CLS-NN' }, { 'ประยุทธ์': 'B_PER-I_CLS-NN' }, { 'จันทร์โอชา': 'E_PER-I_CLS-NN' }, {
  'ชื่อเล่นตู่':
    'O-I_CLS-NN'
}, { 'เป็น': 'O-I_CLS-VV' }, { 'นักการเมือง': 'O-I_CLS-NN' }, { 'และ': 'O-I_CLS-CC' }, {
  'อดีตนายทหารบก':
    'O-I_CLS-NN'
}, { 'ชาวไทย': 'O-I_CLS-VV' }, { 'อดีตหัวหน้า': 'O-I_CLS-NN' }, { 'คณะรักษาความสงบแห่งชาติ': 'B_ORG-I_CLS-NN' },
{ 'ซึ่งก่อรัฐประหาร': 'O-I_CLS-CC' }, { 'ใน': 'O-I_CLS-PS' }, { 'ประเทศไทย': 'B_LOC-I_CLS-NN' }, { 'พ.ศ.': 'B_DTM-I_CLS-NN' },
{ '2557': 'E_DTM-E_CLS-NU' }, { 'และ': 'O-B_CLS-CC' }, { 'เป็น': 'O-I_CLS-VV' }, { 'คณะรัฐประหาร': 'O-E_CLS-NN' }, {
  'ที่':
    'O-B_CLS-CC'
}, { 'ปกครอง': 'O-I_CLS-VV' }, { 'ประเทศไทย': 'B_LOC-I_CLS-NN' }, { 'ในปี': 'B_DTM-I_CLS-NN' }, {
  '2557':
    'E_DTM-I_CLS-NU'
}, { 'ถึง': 'O-I_CLS-PS' }, { '2562': 'B_DTM-I_CLS-NU' }, { 'เป็น': 'O-I_CLS-VV' }, {
  'นายกรัฐมนตรีไทย':
    'O-I_CLS-NN'
}, { 'คนที่': 'O-I_CLS-CL' }, { '29': 'B_NUM-I_CLS-NU' }, { 'และ': 'O-I_CLS-CC' }, {
  'รัฐมนตรีว่าการ':
    'O-I_CLS-NN'
}, { 'กระทรวงกลาโหม': 'B_ORG-I_CLS-NN' }, { 'คนปัจจุบัน': 'O-E_CLS-AJ' }]

export default withController(APISProvider)(APIS);
