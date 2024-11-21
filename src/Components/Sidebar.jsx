import { HomeIcon, UserIcon, TicketIcon, CogIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import Request from './Request';
import Accounts from './Accounts';
import Profile from './Profile';
import avatarImage from './1672986337737_01.jpg'


function Sidebar() {
  return (
      <aside className="w-80 flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r dark:bg-gray-900 dark:border-gray-700 rounded-r-lg">
        <a href="#" className="mx-auto">
          {/* Add image */}
          <h2 className='text-xl text-orange-100 font-bold'>Finsight</h2>
        </a>

        <div className="flex flex-col items-center mt-6 -mx-2">
          {/* Add image */}
          <img
            className="object-cover w-24 h-24 mx-2 rounded-full"
            src={avatarImage}
            alt="avatar"
          />
          <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">Ashutosh kumar</h4>
          <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">ad23b1007@gmail.com</p>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <NavLink
              to="/"
              className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200"
            >
              <HomeIcon className="w-5 h-5" />
              <span className="mx-4 font-medium">Dashboard</span>
            </NavLink>

            <NavLink
              to="/accounts"
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <UserIcon className="w-5 h-5" />
              <span className="mx-4 font-medium">Accounts</span>
            </NavLink>

            <NavLink
              to="/requests"
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <TicketIcon className="w-5 h-5" />
              <span className="mx-4 font-medium">Requests</span>
            </NavLink>

            <NavLink
              to="/report"
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <TicketIcon className="w-5 h-5" />
              <span className="mx-4 font-medium">Report</span>
            </NavLink>

            <NavLink
              to="/settings"
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <CogIcon className="w-5 h-5" />
              <span className="mx-4 font-medium">Settings</span>
            </NavLink>
          </nav>
        </div>
      </aside>
  );
}

export default Sidebar;
