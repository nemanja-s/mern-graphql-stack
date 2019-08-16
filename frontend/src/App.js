import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/Auth";
import BookingsPage from "./pages/Bookings";
import EventsPage from "./pages/Events";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/" to="auth" exact />
        <Route path="/auth" component={AuthPage} />
        <Route path="/bookings" component={BookingsPage} />
        <Route path="/events" component={EventsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
