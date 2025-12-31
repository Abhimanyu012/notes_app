import React from "react";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailsPage from "./pages/NoteDetailsPage";
import UpdateNotePage from "./pages/UpdateNotePage";
import { Route, Routes } from "react-router";

const App = () => {
  return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/create" element={<CreatePage/>} />
          <Route path="/update/:id" element={<UpdateNotePage/>} />
          <Route path="/notedetails" element={<NoteDetailsPage/>} />
        </Routes>
      </div>
  );
};

export default App;
