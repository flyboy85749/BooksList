import React from "react";
import { BrowserRouter as Router, Switch, Route } from Router;
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import ReactDOM from 'react-dom';

ReactDOM.render(routing, document.getElementById('root'));

app.get("/")

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Books} />
          <Route exact path="*" component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
