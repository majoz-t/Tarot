import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import Discover from "../pages/discover/Discover";
import Record from "../pages/record/Record";
import Save from "../pages/save/Save";
import Layout from "../layout/Layout";
import { Children } from "react";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Layout,
    children:[
     {
        index: true,
        Component:Home
      },
      {
        path: "/discover",
        Component:Discover 
      },
      {
        path: "/record",
        Component:Record 
      },
      {
        path: "/save",
        Component:Save 
      }  
    ]
    
  },
    {
    path: "/dicover",
    Component:Discover
  },
    {
    path: "/record",
    Component:Record 
  },
     {
    path: "/save",
    Component:Save 
  }
]);