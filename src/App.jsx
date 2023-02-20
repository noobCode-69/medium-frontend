import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed/Feed";
import Home from "./components/Home/Home";
import Article from "./components/Article/Article";
import Profile from "./components/Profile/Profile";
import Write from "./components/Write/Write";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import EditProfile from "./components/EditProfile/EditProfile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed/:feedId" element={<Feed />} />
        <Route path="/article/:articleId" element={<Article />} />
        <Route path="/profile/:profileId" element={<Profile />} />
        <Route path="/write" element={<Write />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
