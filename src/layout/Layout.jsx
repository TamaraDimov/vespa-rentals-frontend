import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

export default function Layout() {
  return (
    <>
      <div>
        <div className="side-bar">
          <Sidebar />
        </div>
        <div className="main-page">
          <Outlet />
        </div>
      </div>
    </>
  );
}
