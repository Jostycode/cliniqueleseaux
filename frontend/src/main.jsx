import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Service1 from './composants/services/service1.jsx'
import Apropos from './composants/apropos/apropos.jsx'
import Contact from './composants/contact/contact.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: loadRootData,
  },
  {
    path: "/service",
    element: <Service1 />,
  },
  {
    path: "/apropos",
    element: <Apropos />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
