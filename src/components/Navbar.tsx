import React, { useState, useEffect } from 'react';
import { Menu, X, Wallet, Settings as SettingsIcon, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'warning',
      title: 'APY Drop Alert',
      message: 'Lido stETH APY has dropped by 5%',
      time: '2 minutes ago',
      unread: true
    },
    {
      id: 2,
      type: 'info',
      title: 'New Strategy Available',
      message: 'Check out the new yield farming strategy',
      time: '1 hour ago',
      unread: true
    }
  ]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    if (showNotifications) {
      setNotifications(notifications.map(n => ({ ...n, unread: false })));
    }
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 mr-2 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg"></div>
              <span className="text-white font-bold text-xl">SageChain</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link to="/chat" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                AI Chat
              </Link>
              <Link to="/dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Dashboard
              </Link>
              <Link to="/simulation" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Simulation Panel
              </Link>
              <Link to="/portfolio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Portfolio
              </Link>
              <Link to="/education" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Education Hub
              </Link>
              <Link to="/settings" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Settings
              </Link>
              
              {/* Notifications Button */}
              <div className="relative">
                <button
                  onClick={handleNotificationClick}
                  className="text-gray-300 hover:text-white p-2 rounded-md transition-colors relative"
                >
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-lg border border-slate-700 overflow-hidden">
                    <div className="p-4 border-b border-slate-700">
                      <h3 className="text-white font-semibold">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map(notification => (
                        <div
                          key={notification.id}
                          className={`p-4 border-b border-slate-700 ${
                            notification.unread ? 'bg-slate-700/50' : ''
                          }`}
                        >
                          <div className="flex items-start">
                            <div className="flex-1">
                              <h4 className="text-white font-medium">{notification.title}</h4>
                              <p className="text-slate-300 text-sm mt-1">{notification.message}</p>
                              <span className="text-slate-400 text-xs mt-2 block">{notification.time}</span>
                            </div>
                            {notification.unread && (
                              <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 border-t border-slate-700">
                      <Link
                        to="/notifications"
                        className="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
                        onClick={() => setShowNotifications(false)}
                      >
                        View All Notifications
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <a 
                href="#" 
                className="flex items-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-blue-700 transition-all ml-2"
              >
                <Wallet className="h-4 w-4 mr-2" />
                Connect Wallet
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/chat"
              className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              AI Chat
            </Link>
            <Link
              to="/dashboard"
              className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/simulation"
              className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Simulation Panel
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/education"
              className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Education Hub
            </Link>
            <Link
              to="/settings"
              className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Settings
            </Link>
            <Link
              to="/notifications"
              className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Notifications {unreadCount > 0 && `(${unreadCount})`}
            </Link>
            <a 
              href="#" 
              className="flex items-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2 rounded-lg text-base font-medium hover:from-indigo-700 hover:to-blue-700 transition-all mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Wallet className="h-4 w-4 mr-2" />
              Connect Wallet
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;