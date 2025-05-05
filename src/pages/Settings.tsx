import React, { useState } from 'react';
import { ArrowLeft, Shield, Key, Bell, Eye, EyeOff, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Settings: React.FC = () => {
  const [riskLevel, setRiskLevel] = useState(3);
  const [notifications, setNotifications] = useState({
    priceAlerts: true,
    securityAlerts: true,
    newsletterUpdates: false
  });
  const [apiKey, setApiKey] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);

  const handleRiskChange = (value: number) => {
    setRiskLevel(value);
    // In a real app, this would be saved to backend
  };

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6 flex items-center">
          <Link to="/" className="text-indigo-400 hover:text-indigo-300 flex items-center">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="space-y-6">
          {/* Risk Profile Section */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <Shield className="h-5 w-5 text-indigo-400 mr-2" />
              <h2 className="text-xl font-bold text-white">Risk Profile</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-300">Adjust your risk tolerance for DeFi strategies</p>
              
              <div className="space-y-2">
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={riskLevel}
                  onChange={(e) => handleRiskChange(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-slate-400">
                  <span>Conservative</span>
                  <span>Balanced</span>
                  <span>Aggressive</span>
                </div>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="text-sm text-slate-300">Current Risk Level:</div>
                <div className="text-lg font-semibold text-white">
                  {riskLevel === 1 ? 'Very Conservative' :
                   riskLevel === 2 ? 'Conservative' :
                   riskLevel === 3 ? 'Balanced' :
                   riskLevel === 4 ? 'Growth' :
                   'Aggressive'}
                </div>
              </div>
            </div>
          </div>

          {/* API Keys Section */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <Key className="h-5 w-5 text-indigo-400 mr-2" />
              <h2 className="text-xl font-bold text-white">API Keys</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-300">Manage your external API keys for exchanges and wallets</p>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">Exchange API Key</label>
                <div className="relative">
                  <input
                    type={showApiKey ? 'text' : 'password'}
                    value={apiKey}
                    onChange={handleApiKeyChange}
                    placeholder="Enter your API key"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    onClick={() => setShowApiKey(!showApiKey)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    {showApiKey ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4 flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-yellow-500 font-medium">Security Notice</h4>
                  <p className="text-yellow-200/80 text-sm">
                    API keys are encrypted and stored securely. Never share your keys with anyone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <Bell className="h-5 w-5 text-indigo-400 mr-2" />
              <h2 className="text-xl font-bold text-white">Notifications</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-300">Configure your notification preferences</p>
              
              <div className="space-y-4">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-slate-300">
                      {key === 'priceAlerts' ? 'Price Alerts' :
                       key === 'securityAlerts' ? 'Security Alerts' :
                       'Newsletter Updates'}
                    </span>
                    <button
                      onClick={() => handleNotificationChange(key as keyof typeof notifications)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        value ? 'bg-indigo-600' : 'bg-slate-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          value ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;