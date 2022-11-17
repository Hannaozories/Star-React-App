import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/HomeComponent/Home';
import About from './Components/About/About';
import Contact from './Components/Contacts/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import LayOut from './LayOut';
import NotFound from './Components/Notfound/NotFound';
import Elements from './Elements';

 

export default function App() {

  const Routers= createBrowserRouter([
  
    {path:'/',element:<LayOut/>,errorElement:<NotFound/>,children:[
      {path:'/',element:<Elements/>},
    {path:'home',element:<Home/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'about',element:<About/>},
    {path:'contact',element:<Contact/>},

    ]}
]);

  return <>
<RouterProvider router={Routers}/>
  </>
}
