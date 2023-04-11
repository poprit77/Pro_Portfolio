
import React from "react";
import { Home } from "./pages/Home";
import { Story } from "./pages/Story";
import { Contact } from "./pages/Contact";
import { Work } from "./pages/Work";
import { Resume } from "./pages/Resume";

import Header from "./ui/Header"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Story' element={<Story />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Work' element={<Work />} />
      <Route path='/Resume' element={<Resume />} />
    </Routes>
    </>
  );
}

export default App;
