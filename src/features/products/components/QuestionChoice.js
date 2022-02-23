import { FormControlLabel, Paper, Radio, RadioGroup, Switch, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useState } from "react";
import { ERROR, WHITE } from "../../../constant/colors";

export default function QuestionChoice({
    index,
    question,
    answers,
    ansid,
    isAnswer
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
                        {index}.&nbsp;
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
                                className={clsx({
                                    [classes.normal]: !isAnswer,
                                    [classes.success]: (isAnswer || ownAnswer) && ind === ansid,
                                })}
                                sx={{ wordBreak: 'break-word', my: 1 }}
                            />
                        ))
                    }
                </RadioGroup>

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

const useStyles = makeStyles({
    normal: {
        color: '#000'
    },
    success: {
        color: 'green'
    },
    error: {
        color: ERROR
    }
})