import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter as Router, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Home from './pages/Home.tsx'
import Product from './pages/Product.tsx'

const router = Router(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path='product/:slug' element={<Product />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
