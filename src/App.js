import { withController } from './hoc/withController'
import { GlobalProvider, useController } from './core/GlobalController'
import { makeStyles } from '@mui/styles'
import GlobalThemeProvider from './core/GlobalThemeProvider'
import Button from './components/common/Button'

function App() {
  const global = useController()
  const classes = useStyles()

  return (
    <GlobalThemeProvider>
      <div className={classes.container}>
        <h1>{global.test}</h1>
        <Button />
      </div>
    </GlobalThemeProvider>
  );
}

const useStyles = makeStyles({
  container: {
    margin: 'auto',
  }
})

export default withController(GlobalProvider)(App);
