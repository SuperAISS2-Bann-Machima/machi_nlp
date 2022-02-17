import { withController } from "./hoc/withController";
import { GlobalProvider } from "./core/GlobalController";
import GlobalThemeProvider from "./core/GlobalThemeProvider";
import Router from "./routes";
import NavBar from "./components/NavBar";
function App() {
  return (
    <GlobalThemeProvider>
      <NavBar />
      <Router />
    </GlobalThemeProvider>
  );
}

export default withController(GlobalProvider)(App);
