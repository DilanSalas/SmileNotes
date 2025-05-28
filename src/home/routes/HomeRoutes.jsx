import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../index"; 
import {About} from "../page/About"

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
             <Route path="/About" element={<About />} /> 

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
