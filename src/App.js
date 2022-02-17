import { withController } from './hoc/withController'
import { GlobalProvider } from './core/GlobalController'
import GlobalThemeProvider from './core/GlobalThemeProvider'
import Router from './routes'
function App() {

  return (
    <GlobalThemeProvider>
      <Router />
    </GlobalThemeProvider>
  );
}

export default withController(GlobalProvider)(App);
