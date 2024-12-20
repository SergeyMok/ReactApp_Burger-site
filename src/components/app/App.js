import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import store from "../../store";

import { useState } from "react";

import Showcase from "../../pages/showcase";
import ShoppingСart from "../../pages/shoppingcart";
import About from "../../pages/aboutproduct";
import AuthUser from "../../pages/authuser";
import PageNoteFound from "../../pages/notFound/pageNotFound";

function App() {
  const publicPages = [
    {
      path: "/",
      element: <AuthUser stateAuth={isAuthentication} />,
    },
    {
      path: "/*",
      element: <PageNoteFound />,
    },
  ];

  const privatPages = [
    {
      path: "/",
      element: <AuthUser stateAuth={isAuthentication} />,
    },
    {
      path: "/showcase",
      element: <Showcase />,
    },
    {
      path: "/basket",
      element: <ShoppingСart />,
    },
    {
      path: "/about/:id",
      element: <About />,
    },
    {
      path: "/*",
      element: <PageNoteFound />,
    },
  ];

  const [isAuth, setAuth] = useState(false);

  function isAuthentication(stateAuth) {
    if (stateAuth) setAuth(stateAuth);
  }

  const userData = Boolean(sessionStorage.getItem("authUser"));

  let router =
    isAuth || userData
      ? createBrowserRouter(privatPages, {
          basename: "/ReactApp_Burger-site",
        })
      : createBrowserRouter(publicPages, {
          basename: "/ReactApp_Burger-site",
        });

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
