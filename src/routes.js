import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/app";
import AboutPage from "./components/about/about-page";
import HomePage from "./components/home/home-page";
import CoursesPage from "./components/course/CoursesPage";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="courses" component={CoursesPage} />
    </Route>
);