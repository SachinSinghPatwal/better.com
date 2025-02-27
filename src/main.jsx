import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router";
import AboutUs from "./Components/Pages/AboutUs.jsx";
import MortgageCalculator from "./Components/Pages/MortgageCalculator.jsx";
import StartPage from "./Components/Pages/StartPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="AboutUs" element={<AboutUs />} />
      <Route path="MortgageCalculator" element={<MortgageCalculator />} />
      <Route path="StartPage" element={<StartPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
