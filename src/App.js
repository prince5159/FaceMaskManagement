import react from "react";
import './App.css';
import Header from "./Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Service from "./Service";
import ServiceHeader from "./ServiceHeader";
import More from "./More";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/service">
            <ServiceHeader />
            <Service />
          </Route>
          <Route eaxct path="/more">
            <ServiceHeader />
            <More />
          </Route>

        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
