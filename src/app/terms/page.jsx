'use client'
import { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    // Redirect to main page immediately when component mounts
    window.location.href = '/';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl text-gray-700 mb-2">Redirecting...</h2>
        <p className="text-gray-500">Taking you to the main page</p>
      </div>
    </div>
  );
};

export default RedirectPage;