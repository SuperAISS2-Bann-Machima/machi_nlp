import { Typography } from "@mui/material";

export default function NotFound() {
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography
                variant="h1"
                style={{
                    fontFamily: 'Skranji',
                    background: "linear-gradient(45deg,#222668 50%, #6390CB 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
                textAlign='center'
            >
                404
                <br />
                Not Found!
            </Typography>
        </div>
    )
}