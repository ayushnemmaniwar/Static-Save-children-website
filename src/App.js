import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Cause from "./components/Cause";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
          <Contact />
        </Route>
        <Route exact path="/about">
          <About />
          <Contact />
        </Route>
        <Route exact path="/cause">
          <Cause />
          <Contact />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
