// ✅ src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import CreateEmployee from "./components/CreateEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import Navbar from "./components/Navbar";
import SearchResults from "./components/SearchResult";
import Footer from "./components/Footer"; // ✅ Importing Footer component
function App() {
  return (
    <Router> {/* ✅ Sabse upar wrap hona chahiye */}
      <div className="flex flex-col min-h-screen">
        <Navbar /> {/* ✅ Ab Router ke andar hai */}
      <div className="p-4 flex-grow">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/create" element={<CreateEmployee />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/update/:id" element={<UpdateEmployee />} />
        </Routes>
      </div>
      <Footer /> 
      </div>
      
    </Router>
  );
}

export default App;
