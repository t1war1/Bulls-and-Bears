import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
 import Leaderboard from "../components/leaderboard";
import CompanyList from "../components/companyList";
import Company from "../components/company";
import ProfilePage from "../components/profilepage";
import News from "../components/news";
import LandingPage from "../components/Landingpage";


class CustomerRoutes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route exact path="/market" component={CompanyList} />
          <Route exact path="/company" component={Company} />
          <Route exact path="/dashboard" component={ProfilePage} />
          <Route exact path="/news" component={News} />
        </Switch>
      </Router>
    );
  }
}

export default CustomerRoutes;