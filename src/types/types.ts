export interface AsteroidDistanceType {
  kilometers: number;
  lunar: number;
}

export interface AsteroidType {
  id: string;
  name: string;
  diameter: number;
  hazardous: boolean;
  distance: AsteroidDistanceType;
  date: string;
}

export interface AllDatesType {
  speed: number;
  distance: AsteroidDistanceType;
  date: string;
}

export interface AsteroidWithAllDatesTypes extends AsteroidType {
  allDates: AllDatesType[];
}
