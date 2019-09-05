import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Foo from "./components/Foo";
import Bar from "./components/Bar";

function App() {
  return (
    <div className="App">
      <div className="">
        This is an App running in production on an Express Server
      </div>
      <Router basename="/relativepath">
        <Route exact path="/foo" component={Foo}></Route>
        <Route exact path="/bar" component={Bar}></Route>
      </Router>
    </div>
  );
}

export default App;
