import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <div>
        <div className="side-bar">
          {/* This is the side bar */}
          <Link to="/motorcycles">Motorcycles</Link>
          {' '}
          <br />
          <Link to="/motorcycles/new">New motorcycles</Link>
        </div>
        <div className="main-page">
          {/* This is the main page , all pages should go here */}
          <Outlet />
        </div>
      </div>
    </>
  );
}
