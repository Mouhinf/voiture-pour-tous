export type VehicleImage = {
  id: string;
  url: string;
  hint: string;
  type?: 'image' | 'video';
};

export type Vehicle = {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Automatic' | 'Manual';
  description: string;
  features: string[];
  isLocallyAssembled: boolean;
  images: VehicleImage[];
  listingType: 'sale' | 'rent';
};
