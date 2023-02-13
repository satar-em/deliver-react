import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import * as RRD from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";
import Child1 from "./pages/home/Childeren/Child1";
import NotFoundHome from "./pages/home/NotFoundHome";
import Child2 from "./pages/home/Childeren/Child2";

const router = RRD.createBrowserRouter([
    {
        path: "/home",
        element: <Home/>,
        children: [
            {
                path: "em",
                element: <Child1/>,
                children: [
                    {
                        path: "123",
                        element: <Child2/>
                    }
                ]
            },
            {
                path: "*",
                element: <NotFoundHome/>
            }
        ]
    },
    {
        path: "/*",
        element: <NotFound/>
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RRD.RouterProvider router={router}/>
    </React.StrictMode>,
)
