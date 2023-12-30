import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Counter from "./components/Counter";
import CounterActions from "./components/CounterActions";
import Header from "./components/header";
import Footer from "./components/footer";

import { routes } from "./routes";

const mapStateProps = (state) => ({
  dark:state.site.dark,
  user: state.auth.user
})

function App({dark, user}) {


  console.log(routes);
  return (
    <Router>
      <div className={dark ? "dark" : "light"}>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={
                route.auth && !user ? (
                  <Navigate to="/login" />
                ) : (
                  <route.component />
                )
              }
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default connect(mapStateProps)(App);
