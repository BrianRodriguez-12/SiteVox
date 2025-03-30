import { Place } from './places';

export interface RouteData {
  _id: string;
  name: string;
  places: Place[];
}
