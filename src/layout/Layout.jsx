import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <div>
        <div className="side-bar" />
        <div className="main-page">
          <Outlet />
        </div>
      </div>
    </>
  );
}
