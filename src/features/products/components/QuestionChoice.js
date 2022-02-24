import { FormControlLabel, Paper, Radio, RadioGroup, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useState } from "react";
import { ERROR, WHITE } from "../../../constant/colors";
import { Flag as ReportIcon, Visibility, VisibilityOff } from "@mui/icons-material";
import Button from '../../../components/common/Button'

export default function QuestionChoice({
    index,
    question,
    answers,
    ansid,
    isAnswer,
    handleSendReport = () => { }
}) {
    const classes = useStyles()
    const [selected, setSelected] = useState(null)
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
                    boxSizing: 'border-box'
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

                <RadioGroup
                    onChange={e => setSelected(e.target.value)}
                    value={selected}
                >
                    {
                        answers.map((item, ind) => (
                            <FormControlLabel
                                key={ind}
                                label={item}
                                control={<Radio />}
                                value={ind}
                                classes={{
                                    label: clsx({
                                        [classes.normal]: !isAnswer,
                                        [classes.success]: (isAnswer || ownAnswer) && ind === ansid,
                                    })
                                }}

                                sx={{ wordBreak: 'break-word', my: 1, }}
                            />
                        ))
                    }
                </RadioGroup>

                <div className={classes.actionContainer}>
                    {/* <FormControlLabel
                        label='answer'
                        control={
                            <Switch value={ownAnswer} />
                        }
                        onClick={(e) => setOwnAnswer(e.target.checked)}
                    /> */}
                    <Button icon={ownAnswer ? <Visibility /> : <VisibilityOff />} title='Answer' sx={{ width: 110, m: 1 }} onClick={() => setOwnAnswer(!ownAnswer)} />
                    <Button icon={<ReportIcon />} title='Report' sx={{ width: 110, m: 1 }} variant='outlined' onClick={handleSendReport} />
                </div>
            </Paper>
        </>
    )
}

const useStyles = makeStyles(theme => ({
    normal: {
        color: '#000',
    },
    success: {
        color: 'green',
        fontWeight: 1000
    },
    error: {
        color: ERROR
    },
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
    }
}))