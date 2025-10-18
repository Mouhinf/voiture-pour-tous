
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { addVehicle, getAllVehicles, VehicleWithDocId } from '@/lib/vehicles';
import type { Vehicle, VehicleImage } from '@/types/vehicle';

export default function AdminPage() {
  // Authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const adminAuth = localStorage.getItem('isAdminAuthenticated');
    if (adminAuth !== 'true') {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  // Vehicle List
  const [vehicles, setVehicles] = useState<VehicleWithDocId[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Form State
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState(new Date().getFullYear());
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');
  const [images, setImages] = useState('');
  const [listingType, setListingType] = useState<'sale' | 'rent'>('sale');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Fetch all vehicles
  const fetchVehicles = async () => {
    setIsLoading(true);
    try {
        const fetchedVehicles = await getAllVehicles();
        setVehicles(fetchedVehicles);
    } catch (error) {
        console.error("Failed to fetch vehicles:", error);
        setError("Could not load vehicle list.");
    } finally {
        setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchVehicles();
    }
  }, [isAuthenticated]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    if (!make || !model) {
      setError('La marque et le modèle sont requis.');
      setIsSubmitting(false);
      return;
    }

    const imagesArray: VehicleImage[] = images.split('\n').filter(url => url.trim() !== '').map((url, index) => ({
        id: `${Date.now()}-${index}`,
        url: url.trim(),
        hint: `${make} ${model} image ${index + 1}`
    }));

    const newVehicleData: Omit<Vehicle, 'id'> = {
        make, model, year, price, description,
        features: features.split('\n').map(f => f.trim()).filter(f => f),
        listingType,
        images: imagesArray,
        mileage: 0, fuelType: 'Petrol', transmission: 'Automatic', isLocallyAssembled: false, 
    };

    try {
        await addVehicle(newVehicleData);
        setSuccess(true);
        // Reset form and reload vehicle list
        setMake(''); setModel(''); setYear(new Date().getFullYear()); setPrice(0);
        setDescription(''); setFeatures(''); setListingType('sale'); setImages('');
        fetchVehicles(); // Refresh the list
    } catch (e) {
        setError("Échec de l'ajout du véhicule.");
    } finally {
        setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return <div className="flex items-center justify-center min-h-screen"><p>Redirection...</p></div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Ajouter un nouveau véhicule</h2>
        <form onSubmit={handleSubmit}>
            {error && <p className="bg-red-100 text-red-700 p-3 rounded-md mb-4">{error}</p>}
            {success && <p className="bg-green-100 text-green-700 p-3 rounded-md mb-4">Véhicule ajouté !</p>}
            
             <div className="mb-4">
                <label htmlFor="listingType" className="block text-gray-700 font-medium mb-2">Type d'annonce</label>
                <select id="listingType" value={listingType} onChange={e => setListingType(e.target.value as 'sale' | 'rent')} className="w-full px-4 py-2 border border-gray-300 rounded-md">
                  <option value="sale">À Vendre</option>
                  <option value="rent">À Louer</option>
                </select>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label htmlFor="make" className="block text-gray-700 font-medium mb-2">Marque</label>
                <input type="text" id="make" value={make} onChange={e => setMake(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md" required />
              </div>
              <div>
                <label htmlFor="model" className="block text-gray-700 font-medium mb-2">Modèle</label>
                <input type="text" id="model" value={model} onChange={e => setModel(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                    <label htmlFor="year" className="block text-gray-700 font-medium mb-2">Année</label>
                    <input type="number" id="year" value={year} onChange={e => setYear(parseInt(e.target.value, 10))} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                    <label htmlFor="price" className="block text-gray-700 font-medium mb-2">Prix (F CFA)</label>
                    <input type="number" id="price" value={price} onChange={e => setPrice(parseInt(e.target.value, 10))} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
                <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-md"></textarea>
            </div>

            <div className="mb-6">
                <label htmlFor="features" className="block text-gray-700 font-medium mb-2">Caractéristiques (une par ligne)</label>
                <textarea id="features" value={features} onChange={e => setFeatures(e.target.value)} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md"></textarea>
            </div>
             <div className="mb-6">
                <label htmlFor="images" className="block text-gray-700 font-medium mb-2">Images (URLs, une par ligne)</label>
                <textarea id="images" value={images} onChange={e => setImages(e.target.value)} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md"></textarea>
            </div>
            
            <div className="flex justify-end">
              <button type="submit" disabled={isSubmitting} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-blue-300">
                {isSubmitting ? 'Ajout... ' : 'Ajouter'}
              </button>
            </div>
        </form>
      </div>

      {/* Vehicle List Section */}
       <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Inventaire des véhicules</h2>
        {isLoading ? (
          <p>Chargement de l'inventaire...</p>
        ) : vehicles.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Véhicule</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annonce</th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Modifier</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.docId}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{vehicle.make} {vehicle.model}</div>
                      <div className="text-sm text-gray-500">{vehicle.year}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{new Intl.NumberFormat('fr-FR').format(vehicle.price)} F CFA</div>
                    </td>
                     <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${ vehicle.listingType === 'sale' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800' }`}>
                            {vehicle.listingType === 'sale' ? 'Vente' : 'Location'}
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href={`/admin/edit/${vehicle.docId}`} className="text-indigo-600 hover:text-indigo-900">
                        Modifier
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Aucun véhicule dans l'inventaire pour le moment.</p>
        )}
      </div>

    </div>
  );
}
