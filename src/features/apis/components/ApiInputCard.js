import { CardContent, Typography, FormControl, TextField, CardActions } from "@mui/material"
import Button from "../../../components/common/Button"
import { makeStyles } from "@mui/styles"

export default function ProductInputCard({
    onChange = (e) => { },
    value = '',
    maxLength = 300,
    onClick = () => { }
}) {
    const classes = useStyles()
    return (
        <>
            <CardContent sx={{ padding: 4 }}>
                <Typography variant="h5" className={classes.header}>
                    Machima NLP
                </Typography>
                <FormControl fullWidth sx={{ s: 1, marginTop: 5 }}>
                    <TextField
                        label="พิมพ์ประโยคตรงนี้"
                        variant='standard'
                        onChange={e => {
                            if (e.target.value.length <= maxLength)
                                onChange(e)
                        }}
                        value={value}
                        helperText={`${value.length}/${maxLength}`}
                    />
                </FormControl>
            </CardContent>
            <CardActions sx={{ flexDirection: "row-reverse", px: 4, paddingBottom: 4 }}>
                <Button
                    title="เริ่มเลย!"
                    sx={{ background: 'linear-gradient(45deg, #222668 30%, #6390CB 90%)', width: 100 }}
                    onClick={onClick}
                />
            </CardActions>
        </ >
    )
}

const useStyles = makeStyles({
    header: {
        fontFamily: 'Prompt',
        fontWeight: 'bolder',
        background: "-webkit-linear-gradient(45deg, rgba(34,38,104,1) 0%, rgba(34,38,104,1) 0%, rgba(99,144,203,1) 20%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    },
})