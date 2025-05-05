import React, { useState } from 'react';
import { ArrowLeft, Bell, Settings as SettingsIcon, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotificationsPage: React.FC = () => {
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
    },
    {
      id: 3,
      type: 'success',
      title: 'Transaction Successful',
      message: 'Your stake of 1 ETH was successful',
      time: '2 hours ago',
      unread: false
    }
  ]);

  const [filter, setFilter] = useState('all');

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'unread') return notification.unread;
    if (filter === 'read') return !notification.unread;
    return true;
  });

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <Link to="/" className="text-indigo-400 hover:text-indigo-300 flex items-center">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <Link to="/settings" className="text-indigo-400 hover:text-indigo-300 flex items-center">
            <SettingsIcon className="h-5 w-5 mr-2" />
            Notification Settings
          </Link>
        </div>

        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Bell className="h-6 w-6 text-indigo-400 mr-3" />
                <h1 className="text-2xl font-bold text-white">Notifications</h1>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={markAllAsRead}
                  className="text-slate-300 hover:text-white text-sm transition-colors"
                >
                  Mark all as read
                </button>
                <button
                  onClick={clearAll}
                  className="text-slate-300 hover:text-white text-sm transition-colors flex items-center"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Clear all
                </button>
              </div>
            </div>

            <div className="flex space-x-2">
              {['all', 'unread', 'read'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === type
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-slate-700">
            {filteredNotifications.map(notification => (
              <div
                key={notification.id}
                className={`p-6 ${notification.unread ? 'bg-slate-700/50' : ''}`}
              >
                <div className="flex items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{notification.title}</h3>
                    <p className="text-slate-300 mt-1">{notification.message}</p>
                    <span className="text-slate-400 text-sm mt-2 block">{notification.time}</span>
                  </div>
                  {notification.unread && (
                    <span className="h-3 w-3 bg-blue-500 rounded-full"></span>
                  )}
                </div>
              </div>
            ))}

            {filteredNotifications.length === 0 && (
              <div className="p-8 text-center text-slate-400">
                No notifications to display
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;