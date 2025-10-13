import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl text-primary tracking-wider">
          Contactez-Nous
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
          Une question ? Une demande d'information ? Nous sommes là pour vous aider.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Envoyer un message</CardTitle>
            <CardDescription>Remplissez le formulaire et notre équipe vous répondra dans les plus brefs délais.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input id="firstName" placeholder="Votre prénom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input id="lastName" placeholder="Votre nom" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Votre email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Sujet</Label>
                <Input id="subject" placeholder="Sujet de votre message" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tapez votre message ici..." className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full" size="lg">Envoyer le Message</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
            <h2 className="font-headline text-3xl text-primary">Nos Coordonnées</h2>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="w-6 h-6 text-primary"/>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl">Adresse</h3>
                        <p className="text-muted-foreground">Kastor, Dakar, Sénégal</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-primary"/>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl">Téléphone</h3>
                        <p className="text-muted-foreground">+221 77 765 50 65</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-primary"/>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl">Email</h3>
                        <p className="text-muted-foreground">contact@voiturepourtous.sn</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
