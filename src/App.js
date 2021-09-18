import React from "react";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import "./components/styles/styles.css";
import TrainingsBasic from "./components/pages/TrainingsBasic.jsx";
import TrainingAdvanced from "./components/pages/TrainingAdvanced.jsx";
import Footer from "./components/Footer.jsx";
import ForKids from "./components/pages/ForKids.jsx";
import ForYoung from "./components/pages/ForYoung.jsx";
import ForJobs from "./components/pages/ForJobs.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/1" exact component={TrainingsBasic} />
          <Route path="/2" exact component={TrainingAdvanced} />
          <Route path="/3" exact component={ForKids} />
          <Route path="/4" exact component={ForYoung} />
          <Route path="/5" exact component={ForJobs} />
          <Route path="/6" exact component={Home} />

          <Route path="/sign-up" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
