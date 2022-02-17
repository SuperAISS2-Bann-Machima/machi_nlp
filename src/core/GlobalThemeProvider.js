import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: 'Prompt'
    }
})

export default function GlobalThemeProvider({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}