import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedPage from "./views/FeedPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <FeedPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
