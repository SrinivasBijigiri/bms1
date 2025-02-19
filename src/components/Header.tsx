import React from 'react';
import { Link } from 'react-router-dom';
import { Film } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Film size={24} className="text-red-500" />
            <span className="text-xl font-bold">MovieBox</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-red-500 transition-colors">
              Movies
            </Link>
            <Link to="/bookings" className="hover:text-red-500 transition-colors">
              My Bookings
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}