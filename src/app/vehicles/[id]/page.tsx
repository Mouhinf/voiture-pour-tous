
import { getVehicleById } from '@/lib/vehicles';
import { notFound } from 'next/navigation';
import VehicleDetailClient from '@/components/vehicles/VehicleDetailClient';


export default async function VehicleDetailPage({ params }: { params: { id: string } }) {
  const vehicle = await getVehicleById(params.id);

  if (!vehicle) {
    notFound();
  }

  return <VehicleDetailClient vehicle={vehicle} />;
}
