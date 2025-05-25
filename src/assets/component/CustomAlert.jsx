import React from 'react';

export default function CustomAlert({ message, type = 'success', onClose }) {
  const alertStyles = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700',
  };

  return (
    <div className={`fixed top-4 right-4 ${alertStyles[type]} border-l-4 p-4 rounded shadow-lg z-50 transition transform duration-300 animate-fade-in-out`}>
      <div className="flex items-center">
        <p>{message}</p>
        <button onClick={onClose} className="ml-3 font-bold">&times;</button>
      </div>
    </div>
  );
}