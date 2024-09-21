import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from './components/Layout.tsx';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import User from './components/User.tsx';
import GitHub, { githubInfoLoader } from './components/GitHub.tsx';
const router = createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[{
    path:"/",
    element:<Home/>
  },{
    path:"about",
    element:<About/>
  },{
    path:"contactUs",
    element:<Contact/>
  },{
    path:"user/:id",
    element:<User/>
  },{
    loader:githubInfoLoader,
    path:"github",
    element:<GitHub/>
  }]
}])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App />
  </StrictMode>,
)
