import { Outlet } from 'react-router-dom';

export const AuthenticatedLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
