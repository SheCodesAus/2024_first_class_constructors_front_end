import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// PAGES
import HomePage from "./pages/HomePage.jsx";
import BirthdayPage from "./pages/BirthdayPage.jsx";
import AnniversaryPage from "./pages/AnniversaryPage.jsx";

import App from "./app.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "BirthdayPage", element: <BirthdayPage /> },
      { path: "AnniversaryPage", element: <AnniversaryPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
