import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const sidebarLinks = {
  admin: [
    { to: '/admin', label: 'Dashboard' },
    { to: '/admin/articles', label: 'Articles' },
    { to: '/admin/editions', label: 'Editions' },
    { to: '/admin/settings', label: 'Settings' },
    { to: '/admin/users', label: 'Manage Users' },
    { to: '/write', label: 'Write' },
  ],
  editor: [
    { to: '/editor', label: 'Dashboard' },
    { to: '/editor/articles', label: 'Articles' },
    { to: '/editor/reviews', label: 'Reviews' },
    { to: '/editor/settings', label: 'Settings' },
  ],
  reviewer: [
    { to: '/reviewer', label: 'Dashboard' },
    { to: '/reviewer/reviews', label: 'Reviews' },
    { to: '/reviewer/settings', label: 'Settings' },
  ],
  author: [
    { to: '/author', label: 'Dashboard' },
    { to: '/author/articles', label: 'My Articles' },
    { to: '/author/settings', label: 'Settings' },
    { to: '/write', label: 'Write' },
  ],
  reader: [
    { to: '/reader', label: 'Dashboard' },
    { to: '/reader/articles', label: 'Browse Articles' },
    { to: '/reader/settings', label: 'Settings' },
  ],
};

const Sidebar = ({ role }) => {
  const links = sidebarLinks[role] || [];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-4">
        <button
          className="text-gray-700 hover:text-blue-700"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-white shadow h-full flex flex-col md:static absolute top-0 left-0 z-50 w-64 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="h-16 flex items-center justify-center font-bold text-xl border-b">JMS</div>
        <nav className="flex-1 p-4 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block px-4 py-2 rounded hover:bg-blue-100 transition ${isActive ? 'bg-blue-200 font-semibold' : ''}`
              }
              end
              onClick={() => setIsSidebarOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
