import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../pages/Home';
import Joke from '../pages/Joke';
import Layout from '../pages/Layout';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home}/>
          <Route exact path="/joke/:id" component={Joke}/>
        </Layout>
      </Switch>
    </Router>
  );
}
