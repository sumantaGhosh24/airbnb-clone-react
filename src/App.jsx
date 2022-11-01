import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from "./Header";
import SearchPage from "./SearchPage";
import Home from "./Home";
import NotFound from "./NotFound";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/search" exact>
            <SearchPage />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
