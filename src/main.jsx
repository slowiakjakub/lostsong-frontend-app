import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Features from './components/Features.jsx';
import About from './components/About.jsx';
import Authors from './components/Authors.jsx';

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
        element: <About/>,
      },
      {
        path: "authors",
        element: <Authors/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
