import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// PAGES
import HomePage from "./pages/HomePage.jsx";
import BirthdayPage from "./pages/BirthdayPage.jsx";
import AnniversaryPage from "./pages/AnniversaryPage.jsx";
import GiftDetailPage from "./pages/GiftDetailPage.jsx";

import App from "./app.jsx";
import WeddingPage from "./pages/WeddingPage.jsx";
import GraduationPage from "./pages/GraduationPage.jsx";
import ChristmasPage from "./pages/ChristmasPage.jsx";
import ComparePage from "./pages/ComparePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "compare", element: <ComparePage />},
      { path: "/login", element: <LoginPage /> },
      { path: "BirthdayPage", element: <BirthdayPage /> },
      { path: "AnniversaryPage", element: <AnniversaryPage /> },
      { path: "WeddingPage", element: <WeddingPage /> },
      { path: "GraduationPage", element: <GraduationPage /> },
      { path: "ChristmasPage", element: <ChristmasPage /> },
      { path: "gift/:id", element: <GiftDetailPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
