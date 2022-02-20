import { CircularProgress as Progress } from "@mui/material";
import { withStyles } from "@mui/styles";
import { BACKGROUND } from "../../constant/colors";

export default function CircularProgress({ color = BACKGROUND }) {
    const Comp = withStyles({
        root: {
            color: color
        }
    })(Progress)
    return (
        <Comp />
    )
}