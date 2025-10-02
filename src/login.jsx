import React, { useState } from 'react';

const LoginComponent = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [ setIsLoggedIn] = useState(false);
  const [showAccessGranted, setShowAccessGranted] = useState(false);

  const FIXED_USER_ID = '987654321';
  const FIXED_PASSWORD = 'Omni@2025';

  const handleLogin = () => {
    setError('');

    if (userId === FIXED_USER_ID && password === FIXED_PASSWORD) {
      setIsLoggedIn(true);
      setShowAccessGranted(true);
      
      // Navigate to /timer after showing success message
      setTimeout(() => {
        window.location.href = '/timer';
      }, 2000);
    } else {
      setError('Invalid User ID or Password');
      setUserId('');
      setPassword('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  if (showAccessGranted) {
    return (
      <div className="fixed inset-0 w-full h-full flex items-center justify-center">
        <div className="relative animate-fade-in">
          <div className="absolute inset-0 bg-green-500/30 blur-3xl rounded-full animate-pulse"></div>
          
          <div className="relative">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-green-500/20 rounded-full flex items-center justify-center border-4 border-green-400 animate-bounce">
                <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-6xl font-bold text-green-400 text-center" style={{ textShadow: '0 0 30px rgba(74, 222, 128, 0.8)' }}>
              ACCESS GRANTED
            </h2>
            <p className="text-green-300 text-xl text-center mt-4">User #{FIXED_USER_ID}</p>
            <p className="text-green-500/60 text-sm text-center mt-6 animate-pulse">Redirecting...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center">
      <div className="text-center w-full px-4">
        <div className="mb-12">
          <div className="w-24 h-24 mx-auto bg-green-500/10 rounded-full flex items-center justify-center border-2 border-green-500/30 mb-6 animate-pulse">
            <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-green-400 mb-3" style={{ textShadow: '0 0 20px rgba(74, 222, 128, 0.6)' }}>
            SECURE ACCESS
          </h1>
          <p className="text-green-300/60 text-lg">Authentication Required</p>
        </div>

        <div className="max-w-md mx-auto space-y-6">
          <div>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-6 py-4 bg-black/30 backdrop-blur-sm border-2 border-green-500/30 rounded-xl text-green-300 text-lg placeholder-green-700/50 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all"
              placeholder="USER ID"
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-6 py-4 bg-black/30 backdrop-blur-sm border-2 border-green-500/30 rounded-xl text-green-300 text-lg placeholder-green-700/50 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all"
              placeholder="PASSWORD"
            />
          </div>

          {error && (
            <div className="bg-red-500/20 border-2 border-red-500/50 rounded-xl p-4 text-red-400 text-lg font-semibold text-center animate-pulse">
              {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            className="w-full bg-green-600/80 hover:bg-green-600 text-white font-bold text-xl py-4 rounded-xl transition-all duration-300 border-2 border-green-500/50 shadow-2xl hover:shadow-green-500/50 hover:scale-105"
            style={{ textShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}
          >
            AUTHENTICATE
          </button>
        </div>

        <div className="mt-8 text-green-500/40 text-sm font-mono animate-pulse">
          ENCRYPTED • SECURE • VERIFIED
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LoginComponent;