import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DownloadButton from './components/DownloadButton.jsx';
import Home from './components/Home.jsx';
import Features from './components/Features.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "home",
        element: <Home/>,
      },
      {
        path: "features",
        element: <Features/>,
      },
      {
        path: "about",
        element: <DownloadButton/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
