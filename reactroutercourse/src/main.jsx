import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import User from './Components/User/User.jsx'
import GitHub, { githubInfoLoader } from './Components/GitHub/GitHub.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       }, {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <ContactUs />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/user/:userid' element={<User />} />
      <Route
       loader={githubInfoLoader}
       path='/github' 
       element={<GitHub/>}
      />
   </Route> 
  ) 
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider  router={router}/>
  </StrictMode>,
)
