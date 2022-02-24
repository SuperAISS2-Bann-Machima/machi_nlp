import { PRIMARY, WHITE } from '../../constant/colors'
import { createTheme, Button as Btn, ThemeProvider } from '@mui/material'

export default function Button({
    colorBtn = PRIMARY,
    textColor = WHITE,
    variant = 'contained',
    title = 'กด',
    icon = null,
    onClick = () => { },
    ...props
}) {
    // Theme
    const theme = createTheme({
        palette: {
            primary: {
                main: colorBtn,
                contrastText: textColor
            },
        },
        typography: {
            fontFamily: 'Prompt',
            allVariants: {
                textTransform: 'none'
            },
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <Btn
                fullWidth
                variant={variant}
                color='primary'
                startIcon={icon}
                onClick={onClick}
                {...props}
            >
                {title}
            </Btn>
        </ThemeProvider>
    )
} 