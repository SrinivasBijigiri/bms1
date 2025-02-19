import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Star, Clock } from 'lucide-react';
import { movies, showTimes } from '../data/movies';

export function MoviePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === Number(id));
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<number | null>(null);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  const handleBooking = () => {
    if (selectedTime) {
      navigate(`/booking/${movie.id}/${format(selectedDate, 'yyyy-MM-dd')}/${selectedTime}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative h-[600px]">
          <img 
            src={movie.imageUrl} 
            alt={movie.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center text-yellow-500">
              <Star size={20} className="mr-1" />
              <span className="text-lg">{movie.rating}</span>
            </div>
            <div className="flex items-center">
              <Clock size={20} className="mr-1" />
              <span className="text-lg">{movie.duration}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genre.map((g) => (
              <span 
                key={g} 
                className="px-3 py-1 bg-gray-100 rounded-full"
              >
                {g}
              </span>
            ))}
          </div>
          <p className="text-gray-600 mb-8">{movie.description}</p>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Select Date</h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {dates.map((date) => (
                <button
                  key={date.toISOString()}
                  onClick={() => setSelectedDate(date)}
                  className={`px-4 py-2 rounded-lg flex flex-col items-center min-w-[100px] ${
                    selectedDate.toDateString() === date.toDateString()
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100'
                  }`}
                >
                  <span className="text-sm">{format(date, 'EEE')}</span>
                  <span className="text-lg font-semibold">{format(date, 'd')}</span>
                  <span className="text-sm">{format(date, 'MMM')}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Select Time</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {showTimes.map((time) => (
                <button
                  key={time.id}
                  onClick={() => setSelectedTime(time.id)}
                  className={`p-4 rounded-lg text-center ${
                    selectedTime === time.id
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100'
                  }`}
                >
                  <div className="font-semibold">{time.time}</div>
                  <div className="text-sm">${time.price}</div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleBooking}
            disabled={!selectedTime}
            className="w-full bg-red-500 text-white py-4 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
}