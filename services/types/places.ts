export interface Place {
  _id: string;
  name: string;
  type: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  hours: string;
  price: number;
  nearby: {
    name: string;
    location: { lat: number; lng: number };
  }[];
}
