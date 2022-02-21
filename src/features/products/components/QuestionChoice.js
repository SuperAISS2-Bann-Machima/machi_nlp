import { FormControlLabel, Paper, Radio, RadioGroup, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useState } from "react";
import { ERROR, SUCCESS, WHITE } from "../../../constant/colors";

export default function QuestionChoice({
    index,
    question,
    answers,
    ansid,
    isAnswer
}) {
    const classes = useStyles()
    const [selected, setSelected] = useState(null)

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
                                    [classes.success]: isAnswer && ind === ansid,
                                    [classes.error]: isAnswer && ind !== ansid
                                })}
                            />
                        ))
                    }
                </RadioGroup>
            </Paper>
        </>
    )
}

const useStyles = makeStyles({
    normal: {
        color: '#000'
    },
    success: {
        color: SUCCESS
    },
    error: {
        color: ERROR
    }
})