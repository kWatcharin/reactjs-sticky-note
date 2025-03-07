import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';


export default function Routers() {
  const routers = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={routers}/>
    </>
  );
}