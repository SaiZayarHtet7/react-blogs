import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import BlogDetail from "../pages/blog_detail";
import NotFound from "../pages/not_found";

const router = createBrowserRouter([
  {
    path: "/", // localhost :3000
    element: <App />,
    children: [
      {
        path: "", // localhost :3000,
        element: <Home />,
        // element: ,
      },
      {
        path: "/about", // localhost :3000/about,
        element: <About />,
      },
      {
        path: "/contact", // localhost :3000/about,
        element: <Contact />,
      },
      {
        path: "/blogs/:id", // localhost :3000/about,
        element: <BlogDetail />,
      },
      {
        path: "*", // fallback when unknown route
        element: <NotFound/>

      }
    ],
  },
]);

export default router;
