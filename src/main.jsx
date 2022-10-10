import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './index.css';

import App from './components/App';
import HomePage from './pages/HomePage';
import Home, {loader as booksLoader} from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: booksLoader,
      },
      {
        path:"add/delete",
        element: <App />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={ router } />
  // </React.StrictMode>
)
 