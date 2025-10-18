
'use client';

import { useState, useMemo, useEffect } from 'react';
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
  model: string;
  year: string;
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
  const maxPrice = Math.max(...prices, 1);

  const [filters, setFilters] = useState<Filters>({
    searchTerm: '',
    make: 'all',
    model: 'all',
    year: 'all',
    priceRange: [minPrice, maxPrice],
  });
  const { toast } = useToast();

  const makes = useMemo(() => ['all', ...new Set(initialVehicles.map((v) => v.make))], [initialVehicles]);
  const models = useMemo(() => {
      if (filters.make === 'all') return ['all'];
      const relevantModels = initialVehicles.filter(v => v.make === filters.make).map(v => v.model);
      return ['all', ...new Set(relevantModels)];
  }, [initialVehicles, filters.make]);
  const years = useMemo(() => ['all', ...new Set(initialVehicles.map((v) => v.year.toString()))].sort((a,b) => b.localeCompare(a)), [initialVehicles]);


  useEffect(() => {
    // Reset model if the selected make doesn't have it
    if (filters.make !== 'all' && !models.includes(filters.model)) {
      handleFilterChange('model', 'all');
    }
  }, [filters.make, models, filters.model]);

  const handleFilterChange = (key: keyof Filters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetAllFilters = () => {
    setFilters({
      searchTerm: '',
      make: 'all',
      model: 'all',
      year: 'all',
      priceRange: [minPrice, maxPrice],
    });
     toast({
        title: "Filtres réinitialisés",
        description: `Affichage de tous les véhicules disponibles à la ${listingType === 'sale' ? 'vente' : 'location'}.`,
    });
  };

  const filteredVehicles = useMemo(() => {
    return initialVehicles.filter((vehicle) => {
      const { searchTerm, make, model, year, priceRange } = filters;
      const searchLower = searchTerm.toLowerCase();

      return (
        (searchTerm === '' ||
          vehicle.make.toLowerCase().includes(searchLower) ||
          vehicle.model.toLowerCase().includes(searchLower)) &&
        (make === 'all' || vehicle.make === make) &&
        (model === 'all' || vehicle.model === model) &&
        (year === 'all' || vehicle.year.toString() === year) &&
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
              <AccordionTrigger className="text-lg font-headline">Filtres de Recherche Avancée</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-card rounded-lg border">
                  <Input
                    placeholder="Recherche rapide..."
                    value={filters.searchTerm}
                    onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
                    className="lg:col-span-4"
                  />
                  <Select value={filters.make} onValueChange={(value) => handleFilterChange('make', value)}>
                    <SelectTrigger><SelectValue placeholder="Marque" /></SelectTrigger>
                    <SelectContent>
                      {makes.map((make) => <SelectItem key={make} value={make}>{make === 'all' ? 'Toutes les marques' : make}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <Select value={filters.model} onValueChange={(value) => handleFilterChange('model', value)} disabled={filters.make === 'all'}>
                    <SelectTrigger><SelectValue placeholder="Modèle" /></SelectTrigger>
                    <SelectContent>
                      {models.map((model) => <SelectItem key={model} value={model}>{model === 'all' ? 'Tous les modèles' : model}</SelectItem>)}
                    </SelectContent>
                  </Select>
                   <Select value={filters.year} onValueChange={(value) => handleFilterChange('year', value)}>
                    <SelectTrigger><SelectValue placeholder="Année" /></SelectTrigger>
                    <SelectContent>
                      {years.map((year) => <SelectItem key={year} value={year}>{year === 'all' ? 'Toutes les années' : year}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <div className="lg:col-span-4 space-y-4">
                      <label className="block text-sm font-medium">Fourchette de prix ({listingType === 'rent' ? '/ jour' : ''})</label>
                      <Slider
                          min={minPrice}
                          max={maxPrice}
                          step={listingType === 'rent' ? 10 : 1000}
                          value={filters.priceRange}
                          onValueChange={(value) => handleFilterChange('priceRange', value)}
                          minStepsBetweenThumbs={1}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{priceFormatter.format(filters.priceRange[0])}</span>
                        <span>{priceFormatter.format(filters.priceRange[1])}</span>
                      </div>
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
