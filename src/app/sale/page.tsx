
import { VehicleCatalogue } from '@/components/vehicles/VehicleCatalogue';
import { getAllVehicles } from '@/lib/vehicles';

export default async function SalePage() {
  const allVehicles = await getAllVehicles();
  const saleVehicles = allVehicles.filter(v => v.listingType === 'sale');

  return (
    <VehicleCatalogue 
      initialVehicles={saleVehicles}
      listingType="sale"
      title="Acheter un Véhicule"
      subtitle="Parcourez notre collection de véhicules neufs et d'occasion à vendre."
    />
  );
}
