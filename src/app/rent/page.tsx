
import { VehicleCatalogue } from '@/components/vehicles/VehicleCatalogue';
import { getAllVehicles } from '@/lib/vehicles';

export default async function RentPage() {
  const allVehicles = await getAllVehicles();
  const rentVehicles = allVehicles.filter(v => v.listingType === 'rent');
  
  return (
    <VehicleCatalogue 
      initialVehicles={rentVehicles}
      listingType="rent"
      title="Louer un Véhicule"
      subtitle="Choisissez parmi notre flotte de véhicules fiables pour vos besoins de location."
    />
  );
}
