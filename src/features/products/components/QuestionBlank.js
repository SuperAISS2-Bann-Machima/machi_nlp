import { FormControlLabel, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { ERROR, WHITE } from "../../../constant/colors";
import Switch from '@mui/material/Switch'

export default function QuestionBlank({ index, question, answer, isAnswer }) {
    const [ownAnswer, setOwnAnswer] = useState(false)
    return (
        <>
            <Paper
                sx={{
                    width: '100%',
                    backgroundColor: WHITE,
                    height: 'max-content',
                    my: 1,
                    p: 5,
                    boxSizing: 'border-box',
                }}
            >
                <Typography
                    component='div'
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        fontFamily: 'Prompt',
                        wordBreak: 'break-all'
                    }}
                >
                    <Typography component='strong'>
                        {index}.&nbsp;
                    </Typography>
                    {question}
                </Typography>

                <TextField
                    sx={{
                        marginTop: 5
                    }}
                    fullWidth
                    variant="standard"
                    helperText={isAnswer || ownAnswer ? 'Answer: ' + answer : ''}
                    FormHelperTextProps={{
                        style: {
                            color: ERROR
                        }
                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}
                >
                    <FormControlLabel
                        label='answer'
                        control={
                            <Switch value={ownAnswer} />
                        }
                        onClick={(e) => setOwnAnswer(e.target.checked)}
                    />
                </div>
            </Paper>
        </>
    )
}