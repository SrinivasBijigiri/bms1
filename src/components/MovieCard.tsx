import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <div className="relative h-[400px]">
        <img 
          src={movie.imageUrl} 
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{movie.title}</h3>
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center text-yellow-400">
              <Star size={16} className="mr-1" />
              <span className="text-white">{movie.rating}</span>
            </div>
            <div className="flex items-center text-white">
              <Clock size={16} className="mr-1" />
              <span>{movie.duration}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {movie.genre.map((g) => (
            <span 
              key={g} 
              className="px-2 py-1 text-xs bg-gray-100 rounded-full"
            >
              {g}
            </span>
          ))}
        </div>
        <p className="text-gray-600 text-sm line-clamp-2">{movie.description}</p>
      </div>
    </div>
  );
}