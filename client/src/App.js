import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import ReactDOM from 'react-dom';





function App() {
  return (
    <Router>
    <div>
      <Nav />
      
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Books} />
          <Route exact path="*" component={NoMatch} />
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
