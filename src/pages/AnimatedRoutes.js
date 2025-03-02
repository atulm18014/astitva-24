import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Events from "./Events";
import Gallery from "./Gallery";


import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes({ authUser, updateAuthUserAttr, handleLogout, checkingStatus }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home user={authUser.user} />} />
        <Route path="/events" element={<Events user={authUser.user} />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;