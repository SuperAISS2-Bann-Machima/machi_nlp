import { CardContent, Typography } from '@mui/material'
import { PRIMARY } from '../../../constant/colors'

export default function ProductOutputCard({
    title = 'title',
    children
}) {
    return (
        <>
            <CardContent
                sx={{
                    minHeight: 150,
                    maxHeight: 400,
                    padding: 4,
                    overflowY: 'auto'
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontFamily: 'Prompt',
                        color: PRIMARY,
                        marginBottom: 2
                    }}
                >{title}</Typography>
                {children}
            </CardContent>
        </>
    )
}