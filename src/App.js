import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  const HatsPage = () => (
    <div>
      <h1>HATS Page</h1>
    </div>
  );
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route paths="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
