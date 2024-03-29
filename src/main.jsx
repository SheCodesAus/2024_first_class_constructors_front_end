import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// PAGES
import HomePage from "./pages/HomePage.jsx";
import BirthdayPage from "./pages/BirthdayPage.jsx";
import AnniversaryPage from "./pages/AnniversaryPage.jsx";

import App from "./app.jsx";
import WeddingPage from "./pages/WeddingPage.jsx";
import GraduationPage from "./pages/GraduationPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "BirthdayPage", element: <BirthdayPage /> },
      { path: "AnniversaryPage", element: <AnniversaryPage /> },
      { path: "WeddingPage", element: <WeddingPage /> },
      { path: "GraduationPage", element: <GraduationPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
