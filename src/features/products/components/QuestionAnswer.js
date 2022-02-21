import { Paper } from "@mui/material";
import Button from "../../../components/common/Button";
import { WHITE } from "../../../constant/colors";

export default function QuestionAnswer({
    onClick = () => { }
}) {
    return (
        <Paper
            sx={{
                width: '100%',
                backgroundColor: WHITE,
                my: 1,
                p: 5,
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Button
                title="ANSWER"
                onClick={onClick}
                sx={{
                    maxWidth: 350
                }}
            />
        </Paper>
    )
}