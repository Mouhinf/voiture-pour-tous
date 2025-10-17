
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Calendar, Fuel, Gauge, Info, Mail, Phone, PlayCircle, ShieldCheck, User, Wrench, X, CheckCircle } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import type { Vehicle, VehicleImage } from '@/types/vehicle';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-.88-.436-1.017-.486s-.282-.074-.41.074c-.13.149-.39.486-.479.56s-.18.099-.347.05c-.166-.05-.707-.26-.1342-1.21-.498-.758-.83-1.352-.92-1.57s-.18-.21-.258-.21c-.08 0-.165.00-.24.00-.074 0-.19.00-.282.00-.092 0-.24.05-.36.297-.12.246-.465 1.112-.465 1.112s-.465 1.28.02 2.52c.486 1.23 1.54 2.89 3.49 4.84.2.2.3.3.4.4.5.5 1 1 1.5 1s.8-.4.9-.7c.1-.3.1-.6.1-.7s-.1-.2-.2-.3c-.1-.1-.2-.2-.3-.3s-.1-.1-.2-.2c-.1-.1-.2-.1-.2-.2s-.1-.1-.1-.2c0-.1 0-.1 0-.2s0-.1.0-.1c.1-.3.2-.5.3-.7.1-.2.2-.4.3-.5.1-.2.2-.3.3-.4.2-.2.3-.3.4-.3s.2-.1.3-.1c.1 0 .2 0 .3.1s.4.2.5.3c.1.1.2.2.2.3s.1.2.1.3c0 .1 0 .2 0 .3s-.1.2-.1.3c0 0 0 0 0 0s-.1.1-.1.1c-.1.1-.2.2-.3.3s-.1.1-.1.2c0 .1-.1.1-.1.2s0 .1.0 .2c0 .1.0 .2.0 .2s.1.1.1.2c.1.1.1.1.2.2s.2.2.3.3c.1.1.2.2.3.3s.2.2.3.3c.1.1.2.2.3.3s.2.2.3.3c.1.1.2.2.3.3s.1.1.2.2c.1.1.1.2.2.2s.2.1.3.1c.1 0 .3 0 .4-.1s.4-.2.5-.3c.1-.1.2-.2.3-.3s.2-.2.3-.3c.1-.1.1-.2.2-.3s.1-.2.1-.3c.1-.1.1-.2.1-.3s0-.2.0-.3c0-.1-.1-.2-.1-.3s-.1-.2-.1-.2c-.1-.1-.1-.2-.2-.3s-.1-.2-.2-.3c-.1-.1-.2-.2-.2-.3s-.2-.2-.3-.3c-.1-.1-.2-.2-.3-.3s-.2-.2-.3-.3c-.1-.1-.2-.2-.3-.3s-.2-.2-.3-.3c-.1-.1-.2-.2-.3-.3s-.2-.2-.3-.3c-.1-.1-.2-.2-.3-.3s-.2-.2-.3-.3c-.1-.1-.2-.2-.3-.3s-.2-.2-.3-.3c-.1-.1-.2-.2-.3-.3s-.2-.2-.3-.3c-.1-.1-.2-.2-.3-.3s-.2-.2-.3-.3c-.5-.5-1-1-1.5-1.5s-.8-.8-1.1-1.1c-.3-.3-.6-.6-.8-.9s-.4-.6-.5-.9c-.1-.3-.1-.6-.1-.9s.1-.6.2-.8c.1-.2.3-.4.5-.6s.4-.3.6-.5c.2-.1.5-.2.7-.2.2 0 .5.1.7.2.2.1.4.3.6.5s.3.4.5.6c.2.2.3.5.4.7.1.2.2.5.2.8s.1.5.1.8c0 .2-.1.5-.2.7s-.2.5-.3.7c-.1.2-.3.4-.4.6s-.3.4-.5.5c-.2.1-.4.3-.6.4s-.4.2-.6.3c-.2.1-.5.1-.7.1s-.5-.1-.7-.2c-.2-.1-.4-.2-.6-.3s-.4-.3-.5-.5c-.1-.1-.3-.3-.4-.4s-.3-.3-.4-.5c-.1-.2-.2-.4-.3-.6s-.2-.4-.3-.6c-.1-.2-.1-.4-.1-.6s0-.4.0-.6c0-.2.1-.4.1-.6s.1-.3.2-.5c.1-.2.2-.3.3-.5s.2-.3.4-.5c.1-.1.3-.3.4-.4s.3-.2.4-.4c.1-.1.3-.2.4-.3.1-.1.2-.2.3-.3.1-.1.2-.2.3-.4.1-.1.2-.2.3-.3.1-.1.2-.3.3-.4.1-.1.2-.2.2-.4.1-.1.1-.3.2-.4.1-.1.1-.2.2-.4s.1-.2.1-.4c0-.1.0-.3.0-.4s.0-.3.0-.4.0-.2.0-.3.0-.2.0-.3.0-.1.0-.2.0-.1.0-.1-.1-.1-.1-.1c-.1-.1-.1-.1-.2-.2s-.1-.1-.2-.2c-.1-.1-.1-.1-.2-.2s-.1-.1-.2-.2c-.1 0-.1-.1-.2-.1s-.1-.1-.2-.1c-.1 0-.1 0-.1-.1zm-2.85-2.06c.3.6.6 1.3.9 2 .3.7.5 1.4.8 2.1.3.7.5 1.4.8 2.1.2.7.5 1.4.7 2.1.2.7.4 1.4.6 2.1.2.7.4 1.4.6 2.1.2.7.3 1.4.5 2.1.1.7.3 1.4.4 2.1.1.7.3 1.4.4 2.1.1.7.2 1.4.4 2.1.1.7.2 1.4.3 2.1.1.7.2 1.4.3 2.1.1.7.2 1.4.3 2s.1.7.2 1.1c.1.4.1.8.1 1.2s0 .8-.1 1.2c-.1.4-.1.8-.2 1.2s-.2.8-.3 1.2c-.1.4-.3.8-.4 1.2s-.3.8-.5 1.2c-.2.4-.4.8-.6 1.2s-.4.8-.7 1.2c-.2.4-.5.8-.8 1.2s-.6.8-.9 1.2c-.3.4-.7.8-1.1 1.1s-.8.6-1.2.9c-.4.3-.8.6-1.2.8s-.8.4-1.2.6c-.4.2-.8.3-1.2.4s-.8.2-1.2.2h-2.4c-.8 0-1.6-.1-2.4-.4s-1.5-.6-2.2-.9c-.7-.4-1.3-.8-1.9-1.3s-1.1-1-1.6-1.6c-.5-.5-1-1.1-1.3-1.6-.4-.6-.8-1.2-1.1-1.8s-.5-1.3-.6-1.9c-.2-.6-.3-1.3-.3-2s0-1.3.1-2c.1-.6.2-1.2.4-1.8.1-.6.3-1.2.5-1.8s.5-1.1.7-1.7c.2-.5.5-1.1.8-1.6s.6-1.1.9-1.6c.3-.5.7-1 .1-1.5s.8-.9 1.2-1.3c.4-.4.8-.8 1.2-1.1s.9-.6 1.3-.8c.4-.2.9-.4 1.3-.5s.9-.2 1.3-.2h.1z M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
    </svg>
  );

