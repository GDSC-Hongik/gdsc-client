import App from '@/App';
import { AuthenticatedLayout } from '@/components/common/AuthenticatedLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MyPage } from '@pages/MyPage';
import { MyPageEdit } from '@pages/MyPageEdit';
import { Auth } from '@pages/Auth';
import { SignUp } from '@pages/SignUp';
import { StudentAudentication } from '@/pages/StudentAudentication';
import RoutePath from '@/routes/routePath';

export const Routers = () => {
  return <RouterProvider router={router} />;
};

// TODO: error page, meta tag
const router = createBrowserRouter([
  {
    index: true,
    element: <App />
  },
  {
    path: RoutePath.MyPage,
    element: <AuthenticatedLayout />,
    children: [
      {
        index: true,
        element: <MyPage />
      },
      {
        path: RoutePath.MyPageEdit,
        element: <MyPageEdit />
      }
    ]
  },
  {
    path: RoutePath.AuthenticationProcess1_GithubSignin,
    element: <Auth />
  },
  {
    path: RoutePath.AuthenticationProcess2_StudentVerification,
    element: <StudentAudentication />
  },
  {
    path: RoutePath.AuthenticationProcess3_Signup,
    element: <SignUp />
  },
  { path: '*', element: <>not found page</> }
]);
