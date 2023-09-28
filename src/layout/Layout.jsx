import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import './Layout.css';

export default function Layout() {
  return (
    <div className="page-container">
      <div className="side-bar">
        <Sidebar />
      </div>
      <div className="main-page">
        <Outlet />
      </div>
    </div>
  );
}
