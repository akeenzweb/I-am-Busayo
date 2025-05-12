import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ScrollToTop from '../src/components/ScrollToTop';
import PageWrapper from './components/PageWrapper';

import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Impacts from "./pages/Impacts/Impacts";
import Collage from "./pages/Collage/Collage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact-me" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/impacts" element={<PageWrapper><Impacts /></PageWrapper>} />
        <Route path="/collage" element={<PageWrapper><Collage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
