
import type { Vehicle } from '@/types/vehicle';

// This data is now the source of truth for the static application.
export const staticVehicles: Vehicle[] = [
  {
    id: '1',
    make: 'Honda',
    model: 'Civic Sport',
    year: 2015,
    price: 3300000,
    mileage: 15000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    description: "Moteur 4 cylindres, 1.8L en excellent état. Faible consommation, économique au quotidien. Véhicule fiable et idéal pour la conduite en ville et sur route. Très bon état général. Papiers complets et à jour (assurance et visite technique).",
    features: [
        'Grand écran tactile multimédia 📺',
        'Caméra de recul',
        'Intérieur propre et bien entretenu',
        'Volant multifonction',
        'Climatisation',
        'Moteur 1.8L, 4 cylindres',
        'Faible consommation',
        'Papiers à jour'
    ],
    isLocallyAssembled: false,
    images: [
        { id: 'sedan-1', url: '/honda1.png', hint: 'red sedan', type: 'image' },
        { id: 'sedan-2', url: '/honda2.png', hint: 'blue sedan', type: 'image' },
        { id: 'sedan-3', url: '/honda3.png', hint: 'sedan interior', type: 'image' },
        { id: 'sedan-4', url: '/honda4.jpeg', hint: 'sedan dashboard', type: 'image' },
        { id: 'video-placeholder-1', url: '/honda.mp4', hint: 'civic video', type: 'video' }
    ],
    listingType: 'sale',
  },
  {
    id: '2',
    make: 'Hyundai',
    model: 'Santafe Sport',
    year: 2019,
    price: 8250000,
    mileage: 75000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    description: "Élégante et confortable, la Ford Fusion est une berline américaine qui offre une conduite douce et une technologie moderne. Idéale pour les trajets en ville comme sur autoroute.",
    features: ['Système SYNC 3 avec écran tactile', 'Caméra de recul', 'Confort de conduite supérieur', 'Design dynamique'],
    isLocallyAssembled: false,
    images: [
        { id: 'sedan-1', url: '/hundai1.png', hint: 'red sedan', type: 'image' },
        { id: 'sedan-2', url: '/hundai2.png', hint: 'blue sedan', type: 'image' },
        { id: 'sedan-3', url: '/hundai3.png', hint: 'sedan interior', type: 'image' },
        { id: 'sedan-4', url: '/hunda3.jpeg', hint: 'sedan dashboard', type: 'image' },
        { id: 'video-placeholder-2', url: '/honda.mp4', hint: 'fusion video', type: 'video' }
    ],
    listingType: 'sale',
  },
  {
    id: '3',
    make: 'Toyota',
    model: 'Hilux',
    year: 2021,
    price: 45000,
    mileage: 80000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    description: "Le Toyota Hilux est la référence en matière de pick-up. Sa robustesse légendaire et sa capacité tout-terrain en font le véhicule parfait pour affronter tous les défis.",
    features: ['4x4', 'Fiabilité légendaire', 'Climat tropicalisé', 'Excellente valeur de revente'],
    isLocallyAssembled: false,
    images: [
        { id: 'offroad-1', url: '/toyota1.png', hint: 'off-road vehicle', type: 'image' },
        { id: 'suv-1', url: '/seniran.png', hint: 'white suv', type: 'image' },
        { id: 'truck-3', url: '/Ford1.png', hint: 'pickup interior', type: 'image' },
        { id: 'truck-4', url: '/kia1.png', hint: 'pickup dashboard', type: 'image' },
        { id: 'video-placeholder-3', url: '/honda.mp4', hint: 'hilux video', type: 'video' }
    ],
    listingType: 'rent',
  },
  {
    id: '4',
    make: 'Jepp',
    model: 'Cherokee',
    year: 2023,
    price: 6000000,
    mileage: 5000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    description: "La Hyundai Grand i10 est une citadine moderne et agile. Parfaite pour se faufiler dans la circulation de Dakar, elle offre confort et technologie.",
    features: ['Compacte et agile', 'Écran tactile', 'Faible consommation', 'Design moderne'],
    isLocallyAssembled: false,
    images: [
        { id: 'hatchback-1', url: '/jepp1.png', hint: 'gray hatchback', type: 'image' },
        { id: 'classic-1', url: '/jepp2.png', hint: 'classic car interior', type: 'image' },
        { id: 'sedan-3', url: '/jepp3.png', hint: 'hatchback interior', type: 'image' },
        { id: 'sedan-4', url: '/jepp4.jpeg', hint: 'hatchback dashboard', type: 'image' },
        { id: 'video-placeholder-4', url: '/jepp.mp4', hint: 'i10 video', type: 'video' }
    ],
    listingType: 'sale',
  },
  {
    id: '5',
    make: 'Kia',
    model: 'Sportage',
    year: 2022,
    price: 35000,
    mileage: 30000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    description: 'Le Kia Sportage est un SUV élégant et spacieux. Il combine un design audacieux, un intérieur confortable et des technologies de pointe pour une expérience de conduite supérieure.',
    features: ['Toit panoramique', 'Système audio premium', 'Aides à la conduite', 'Grand coffre'],
    isLocallyAssembled: false,
    images: [
        { id: 'suv-1', url: '/kia1.png', hint: 'white suv', type: 'image' },
        { id: 'suv-2', url: '/hyundai.png', hint: 'black suv', type: 'image' },
        { id: 'luxury-1', url: '/Ford1.png', hint: 'suv interior', type: 'image' },
        { id: 'sedan-4', url: 'https://images.unsplash.com/photo-1647269826024-2bf241770b6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx0b3lvdGElMjB5YXJpc3xlbnwwfHx8fDE3NTg1NDMyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'suv dashboard', type: 'image' },
        { id: 'video-placeholder-5', url: '/honda.mp4', hint: 'sportage video', type: 'video' }
    ],
    listingType: 'rent',
  },
  {
    id: '6',
    make: 'Renault',
    model: 'QM6',
    year: 2018,
    price: 7700000,
    mileage: 87000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    description: 'Luxe, performance et prestige. La Mercedes-Benz Classe C est une berline haut de gamme qui offre un confort inégalé et une technologie de pointe.',
    features: ['Intérieur cuir', 'Système de navigation avancé', 'Hautes performances', 'Symbole de statut'],
    isLocallyAssembled: false,
    images: [
        { id: 'luxury-1', url: '/renault1.png', hint: 'luxury car', type: 'image' },
        { id: 'sedan-1', url: '/renault2.png', hint: 'red sedan', type: 'image' },
        { id: 'luxury-2', url: '/renault3.png', hint: 'luxury interior', type: 'image' },
        { id: 'luxury-3', url: '/renault4.jpeg', hint: 'luxury dashboard', type: 'image' },
        { id: 'video-placeholder-6', url: '/renault.mp4', hint: 'c-class video', type: 'video' }
    ],
    listingType: 'sale',
  },
  {
    id: '7',
    make: 'Toyota',
    model: 'RAV4',
    year: 2015,
    price: 5500000,
    mileage: '--',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    description: "Entrez dans l'ère de la mobilité électrique avec la BYD Dolphin. Une voiture électrique abordable avec une autonomie impressionnante, parfaite pour l'environnement urbain.",
    features: ['100% Électrique', 'Zéro émission', 'Coûts de fonctionnement bas', 'Recharge rapide'],
    isLocallyAssembled: false,
    images: [
        { id: 'electric-1', url: '/toyota1.png', hint: 'electric vehicle', type: 'image' },
        { id: 'hatchback-1', url: '/toyota2.png', hint: 'gray hatchback', type: 'image' },
        { id: 'electric-2', url: '/toyota3.png', hint: 'electric interior', type: 'image' },
        { id: 'electric-3', url: '/toyota4.jpeg', hint: 'electric dashboard', type: 'image' },
        { id: 'video-placeholder-7', url: '/toyota.mp4', hint: 'dolphin video', type: 'video' }
    ],
    listingType: 'sale',
  },
  {
    id: '8',
    make: 'Renault',
    model: 'Duster',
    year: 2019,
    price: 25000,
    mileage: 95000,
    fuelType: 'Diesel',
    transmission: 'Manual',
    description: "Le Renault Duster est un SUV polyvalent et économique. Connu pour sa robustesse, il est aussi à l'aise en ville que sur les pistes.",
    features: ['Bonne garde au sol', 'Économique', 'Spacieux', 'Entretien facile'],
    isLocallyAssembled: false,
    images: [
        { id: 'suv-2', url: '/renault.png', hint: 'black suv', type: 'image' },
        { id: 'offroad-1', url: '/hyundai.png', hint: 'off-road vehicle', type: 'image' },
        { id: 'suv-3', url: '/mercedes.png', hint: 'suv interior', type: 'image' },
        { id: 'suv-4', url: '/toyota1.png', hint: 'suv dashboard', type: 'image' },
        { id: 'video-placeholder-8', url: '/honda.mp4', hint: 'duster video', type: 'video' }
    ],
    listingType: 'rent',
  },
  {
    id: '9',
    make: 'Peugeot',
    model: '2006',
    year: 2016,
    price: 5900000,
    mileage: 0,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    description: "La Peugeot 301 est une berline familiale conçue pour le confort et la durabilité. Son grand coffre et son habitacle spacieux en font un excellent choix pour les familles.",
    features: ['Spacieuse', 'Confortable', 'Grand coffre', 'Adaptée au climat chaud'],
    isLocallyAssembled: false,
    images: [
        { id: 'sedan-2', url: '/peugeot1.png', hint: 'blue sedan', type: 'image' },
        { id: 'sedan-1', url: '/peugeot2.png', hint: 'red sedan', type: 'image' },
        { id: 'sedan-3', url: '/peugeot3.png', hint: 'sedan interior', type: 'image' },
        { id: 'sedan-4', url: '/peugeot4.jpeg', hint: 'sedan dashboard', type: 'image' },
        { id: 'video-placeholder-9', url: '/peugeot.mp4', hint: '301 video', type: 'video' }
    ],
    listingType: 'sale',
  },
  {
    id: '10',
    make: 'Ford',
    model: 'Ranger',
    year: 2022,
    price: 50000,
    mileage: 40000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    description: "Puissant et intelligent, le Ford Ranger est prêt pour l'aventure et le travail. Un pick-up qui ne fait aucun compromis sur le style et la technologie.",
    features: ['4x4', 'Capacités tout-terrain', 'Technologie embarquée', 'Design imposant'],
    isLocallyAssembled: false,
    images: [
        { id: 'offroad-1', url: '/ranger.png', hint: 'off-road vehicle', type: 'image' },
        { id: 'truck-2', url: '/mercedes.png', hint: 'commercial truck', type: 'image' },
        { id: 'truck-3', url: '/seniran.png', hint: 'truck interior', type: 'image' },
        { id: 'truck-4', url: '/renault.png', hint: 'truck dashboard', type: 'image' },
        { id: 'video-placeholder-10', url: '/honda.mp4', hint: 'ranger video', type: 'video' }
    ],
    listingType: 'rent',
  },
  {
    id: '11',
    make: 'Toyota',
    model: 'Prado',
    year: 2023,
    price: 75000,
    mileage: 25000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    description: "Le Toyota Land Cruiser Prado est le summum du SUV de luxe et tout-terrain. Il offre une combinaison parfaite de confort, de puissance et de capacité à aller n'importe où.",
    features: ['Luxe et confort', '7 places', 'Capacités 4x4 extrêmes', 'Très haute fiabilité'],
    isLocallyAssembled: false,
    images: [
        { id: 'suv-2', url: '/prado.png', hint: 'black suv', type: 'image' },
        { id: 'luxury-1', url: '/kia1.png', hint: 'luxury car interior', type: 'image' },
        { id: 'suv-3', url: '/seniran.png', hint: 'suv interior', type: 'image' },
        { id: 'suv-4', url: '/peugeot.png', hint: 'suv dashboard', type: 'image' },
        { id: 'video-placeholder-11', url: '/honda.mp4', hint: 'prado video', type: 'video' }
    ],
    listingType: 'rent',
  },
  {
    id: '12',
    make: 'Hyundai',
    model: 'Avante',
    year: 2012,
    price: 3250000,
    mileage: 500,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    description: 'La nouvelle Seniran Soren, assemblée localement, offre un design moderne et des équipements améliorés. Le meilleur de la production locale avec une touche de modernité.',
    features: ['Nouveau modèle 2024', 'Assemblage local', 'Garantie constructeur', 'Design élégant'],
    isLocallyAssembled: false,
    images: [
        { id: 'classic-1', url: '/hyundai1.png', hint: 'classic car', type: 'image' },
        { id: 'sedan-2', url: '/hyundai2.png', hint: 'blue sedan', type: 'image' },
        { id: 'sedan-3', url: '/hyundai3.png', hint: 'sedan interior', type: 'image' },
        { id: 'sedan-4', url: '/hyundai4.jpeg', hint: 'sedan dashboard', type: 'image' },
        { id: 'video-placeholder-12', url: '/hyundai.mp4', hint: 'soren video', type: 'video' }
    ],
    listingType: 'sale',
  },
];


export async function getAllVehicles(): Promise<Vehicle[]> {
  // Return static data, simulating an async API call.
  return Promise.resolve(staticVehicles);
}

export async function getVehicleById(id: string): Promise<Vehicle | null> {
   const vehicle = staticVehicles.find(v => v.id === id) || null;
   return Promise.resolve(vehicle);
}
