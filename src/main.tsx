import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import BusTickets from './pages/BusTickets.tsx';

interface GuardedRouteProps {
	isRouteAccessible?: boolean;
	redirectRoute?: string;
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "bus-tickets",
    element:  <BusTickets />
  }, {
    path: '*',
    element: <Navigate to="/" replace />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
