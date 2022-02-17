import { withController } from "../../hoc/withController";
import { TutorialProvider, useController } from "./controller";

function Tutorial() {
    const controller = useController()
    return (
        <>
            <h1>{controller.test}</h1>
        </>
    )
}

export default withController(TutorialProvider)(Tutorial)