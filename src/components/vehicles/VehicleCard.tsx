
'use client';

import type { Vehicle } from '@/types/vehicle';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Fuel, Gauge, Wrench } from 'lucide-react';

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const formatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF',
    currencyDisplay: 'code', // Use code to avoid symbol discrepancies
    minimumFractionDigits: 0,
  });
  
  const formattedPrice = formatter.format(vehicle.price).replace('XOF', '').trim();
  const priceDisplay = vehicle.listingType === 'rent'
    ? `${formattedPrice} FCFA / jour`
    : `${formattedPrice} FCFA`;

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
      <Link href={`/vehicles/${vehicle.id}`} className="flex flex-col h-full">
        <CardHeader className="p-0">
          <div className="relative h-56 w-full">
            <Image
              src={vehicle.images[0].url}
              alt={`${vehicle.make} ${vehicle.model}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={vehicle.images[0].hint}
            />
             <div className="absolute top-2 left-2 flex flex-col gap-2">
               {vehicle.isLocallyAssembled && (
                <Badge variant="default" className="bg-primary text-primary-foreground">Assemblage Local</Badge>
               )}
               <Badge variant="secondary">{vehicle.listingType === 'sale' ? 'À Vendre' : 'À Louer'}</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <CardTitle className="font-headline text-xl mb-2">{`${vehicle.make} ${vehicle.model}`}</CardTitle>
          <div className="text-muted-foreground text-sm space-y-2">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> <span>{vehicle.year}</span></div>
            {vehicle.mileage > 0 && (
              <div className="flex items-center gap-2"><Gauge className="w-4 h-4" /> <span>{vehicle.mileage.toLocaleString('fr-FR')} km</span></div>
            )}
            <div className="flex items-center gap-2"><Fuel className="w-4 h-4" /> <span>{vehicle.fuelType}</span></div>
            <div className="flex items-center gap-2"><Wrench className="w-4 h-4" /> <span>{vehicle.transmission}</span></div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
            <p className="text-lg font-bold text-primary">{priceDisplay}</p>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
              Voir détails <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </CardFooter>
      </Link>
    </Card>
  );
}
