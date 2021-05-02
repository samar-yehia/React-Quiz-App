import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Quiz from "./components/Quiz.jsx";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Switch>
            {/* To tell the <Route> tags which component to load */}
            {/* we add exact to the Route tag. This is because the other URLs also contain "/", so if we don't tell the app that it needs to look for just /, it loads the first one to match the route */}
            <Route path="/" component={LandingPage} exact />
            <Route path="/quiz" component={Quiz} />
            <Route component={Error} />
            {/* Error message loads if a user types an incorrect URL */}
          </Switch>
        </main>
      </header>
    </div>
  );
}

export default App;
