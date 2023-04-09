import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <div>home</div>,
      },
      {
        path: "/statistics",
        element: <div>statistics</div>,
      },
      {
        path: "/appliedjobs",
        element: <div>appliedjobs</div>,
      },
      {
        path: "/blog",
        element: <div>blog</div>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
