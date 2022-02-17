import { CoreProvider, useController } from "./controller"
import { withController } from '../../hoc/withController'
import { makeStyles } from '@mui/styles'

function Core() {
    const controller = useController()
    const classes = useStyles()
    return (
        <>
            <h1 className={classes.header}>{controller.test}</h1>
        </>
    )
}

const useStyles = makeStyles({
    header: {
        'color': 'red'
    }
})

export default withController(CoreProvider)(Core)