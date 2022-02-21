import { Paper, TextField, Typography } from "@mui/material";
import { ERROR, WHITE } from "../../../constant/colors";

export default function QuestionBlank({ index, question, answer, isAnswer }) {
    return (
        <>
            <Paper
                sx={{
                    width: '100%',
                    backgroundColor: WHITE,
                    minHeight: 200,
                    my: 1,
                    p: 5,
                    boxSizing: 'border-box'
                }}
            >
                <Typography
                    component='div'
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        fontFamily: 'Prompt'
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
                    helperText={isAnswer ? 'Answer: ' + answer : ''}
                    FormHelperTextProps={{
                        style: {
                            color: ERROR
                        }
                    }}
                />
            </Paper>
        </>
    )
}