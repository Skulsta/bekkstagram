import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedPage from "./views/FeedPage";
import DetailPage from "./views/DetailPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <FeedPage />
          </Route>
          <Route path="/post/:id">
            <DetailPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
