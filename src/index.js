import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Link,
} from 'react-router-dom';

// import the components
import Home from './pages/Home';
import RechartsBI from './pages/RechartsBI';
import VictoryBI from './pages/VictoryBI';
import BizchartsBI from './pages/BizchartsBI';
import ErrorPage from './pages/ErrorPage';
import Navbar from './navigation/Navbar';
import LoadDataContextProvider from './assets/LoadDataContextProvider';

import './index.css';
import './App.css';

import reportWebVitals from './reportWebVitals';

const AppLayout = () => {
  return (
    <>
    <LoadDataContextProvider>
      <Navbar />
      <Outlet />
    </LoadDataContextProvider>      
    </>
  );
};

//create router to navigation
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "recharts",
        element: <RechartsBI />,
      },
      {
        path: "victory",
        element: <VictoryBI />,
      },
      {
        path: "bizchart",
        element: <BizchartsBI />,
      },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
