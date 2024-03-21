import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import NavBar from './components/NavBar.jsx';

const router = createBrowserRouter([
    {
        path:"/",
        element: (
          <>
            <NavBar />
          </>
        ),
      children: [
        { path: '/', element: <HomePage /> }
      ],
    },
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
