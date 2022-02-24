import { Snackbar as Snack, Alert } from "@mui/material";

export default function Snackbar({
    open = true,
    handleClose = () => { },
    hideDelay = 7000,
    msg = '',
    type = 'success'
}) {
    return (
        <Snack
            autoHideDuration={hideDelay}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
            <Alert
                onClose={handleClose}
                severity={type}
                style={{ width: '100%', maxWidth: 300 }}
            >
                {msg}
            </Alert>
        </Snack>
    )
}