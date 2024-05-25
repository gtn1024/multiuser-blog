import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "@/pages/HomePage.tsx";
import {DefaultLayout} from "@/layouts/DefaultLayout.tsx";
import {BlogPage} from "@/pages/BlogPage.tsx";
import {BlogCreate} from "@/pages/BlogCreate.tsx";
import {BlogEdit} from "@/pages/BlogEdit.tsx";
import {UserCenterPage} from "@/pages/UserCenterPage.tsx";
import {LoginPage} from "@/pages/LoginPage.tsx";

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (<DefaultLayout />),
      children: [
        {
          index: true,
          element: (<HomePage />),
        },
        {
          path: 'login',
          element: (<LoginPage />),
        },
        {
          path: 'create',
          element: (<BlogCreate />),
        },
        {
          path: 'edit/:id',
          element: (<BlogEdit />),
        },
        {
          path: 'blog/:id',
          element: (<BlogPage />),
        },
        {
          path: 'user/:id',
          element: (<UserCenterPage />)
        },
        {
          path: '*',
          element: (<>404</>)
        },
      ]
    },
  ]
)