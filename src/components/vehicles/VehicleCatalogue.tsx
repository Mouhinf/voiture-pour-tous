
'use client';

import { useState, useMemo } from 'react';
import type { Vehicle } from '@/types/vehicle';
import { VehicleCard } from './VehicleCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type Filters = {
  searchTerm: string;
  make: string;
  fuelType: string;
  priceRange: [number, number];
};

export function VehicleCatalogue({ 
  initialVehicles,
  listingType,
  title,
  subtitle,
}: { 
  initialVehicles: Vehicle[];
  listingType: 'sale' | 'rent';
  title: string;
  subtitle: string;
}) {
  const prices = initialVehicles.length > 0 ? initialVehicles.map(v => v.price) : [0];
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices, 1); // Ensure maxPrice is always greater than minPrice

  const [filters, setFilters] = useState<Filters>({
    searchTerm: '',
    make: 'all',
    fuelType: 'all',
    priceRange: [minPrice, maxPrice],
  });
  const { toast } = useToast();

  const makes = useMemo(() => ['all', ...new Set(initialVehicles.map((v) => v.make))], [initialVehicles]);
  const fuelTypes = useMemo(() => ['all', ...new Set(initialVehicles.map((v) => v.fuelType))], [initialVehicles]);

  const handleFilterChange = (key: keyof Filters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetAllFilters = () => {
    setFilters({
      searchTerm: '',
      make: 'all',
      fuelType: 'all',
      priceRange: [minPrice, maxPrice],
    });
     toast({
        title: "Filtres réinitialisés",
        description: `Affichage de tous les véhicules disponibles à la ${listingType === 'sale' ? 'vente' : 'location'}.`,
    });
  };

  const filteredVehicles = useMemo(() => {
    return initialVehicles.filter((vehicle) => {
      const { searchTerm, make, fuelType, priceRange } = filters;
      const searchLower = searchTerm.toLowerCase();

      return (
        (searchTerm === '' ||
          vehicle.make.toLowerCase().includes(searchLower) ||
          vehicle.model.toLowerCase().includes(searchLower)) &&
        (make === 'all' || vehicle.make === make) &&
        (fuelType === 'all' || vehicle.fuelType === fuelType) &&
        (vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1])
      );
    });
  }, [filters, initialVehicles]);

  const priceFormatter = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF', minimumFractionDigits: 0 });

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-5xl text-primary tracking-wider">
          {title}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {initialVehicles.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">Aucun véhicule disponible pour le moment.</p>
        </div>
      ) : (
        <>
          <Accordion type="single" collapsible className="w-full" defaultValue="filters">
            <AccordionItem value="filters">
              <AccordionTrigger className="text-lg font-headline">Filtres de Recherche</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-card rounded-lg border">
                  {/* Manual Filters */}
                  <Input
                    placeholder="Rechercher par marque ou modèle..."
                    value={filters.searchTerm}
                    onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
                    className="lg:col-span-2"
                  />
                  <Select value={filters.make} onValueChange={(value) => handleFilterChange('make', value)}>
                    <SelectTrigger><SelectValue placeholder="Marque" /></SelectTrigger>
                    <SelectContent>
                      {makes.map((make) => <SelectItem key={make} value={make}>{make === 'all' ? 'Toutes les marques' : make}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <Select value={filters.fuelType} onValueChange={(value) => handleFilterChange('fuelType', value)}>
                    <SelectTrigger><SelectValue placeholder="Carburant" /></SelectTrigger>
                    <SelectContent>
                      {fuelTypes.map((fuel) => <SelectItem key={fuel} value={fuel}>{fuel === 'all' ? 'Tous les carburants' : fuel}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <div className="lg:col-span-4">
                      <label className="block text-sm font-medium mb-2">Fourchette de prix ({listingType === 'rent' ? '/ jour' : ''})</label>
                      <Slider
                          min={minPrice}
                          max={maxPrice}
                          step={listingType === 'rent' ? 10 : 1000}
                          value={[filters.priceRange[1]]}
                          onValueChange={([val]) => handleFilterChange('priceRange', [minPrice, val])}
                      />
                      <div className="text-sm text-muted-foreground mt-2">Jusqu'à: {priceFormatter.format(filters.priceRange[1])}</div>
                  </div>
                </div>
                <div className="flex justify-end p-4">
                    <Button variant="ghost" onClick={resetAllFilters} className="text-primary hover:text-primary">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Réinitialiser les filtres
                    </Button>
                  </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>


          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">Aucun véhicule ne correspond à vos critères de recherche.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
