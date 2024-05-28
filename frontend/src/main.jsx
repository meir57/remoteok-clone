import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from "./views/Home";
import PostJob from "./views/PostJob";
import Auth from "./views/Auth";

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path: "/login",
        element: <SignIn />
      },
      {
        path: "/sign-up",
        element: <SignUp />
      }
    ]     
  },
  {
    path: "/hire-remotely",
    element: <PostJob />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
