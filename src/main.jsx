import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Authlayout, Login } from "./components";

import Home from "./pages/Home.jsx";
import AddPost from "./pages/AddPost.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import EditPost from "./pages/EditPost.jsx";
import Post from "./pages/Post.jsx";
import Signup from "./pages/SignUp.jsx";
import About from "./pages/About-Us";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <Authlayout authentication={false}>
            <Login />
          </Authlayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <Authlayout authentication={false}>
            <Signup />
          </Authlayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <Authlayout authentication>
            {" "}
            <AllPosts />
          </Authlayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <Authlayout authentication>
            {" "}
            <AddPost />
          </Authlayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <Authlayout authentication>
            {" "}
            <EditPost />
          </Authlayout>
        ),
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
