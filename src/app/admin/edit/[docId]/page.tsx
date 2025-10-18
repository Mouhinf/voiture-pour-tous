
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getVehicleByDocId, updateVehicle, deleteVehicle, VehicleWithDocId } from '@/lib/vehicles';
import type { Vehicle, VehicleImage } from '@/types/vehicle';

export default function EditVehiclePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const params = useParams();
  const docId = Array.isArray(params.docId) ? params.docId[0] : params.docId;

  const [vehicle, setVehicle] = useState<VehicleWithDocId | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [imagesText, setImagesText] = useState('');

  useEffect(() => {
    const adminAuth = localStorage.getItem('isAdminAuthenticated');
    if (adminAuth !== 'true') {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  useEffect(() => {
    if (!docId || !isAuthenticated) return;

    const fetchVehicle = async () => {
      try {
        setIsLoading(true);
        const fetchedVehicle = await getVehicleByDocId(docId);
        if (fetchedVehicle) {
          setVehicle(fetchedVehicle);
          // Populate the textarea for images
          setImagesText(fetchedVehicle.images.map(img => img.url).join('\n'));
        } else {
          setError('Véhicule non trouvé.');
        }
      } catch (e) {
        setError("Erreur lors du chargement du véhicule.");
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVehicle();
  }, [docId, isAuthenticated]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (vehicle) {
        let parsedValue: string | number | 'sale' | 'rent' = value;
        if (name === 'year' || name === 'price' || name === 'mileage') {
            parsedValue = parseInt(value, 10) || 0;
        }
        if (name === 'listingType') {
            parsedValue = value as 'sale' | 'rent';
        }
        setVehicle({ ...vehicle, [name]: parsedValue });
    }
  };

  const handleFeaturesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (vehicle) {
        const featuresArray = e.target.value.split('\n').map(f => f.trim());
        setVehicle({ ...vehicle, features: featuresArray });
    }
  };

    const handleImagesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setImagesText(e.target.value);
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!vehicle) return;

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const imagesArray: VehicleImage[] = imagesText.split('\n').filter(url => url.trim() !== '').map((url, index) => ({
        id: `${Date.now()}-${index}`,
        url: url.trim(),
        hint: `${vehicle.make} ${vehicle.model} image ${index + 1}`
    }));

    try {
      const { docId: vehicleDocId, ...vehicleData } = vehicle;
      const updatedData = { ...vehicleData, images: imagesArray } as Partial<Vehicle>;
      await updateVehicle(vehicleDocId, updatedData);
      setSuccess(true);
    } catch (e) {
      setError("Échec de la mise à jour du véhicule.");
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!vehicle || !window.confirm("Êtes-vous sûr de vouloir supprimer ce véhicule ? Cette action est irréversible.")) {
      return;
    }

    setIsSubmitting(true);
    try {
      await deleteVehicle(vehicle.docId);
      router.push('/admin'); // Redirect to the admin list after deletion
    } catch (e) {
      setError("Échec de la suppression du véhicule.");
      console.error(e);
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated || isLoading) {
    return <div className="flex items-center justify-center min-h-screen"><p>Chargement...</p></div>;
  }

  if (error && !vehicle) {
      return <div className="container mx-auto px-4 py-8 text-center"><p className="text-red-600">{error}</p></div>;
  }

  if (!vehicle) {
    return <div className="container mx-auto px-4 py-8 text-center"><p>Aucun véhicule trouvé.</p></div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Modifier le véhicule</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        {error && <p className="bg-red-100 text-red-700 p-3 rounded-md mb-4">{error}</p>}
        {success && <p className="bg-green-100 text-green-700 p-3 rounded-md mb-4">Véhicule mis à jour avec succès !</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
           <div>
              <label htmlFor="listingType" className="block text-gray-700 font-medium mb-2">Type d'annonce</label>
              <select id="listingType" name="listingType" value={vehicle.listingType} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md">
                  <option value="sale">À Vendre</option>
                  <option value="rent">À Louer</option>
              </select>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label htmlFor="make" className="block text-gray-700 font-medium mb-2">Marque</label>
            <input type="text" id="make" name="make" value={vehicle.make} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" required />
          </div>
          <div>
            <label htmlFor="model" className="block text-gray-700 font-medium mb-2">Modèle</label>
            <input type="text" id="model" name="model" value={vehicle.model} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
                <label htmlFor="year" className="block text-gray-700 font-medium mb-2">Année</label>
                <input type="number" id="year" name="year" value={vehicle.year} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
                <label htmlFor="price" className="block text-gray-700 font-medium mb-2">Prix (en F CFA)</label>
                <input type="number" id="price" name="price" value={vehicle.price} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
        </div>

        <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea id="description" name="description" value={vehicle.description} onChange={handleInputChange} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md"></textarea>
        </div>

        <div className="mb-6">
            <label htmlFor="features" className="block text-gray-700 font-medium mb-2">Caractéristiques (une par ligne)</label>
            <textarea id="features" name="features" value={vehicle.features.join('\n')} onChange={handleFeaturesChange} rows={6} className="w-full px-4 py-2 border border-gray-300 rounded-md"></textarea>
        </div>
         <div className="mb-6">
            <label htmlFor="images" className="block text-gray-700 font-medium mb-2">Images (URLs, une par ligne)</label>
            <textarea id="images" name="images" value={imagesText} onChange={handleImagesChange} rows={6} className="w-full px-4 py-2 border border-gray-300 rounded-md"></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleDelete}
            disabled={isSubmitting}
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 disabled:bg-red-300"
          >
            Supprimer
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-blue-300"
          >
            {isSubmitting ? 'Mise à jour...' : 'Mettre à jour'}
          </button>
        </div>
      </form>
    </div>
  );
}
