import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Service from './composants/services/service.jsx'
import Urgence from './composants/accueil/urgence.jsx'
import Apropos from './composants/apropos/apropos.jsx'
import Contact from './composants/contact/contact.jsx'
import Hospitalisation from './composants/contact/hospitalisation.jsx'
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
    path: "/urgence",
    element: <Urgence />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/apropos",
    element: <Apropos />,
  },
  {
    path: "/hospitalisation",
    element: <Hospitalisation />,
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
