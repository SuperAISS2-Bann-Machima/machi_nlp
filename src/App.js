import { withController } from './hoc/withController'
import { GlobalProvider, useController } from './core/GlobalController'
import { ThemeProvider } from '@mui/material'
import { theme } from './core/theme'
function App() {
  const global = useController()
  return (
    <ThemeProvider
      theme={theme}
    >
      <div>
        <h1>{global.test}</h1>
      </div>
    </ThemeProvider>
  );
}

export default withController(GlobalProvider)(App);
