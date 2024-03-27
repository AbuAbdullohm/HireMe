import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layouts/Header";
import Main from "./pages/Main";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Jobs from "./pages/Jobs";
import JobView from "./pages/JobView";
import Notfound from "./pages/Notfound";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import FeedView from "./pages/FeedView";
import Companies from "./pages/Companies";
import CompanyView from "./pages/CompanyView";
import PostJob from "./pages/PostJob";

// 1. lenta service - done persentage is 0%
// 2. authorization service - done persentage is 60%
// 3. vacancy_service - done persentage is 60%
// to starting our app
// after that we will develop other services

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/jobs" component={Jobs} />
          <Route path="/jobs/post" component={PostJob} />
          <Route path="/jobs/:id" component={JobView} />
          <Route exact path="/companies" component={Companies} />
          <Route path="/companies/:id" component={CompanyView} />
          <Route path="/feed/:id" component={FeedView} />
          <Route component={Notfound} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
