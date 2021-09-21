import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

import "./App.css";
import Footer from "./components/Footer.jsx";
import { dir } from "./routes/dir.routes.js";

const NeuroOrdenApp = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        {dir.map(({ path, component }) => (
          <Route key={path} path={path} component={component} exact />
        ))}
      </Switch>
      <Footer />
    </Router>
  );
};

export default NeuroOrdenApp;
