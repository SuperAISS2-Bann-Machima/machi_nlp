import { withController } from '../../hoc/withController'
import { ProductsProvider, useController } from './controller'


function Products() {
    const controller = useController()
    return (
        <>
            <h1>{controller.test}</h1>
        </>
    )
}

export default withController(ProductsProvider)(Products)