
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { VehicleCard } from '@/components/vehicles/VehicleCard';
import { getAllVehicles } from '@/lib/vehicles';
import { ArrowRight, KeyRound, ShoppingCart, Car, Building, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const vehicles = await getAllVehicles();
  const featuredSaleVehicles = vehicles.filter(v => v.listingType === 'sale').slice(0, 3);
  const featuredRentVehicles = vehicles.filter(v => v.listingType === 'rent').slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white bg-sky-600">
        <Image
          src="https://picsum.photos/seed/factory/1920/1080"
          alt="Usine de montage Voiture pour tous"
          fill
          className="object-cover -z-10 brightness-50"
          priority
          data-ai-hint="car factory"
        />
        <div className="container px-4 space-y-6">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl tracking-wider drop-shadow-lg">
            Voiture pour tous: Pionnier de l'Automobile
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto drop-shadow-md">
            Votre plateforme qui vous simplifie l'achat et la location de voiture, Voiture pour tous construit l'avenir de l'industrie automobile régionale.
          </p>
           <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/sale">
                <ShoppingCart className="mr-2" />
                Acheter un véhicule
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link href="/rent">
                <KeyRound className="mr-2" />
                Louer un véhicule
              </Link>
            </Button>
          </div>
          <div className="pt-4">
            <Button asChild variant="link" className="text-white hover:text-white/80 px-0 text-lg">
                <Link href="/about">
                En savoir plus sur notre histoire
                <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="border-none bg-transparent shadow-none">
                <CardHeader className="items-center">
                    <div className="bg-primary/10 p-4 rounded-full">
                        <Car className="h-10 w-10 text-primary"/>
                    </div>
                    <CardTitle className="font-headline text-2xl pt-2">Vente de Véhicules</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Un large choix de voitures neuves et d'occasion, inspectées et garanties.</p>
                </CardContent>
            </Card>
             <Card className="border-none bg-transparent shadow-none">
                <CardHeader className="items-center">
                    <div className="bg-primary/10 p-4 rounded-full">
                        <KeyRound className="h-10 w-10 text-primary"/>
                    </div>
                    <CardTitle className="font-headline text-2xl pt-2">Location Flexible</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Des solutions de location courte et longue durée adaptées à vos besoins.</p>
                </CardContent>
            </Card>
             <Card className="border-none bg-transparent shadow-none">
                <CardHeader className="items-center">
                    <div className="bg-primary/10 p-4 rounded-full">
                         <Building className="h-10 w-10 text-primary"/>
                    </div>
                    <CardTitle className="font-headline text-2xl pt-2">Assemblage Local</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Fiers de contribuer à l'économie locale avec nos véhicules assemblés au Sénégal.</p>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* Featured Sale Section */}
      <section className="container mx-auto px-4">
        <Card className="bg-background">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="font-headline text-3xl flex items-center gap-3">
                <ShoppingCart className="text-primary" />
                Nos Véhicules à Vendre
              </CardTitle>
              <Button asChild variant="ghost">
                <Link href="/sale">
                  Voir tout <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredSaleVehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
      
      {/* Featured Rent Section */}
      <section className="container mx-auto px-4">
        <Card className="bg-background">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="font-headline text-3xl flex items-center gap-3">
                <KeyRound className="text-primary" />
                Disponibles à la Location
              </CardTitle>
              <Button asChild variant="ghost">
                <Link href="/rent">
                  Voir tout <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRentVehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-8">
            <h2 className="font-headline text-3xl md:text-4xl text-primary tracking-wider">
                Ce que disent nos clients
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
                <CardHeader className="flex-row items-center gap-4">
                    <Image src="https://picsum.photos/seed/avatar1/40/40" alt="Avatar client" width={40} height={40} className="rounded-full" data-ai-hint="man portrait"/>
                    <div>
                        <p className="font-semibold">Moussa Diop</p>
                        <div className="flex text-yellow-500">
                            <Star className="w-4 h-4 fill-current"/>
                            <Star className="w-4 h-4 fill-current"/>
                            <Star className="w-4 h-4 fill-current"/>
                            <Star className="w-4 h-4 fill-current"/>
                            <Star className="w-4 h-4 fill-current"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground italic">"Excellent service ! J'ai acheté ma Seniran Samand et je suis très satisfait. Robuste et économique, parfaite pour Dakar."</p>
                </CardContent>
            </Card>
            <Card>
                 <CardHeader className="flex-row items-center gap-4">
                    <Image src="https://picsum.photos/seed/avatar2/40/40" alt="Avatar client" width={40} height={40} className="rounded-full" data-ai-hint="woman portrait"/>
                    <div>
                        <p className="font-semibold">Aïssatou Fall</p>
                        <div className="flex text-yellow-500">
                            <Star className="w-4 h-4 fill-current"/>
                            <Star className="w-4 h-4 fill-current"/>
                            <Star className="w-4 h-4 fill-current"/>
                            <Star className="w-4 h-4 fill-current"/>
                            <Star className="w-4 h-4 fill-current"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground italic">"J'ai loué un Hilux pour un déplacement en région. Le véhicule était en parfait état et le processus de location a été très simple et rapide."</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex-row items-center gap-4">
                    <Image src="https://picsum.photos/seed/avatar3/40/40" alt="Avatar client" width={40} height={40} className="rounded-full" data-ai-hint="man portrait"/>
                    <div>
                        <p className="font-semibold">Ibrahima Sow</p>
                        <div className="flex text-yellow-500">
                            <Star className="w-4 h-4 fill-current"/>
                            <Star className="w-4 h-4 fill-current"/>
                            <Star className="w-4 h-4 fill-current"/>
                            <Star className="w-4 h-4 fill-current"/>
                            <Star className="w-4 h-4 "/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground italic">"Le personnel est très professionnel. Bon suivi et conseils avisés pour l'achat de mon véhicule professionnel. Je recommande."</p>
                </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}
