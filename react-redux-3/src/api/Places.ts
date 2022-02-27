export enum PlaceType {
  Basement = 'basement',
  Metro = 'Metro',
  Bunker = 'bunker',
}

export interface IPlace {
  id: string;
  address: string;
  description: string;
  capacity: number;
  imageSrc: string;
  createdAt: number;
  type: PlaceType;
};

export const FAKE_DATA: IPlace[] = [
  {
    id: 'id1',
    address: 'Zhinovicha',
    description: '',
    capacity: 123,
    imageSrc: '',
    createdAt: Date.now(),
    type: PlaceType.Basement,
  },
  {
    id: 'id2',
    address: 'Pushkina',
    description: '',
    capacity: 454,
    imageSrc: '',
    createdAt: Date.now(),
    type: PlaceType.Bunker,
  },
  {
    id: 'id3',
    address: 'Orlovskaya',
    description: '',
    capacity: 312,
    imageSrc: '',
    createdAt: Date.now(),
    type: PlaceType.Metro,
  },
]

export default class PlacesApi {
  public getAll(): Promise<IPlace[]> {
    return new Promise((resolve) => {
      setTimeout(()=> resolve(FAKE_DATA), 1000)
    })
  };
}