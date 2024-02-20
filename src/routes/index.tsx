import App from '@/App';
import { AuthenticatedLayout } from '@/components/common/AuthenticatedLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MyPage } from '@pages/MyPage';
import { MyPageEdit } from '@pages/MyPageEdit';
import { Auth } from '@pages/Auth';
import { SignUp } from '@pages/SignUp';
import { StudentAudentication } from '@/pages/\bStudentAudentication';

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
    path: '/mypage',
    element: <AuthenticatedLayout />,
    children: [
      {
        index: true,
        element: <MyPage />
      },
      {
        path: '/mypage/edit',
        element: <MyPageEdit />
      }
    ]
  },
  {
    path: '/auth',
    element: <Auth />
  },
  {
    path: '/auth/student-verification',
    element: <StudentAudentication />
  },
  {
    path: '/auth/signup',
    element: <SignUp />
  },
  { path: '*', element: <>not found page</> }
]);
