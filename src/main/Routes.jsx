import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

import Nav from "../components/templates/Nav";

export default (props) => (
    <Router>
        <Nav />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserCrud />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
);
