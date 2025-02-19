export interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  rating: number;
  duration: string;
  genre: string[];
  description: string;
}

export interface ShowTime {
  id: number;
  time: string;
  price: number;
}

export interface Seat {
  id: string;
  row: string;
  number: number;
  isBooked: boolean;
  isSelected: boolean;
}