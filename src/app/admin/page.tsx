
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { addVehicle, getAllVehicles, VehicleWithDocId } from '@/lib/vehicles';
import type { Vehicle, VehicleImage } from '@/types/vehicle';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const [vehicles, setVehicles] = useState<VehicleWithDocId[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState<number | ''>('');
  const [price, setPrice] = useState<number | ''>('');
  const [description, setDescription] = useState('');
  const [engine, setEngine] = useState('');
  const [mileage, setMileage] = useState<number | ''>('');
  const [fuelType, setFuelType] = useState('');
  const [transmission, setTransmission] = useState('');
  const [features, setFeatures] = useState('');
  const [imagesText, setImagesText] = useState('');
  const [listingType, setListingType] = useState<'sale' | 'rent'>('sale');

  useEffect(() => {
    const adminAuth = localStorage.getItem('isAdminAuthenticated');
    if (adminAuth !== 'true') {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchVehicles();
    }
  }, [isAuthenticated]);

  const fetchVehicles = async () => {
    try {
      setIsLoading(true);
      const fetchedVehicles = await getAllVehicles();
      setVehicles(fetchedVehicles);
    } catch (e) {
      setError("Erreur lors du chargement des véhicules.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!make || !model || !year || !price) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    const imagesArray: VehicleImage[] = imagesText.split('\n').filter(url => url.trim() !== '').map((url, index) => ({
        id: `${Date.now()}-${index}`,
        url: url.trim(),
        hint: `${make} ${model} image ${index + 1}`
    }));

    const newVehicle: Omit<Vehicle, 'id'> = {
      make,
      model,
      year,
      price,
      description,
      engine,
      mileage: mileage || 0,
      fuelType,
      transmission,
      features: features.split('\n').map(f => f.trim()),
      images: imagesArray,
      isFeatured: false,
      listingType,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    try {
      await addVehicle(newVehicle);
      // Reset form
      setMake(''); setModel(''); setYear(''); setPrice(''); setDescription('');
      setEngine(''); setMileage(''); setFuelType(''); setTransmission('');
      setFeatures(''); setImagesText(''); setListingType('sale');
      setError(null);
      // Refresh the list
      fetchVehicles();
    } catch (e) {
      setError("Échec de l'ajout du véhicule.");
      console.error(e);
    }
  };

  if (!isAuthenticated) {
    // This will be briefly visible before the redirect happens.
    return <div className="flex items-center justify-center min-h-screen"><p>Redirection vers la page de connexion...</p></div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-primary">Ajouter un nouveau véhicule</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          {error && <p className="bg-red-100 text-red-700 p-3 rounded-md mb-4">{error}</p>}
          
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                  <label htmlFor="listingType" className="block text-gray-700 font-medium mb-2">Type d'annonce</label>
                  <select id="listingType" value={listingType} onChange={(e) => setListingType(e.target.value as 'sale' | 'rent')} className="w-full px-4 py-2 border border-gray-300 rounded-md text-black">
                      <option value="sale">À Vendre</option>
                      <option value="rent">À Louer</option>
                  </select>
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label htmlFor="make" className="block text-gray-700 font-medium mb-2">Marque</label>
              <input type="text" id="make" value={make} onChange={(e) => setMake(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md text-black" required />
            </div>
            <div>
              <label htmlFor="model" className="block text-gray-700 font-medium mb-2">Modèle</label>
              <input type="text" id="model" value={model} onChange={(e) => setModel(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md text-black" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                  <label htmlFor="year" className="block text-gray-700 font-medium mb-2">Année</label>
                  <input type="number" id="year" value={year} onChange={(e) => setYear(Number(e.target.value))} className="w-full px-4 py-2 border border-gray-300 rounded-md text-black" required />
              </div>
              <div>
                  <label htmlFor="price" className="block text-gray-700 font-medium mb-2">Prix (en F CFA)</label>
                  <input type="number" id="price" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full px-4 py-2 border border-gray-300 rounded-md text-black" required />
              </div>
          </div>
          
          <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
              <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"></textarea>
          </div>

          <div className="mb-6">
              <label htmlFor="features" className="block text-gray-700 font-medium mb-2">Caractéristiques (une par ligne)</label>
              <textarea id="features" value={features} onChange={(e) => setFeatures(e.target.value)} rows={6} className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"></textarea>
          </div>
          
          <div className="mb-6">
              <label htmlFor="images" className="block text-gray-700 font-medium mb-2">Images (URLs, une par ligne)</label>
              <textarea id="images" value={imagesText} onChange={(e) => setImagesText(e.target.value)} rows={6} className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"></textarea>
          </div>

          <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Ajouter</button>
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-primary">Inventaire des véhicules</h2>
        {isLoading ? (
          <p>Chargement...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ul className="space-y-4">
              {vehicles.map((vehicle) => (
                <li key={vehicle.docId} className="flex items-center justify-between p-4 border-b last:border-b-0">
                  <div>
                      <p className="font-semibold text-black">{vehicle.make} {vehicle.model} ({vehicle.year})</p>
                      <p className="text-sm text-gray-600">Type: {vehicle.listingType === 'sale' ? 'Vente' : 'Location'}</p>
                  </div>
                  <Link href={`/admin/edit/${vehicle.docId}`} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                      Modifier
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
