import { withController } from "../../hoc/withController"
import { useController, APISProvider } from './controller'


function APIS() {
    const controller = useController()

    return (
        <>
            <h1>{controller.test}</h1>
        </>
    )
}

export default withController(APISProvider)(APIS)