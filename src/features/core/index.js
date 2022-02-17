import { CoreProvider, useController } from "./controller"
import { withController } from '../../hoc/withController'

function Core() {
    const controller = useController()

    return (
        <>
            <h1>{controller.test}</h1>
        </>
    )
}

export default withController(CoreProvider)(Core)