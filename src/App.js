import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import AddImage from "./components/AddImage";
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
        <AddImage />
      </div>
    </Router>
  );
}

export default App;
