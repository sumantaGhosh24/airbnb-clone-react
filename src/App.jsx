import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from "./components/Header";
import SearchPage from "./pages/SearchPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

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
