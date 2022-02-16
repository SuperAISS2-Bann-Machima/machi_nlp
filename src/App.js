import { withController } from './hoc/withController'
import { GlobalProvider, useController } from './core/GlobalController'

function App() {
  const global = useController()
  return (
    <div>
      <h1>{global.test}</h1>
    </div>
  );
}

export default withController(GlobalProvider)(App);
