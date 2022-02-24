import { Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel } from '@mui/material'
import { useEffect, useState } from 'react'
import Button from '../../../components/common/Button'

export default function ReportDialog({
    open = false,
    onClose = () => { },
    onChange = (data = []) => { },
    onSubmit = () => { },
}) {
    const [data, setData] = useState({
        'คำถามกำกวม': false,
        'คำตอบไม่ตรงคำถาม': false,
        'เท่ห์เกิน': false,
    })

    useEffect(() => {
        const trueData = Object.entries(data).filter((item, ind) => item[1] === true)
        let returnData = []

        trueData.forEach(item => {
            returnData.push(item[0])
        });

        onChange(returnData)
    }, [data])

    useEffect(() => {
        if (open)
            setData({
                'คำถามกำกวม': false,
                'คำตอบไม่ตรงคำถาม': false,
                'เท่ห์เกิน': false,
            })
    }, [open])

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle sx={{
                fontFamily: "Prompt",
                fontWeight: "bolder",
                background: "linear-gradient(45deg,#222668 80%, #6390CB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}>
                Report
            </DialogTitle>

            <DialogContent sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                py: 5,
                px: 4
            }}>
                {
                    Object.keys(data).map((item, ind) => {

                        return (
                            <FormControlLabel
                                key={ind}
                                label={item}
                                control={
                                    <Checkbox
                                        checked={data[item]}
                                        onChange={e => setData({ ...data, [item]: e.target.checked })}
                                    />
                                }
                            />
                        )
                    })
                }
            </DialogContent>

            <DialogActions>
                <Button title='cancel' variant='outlined' onClick={onClose} />
                <Button title='send' onClick={() => {
                    onSubmit()
                    onClose()
                }} />
            </DialogActions>
        </Dialog>
    )
}