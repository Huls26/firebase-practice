import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './index.css';

import App from './components/App';
import HomePage from './pages/HomePage';
import Home, {loader as booksLoader, loader} from "./components/Home";
import AddDelete from './pages/AddDeletePage';

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
        element: <AddDelete />,
        loader: booksLoader,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={ router } />
  // </React.StrictMode>
)
 