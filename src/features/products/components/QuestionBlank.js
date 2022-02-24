import { FormControlLabel, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { ERROR, WHITE } from "../../../constant/colors";
// import Switch from '@mui/material/Switch'
import Button from "../../../components/common/Button";
import { Visibility, VisibilityOff, Flag as ReportIcon } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

export default function QuestionBlank({ index, question, answer, isAnswer, handleSendReport = () => { } }) {
    const [ownAnswer, setOwnAnswer] = useState(false)
    const classes = useStyles()
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
                        {index}. &nbsp;
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

                <div className={classes.actionContainer}>
                    <Button
                        className={classes.actionButton}
                        icon={ownAnswer ? <Visibility /> : <VisibilityOff />}
                        title='Answer'
                        sx={{ width: 110, mx: 1 }}
                        onClick={() => setOwnAnswer(!ownAnswer)}
                    />

                    <Button
                        className={classes.actionButton}
                        icon={<ReportIcon />}
                        title='Report'
                        sx={{ width: 110, mx: 1 }}
                        variant='outlined'
                        onClick={handleSendReport}
                    />
                </div>
            </Paper>
        </>
    )
}

const useStyles = makeStyles(theme => ({
    actionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 20,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: 'center',
        }
    },
    actionButton: {
        width: 110,
        margin: 5,
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    }
}))