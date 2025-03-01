import { Movie, ShowTime } from '../types';

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    imageUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&auto=format&fit=crop",
    rating: 4.8,
    duration: "2h 28min",
    genre: ["Action", "Sci-Fi", "Thriller"],
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
  },
  {
    id: 2,
    title: "The Dark Knight",
    imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format&fit=crop",
    rating: 4.9,
    duration: "2h 32min",
    genre: ["Action", "Crime", "Drama"],
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  },
  {
    id: 3,
    title: "Interstellar",
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&auto=format&fit=crop",
    rating: 4.7,
    duration: "2h 49min",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  }
];

export const showTimes: ShowTime[] = [
  { id: 1, time: "10:00 AM", price: 12 },
  { id: 2, time: "2:30 PM", price: 15 },
  { id: 3, time: "6:00 PM", price: 18 },
  { id: 4, time: "9:30 PM", price: 20 }
];