export default function VehicleDetailClient({ vehicle }: { vehicle: Vehicle }) {
  const [selectedMedia, setSelectedMedia] = useState<VehicleImage | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  
  const phoneNumber = '+221777655061';
  const whatsappMessage = `Bonjour, je suis intéressé(e) par le véhicule ${vehicle.make} ${vehicle.model} (${vehicle.year}). Pourriez-vous m'en dire plus ?`;

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

  const openModal = (media: VehicleImage) => {
    setSelectedMedia(media);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to a server.
    setIsFormSubmitted(true);
  };

  const resetFormDialog = () => {
    setIsFormSubmitted(false);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Carousel className="w-full">
            <CarouselContent>
              {vehicle.images.map((media, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden cursor-pointer" onClick={() => openModal(media)}>
                    <CardContent className="p-0 aspect-[4/3] relative">
                      <Image
                        src={media.type === 'video' && vehicle.images[0] ? vehicle.images[0].url : media.url}
                        alt={`${vehicle.make} ${vehicle.model} - vue ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority={index === 0}
                        data-ai-hint={media.hint}
                      />
                      {media.type === 'video' && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <PlayCircle className="h-16 w-16 text-white" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-16" />
            <CarouselNext className="mr-16" />
          </Carousel>
        </div>

        <div className="space-y-6">
          <div className="flex gap-2 items-center">
            {vehicle.isLocallyAssembled && (
              <Badge className="bg-primary text-primary-foreground">Assemblage Local</Badge>
            )}
             <Badge variant="secondary">{vehicle.listingType === 'sale' ? 'À Vendre' : 'À Louer'}</Badge>
          </div>
          <h1 className="font-headline text-4xl md:text-5xl">{vehicle.make} {vehicle.model}</h1>
          <p className="text-3xl font-bold text-primary">{priceDisplay}</p>
          <p className="text-lg text-muted-foreground">{vehicle.description}</p>
          
          <Separator />

          <div className="grid grid-cols-2 gap-4 text-lg">
             <div className="flex items-center gap-3"><Calendar className="text-primary" /><span>{vehicle.year}</span></div>
             {vehicle.mileage > 0 && (
                <div className="flex items-center gap-3"><Gauge className="text-primary" /><span>{vehicle.mileage.toLocaleString('fr-FR')} km</span></div>
             )}
             <div className="flex items-center gap-3"><Fuel className="text-primary" /><span>{vehicle.fuelType}</span></div>
             <div className="flex items-center gap-3"><Wrench className="text-primary" /><span>{vehicle.transmission}</span></div>
          </div>
          
          <Separator />

          <div>
             <h3 className="font-headline text-2xl mb-4">Caractéristiques Clés</h3>
             <ul className="space-y-2">
                {vehicle.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3">
                        <ShieldCheck className="h-5 w-5 text-green-600" />
                        <span>{feature}</span>
                    </li>
                ))}
             </ul>
          </div>
          
          <Card className="bg-accent/30 border-accent">
            <CardHeader>
                <CardTitle className="font-headline text-xl">
                  Intéressé(e) par ce véhicule ?
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p>Contactez-nous pour {vehicle.listingType === 'sale' ? 'acheter' : 'louer'} ce véhicule ou pour toute question.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <Dialog onOpenChange={(open) => !open && resetFormDialog()}>
                        <DialogTrigger asChild>
                            <Button size="lg" className="w-full">
                                <Info className="mr-2" />
                                Formulaire
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[480px]">
                          {isFormSubmitted ? (
                            <div className="text-center py-8 px-4">
                               <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                               <DialogHeader>
                                   <DialogTitle className="font-headline text-2xl">Demande envoyée !</DialogTitle>
                                   <DialogDescription>
                                       Merci pour votre intérêt. Un conseiller Voiture pour tous vous contactera très prochainement pour donner suite à votre demande.
                                   </DialogDescription>
                               </DialogHeader>
                               <DialogClose asChild>
                                   <Button className="mt-6" onClick={resetFormDialog}>Fermer</Button>
                               </DialogClose>
                            </div>
                          ) : (
                            <>
                              <DialogHeader>
                                  <DialogTitle className="font-headline text-2xl">Formulaire de contact</DialogTitle>
                                  <DialogDescription>
                                      Un de nos conseillers vous contactera sous peu concernant le véhicule : <br/>
                                      <span className="font-semibold text-primary">{vehicle.make} {vehicle.model} ({vehicle.year})</span>
                                  </DialogDescription>
                              </DialogHeader>
                              <form className="space-y-4 py-4" onSubmit={handleFormSubmit}>
                                  <div className="space-y-2">
                                      <Label htmlFor="name" className="flex items-center gap-2"><User className="w-4 h-4" />Nom complet</Label>
                                      <Input id="name" placeholder="Votre nom complet" required />
                                  </div>
                                  <div className="space-y-2">
                                      <Label htmlFor="phone" className="flex items-center gap-2"><Phone className="w-4 h-4" />Numéro de téléphone</Label>
                                      <Input id="phone" type="tel" placeholder="Votre numéro de téléphone" required />
                                  </div>
                                   <div className="space-y-2">
                                      <Label htmlFor="email" className="flex items-center gap-2"><Mail className="w-4 h-4" />Adresse e-mail (facultatif)</Label>
                                      <Input id="email" type="email" placeholder="votre.email@example.com" />
                                  </div>
                                   <div className="space-y-2">
                                      <Label htmlFor="message">Message (facultatif)</Label>
                                      <Textarea id="message" placeholder="Posez vos questions ici..." />
                                  </div>
                                  <Button type="submit" className="w-full">Envoyer la demande</Button>
                              </form>
                            </>
                          )}
                        </DialogContent>
                    </Dialog>
                    <Button size="lg" asChild className="w-full bg-green-600 hover:bg-green-700">
                        <Link href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank">
                           <WhatsAppIcon className="mr-2 fill-white" />
                           WhatsApp
                        </Link>
                    </Button>
                    <Button size="lg" asChild className="w-full">
                        <Link href={`tel:${phoneNumber}`}>
                            <Phone className="mr-2"/>
                            Appeler
                        </Link>
                    </Button>
                </div>
                <p className="text-center text-sm text-muted-foreground">Notre équipe est disponible pour vous accompagner.</p>
            </CardContent>
          </Card>

        </div>
      </div>
      
      {selectedMedia && (
        <Dialog open={!!selectedMedia} onOpenChange={(open) => !open && closeModal()}>
          <DialogContent className="max-w-4xl p-0 border-0">
            <DialogHeader>
                <DialogTitle className="sr-only">Agrandissement du média</DialogTitle>
                <DialogDescription className="sr-only">
                    Média agrandi pour le véhicule : {vehicle.make} {vehicle.model}. {selectedMedia.hint}.
                </DialogDescription>
            </DialogHeader>
            {selectedMedia.type === 'video' ? (
                <div className="relative aspect-video">
                    <video controls src={selectedMedia.url} className="w-full h-full" autoPlay>
                        Votre navigateur ne supporte pas la balise vidéo.
                    </video>
                </div>
            ) : (
                 <div className="relative aspect-[4/3]">
                    <Image
                        src={selectedMedia.url}
                        alt={selectedMedia.hint || 'Image de véhicule'}
                        fill
                        className="object-contain"
                    />
                 </div>
            )}
             <DialogClose asChild>
              <Button variant="ghost" size="icon" className="absolute top-2 right-2 rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white">
                  <X/>
                  <span className="sr-only">Fermer</span>
              </Button>
             </DialogClose>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
