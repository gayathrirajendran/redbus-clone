import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.tsx';
import { Spin } from 'antd';
import Tickets from './placeholders/Tickets.tsx';
import CabRentalCmp from './placeholders/Cabs.tsx';
import Trains from './placeholders/Trains.tsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: "bus-tickets",
        element:
          <Suspense fallback={<div className='flex my-6 justify-center py-2'><Spin />Loading...</div>}>
            <Tickets />
          </Suspense>, // TO DO: guarded routes
        errorElement: <Home />
      },
      {
        path: 'cab-rental',
        element:
          <Suspense fallback={<div className='flex my-6 justify-center py-2'><Spin />Loading...</div>}>
            <CabRentalCmp />
          </Suspense>
      },
      {
        path: 'train-tickets',
        element:
          <Suspense fallback={<div className='flex my-6 justify-center py-2'><Spin />Loading...</div>}>
            <Trains />
          </Suspense>,
      },
      {
        path: '',
        element: <Navigate to="home" replace />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" replace />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
