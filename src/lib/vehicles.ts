
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
    make: 'Ford',
    model: 'Fusion',
    year: 2019,
    price: 8250000,
    mileage: 75000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    description: "Élégante et confortable, la Ford Fusion est une berline américaine qui offre une conduite douce et une technologie moderne. Idéale pour les trajets en ville comme sur autoroute.",
    features: ['Système SYNC 3 avec écran tactile', 'Caméra de recul', 'Confort de conduite supérieur', 'Design dynamique'],
    isLocallyAssembled: false,
    images: [
        { id: 'sedan-1', url: '/Ford1.png', hint: 'red sedan', type: 'image' },
        { id: 'sedan-2', url: '/kia1.png', hint: 'blue sedan', type: 'image' },
        { id: 'sedan-3', url: '/peugeot.png', hint: 'sedan interior', type: 'image' },
        { id: 'sedan-4', url: 'https://images.unsplash.com/photo-1647269826024-2bf241770b6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx0b3lvdGElMjB5YXJpc3xlbnwwfHx8fDE3NTg1NDMyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'sedan dashboard', type: 'image' },
        { id: 'video-placeholder-2', url: 'https://picsum.photos/seed/fusion-video/800/600', hint: 'fusion video', type: 'video' }
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
        { id: 'video-placeholder-3', url: 'https://picsum.photos/seed/hilux-video/800/600', hint: 'hilux video', type: 'video' }
    ],
    listingType: 'rent',
  },
  {
    id: '4',
    make: 'Hyundai',
    model: 'Grand i10',
    year: 2023,
    price: 6000000,
    mileage: 5000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    description: "La Hyundai Grand i10 est une citadine moderne et agile. Parfaite pour se faufiler dans la circulation de Dakar, elle offre confort et technologie.",
    features: ['Compacte et agile', 'Écran tactile', 'Faible consommation', 'Design moderne'],
    isLocallyAssembled: false,
    images: [
        { id: 'hatchback-1', url: '/hyundai.png', hint: 'gray hatchback', type: 'image' },
        { id: 'classic-1', url: '/mercedes.png', hint: 'classic car interior', type: 'image' },
        { id: 'sedan-3', url: '/hyundai.png', hint: 'hatchback interior', type: 'image' },
        { id: 'sedan-4', url: 'https://images.unsplash.com/photo-1647269826024-2bf241770b6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx0b3lvdGElMjB5YXJpc3xlbnwwfHx8fDE3NTg1NDMyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'hatchback dashboard', type: 'image' },
        { id: 'video-placeholder-4', url: 'https://picsum.photos/seed/i10-video/800/600', hint: 'i10 video', type: 'video' }
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
        { id: 'video-placeholder-5', url: 'https://picsum.photos/seed/sportage-video/800/600', hint: 'sportage video', type: 'video' }
    ],
    listingType: 'rent',
  },
  {
    id: '6',
    make: 'Mercedes-Benz',
    model: 'Classe C',
    year: 2020,
    price: 22500000,
    mileage: 55000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    description: 'Luxe, performance et prestige. La Mercedes-Benz Classe C est une berline haut de gamme qui offre un confort inégalé et une technologie de pointe.',
    features: ['Intérieur cuir', 'Système de navigation avancé', 'Hautes performances', 'Symbole de statut'],
    isLocallyAssembled: false,
    images: [
        { id: 'luxury-1', url: '/mercedes.png', hint: 'luxury car', type: 'image' },
        { id: 'sedan-1', url: '/mercedes.png', hint: 'red sedan', type: 'image' },
        { id: 'luxury-2', url: '/prado.png', hint: 'luxury interior', type: 'image' },
        { id: 'luxury-3', url: '/toyota1.png', hint: 'luxury dashboard', type: 'image' },
        { id: 'video-placeholder-6', url: 'https://picsum.photos/seed/c-class-video/800/600', hint: 'c-class video', type: 'video' }
    ],
    listingType: 'sale',
  },
  {
    id: '7',
    make: 'BYD',
    model: 'Dolphin',
    year: 2024,
    price: 12500000,
    mileage: 1000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    description: "Entrez dans l'ère de la mobilité électrique avec la BYD Dolphin. Une voiture électrique abordable avec une autonomie impressionnante, parfaite pour l'environnement urbain.",
    features: ['100% Électrique', 'Zéro émission', 'Coûts de fonctionnement bas', 'Recharge rapide'],
    isLocallyAssembled: false,
    images: [
        { id: 'electric-1', url: '/byd1.png', hint: 'electric vehicle', type: 'image' },
        { id: 'hatchback-1', url: '/hyundai.png', hint: 'gray hatchback', type: 'image' },
        { id: 'electric-2', url: '/prado.png', hint: 'electric interior', type: 'image' },
        { id: 'electric-3', url: '/seniran.png', hint: 'electric dashboard', type: 'image' },
        { id: 'video-placeholder-7', url: 'https://picsum.photos/seed/dolphin-video/800/600', hint: 'dolphin video', type: 'video' }
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
        { id: 'video-placeholder-8', url: 'https://picsum.photos/seed/duster-video/800/600', hint: 'duster video', type: 'video' }
    ],
    listingType: 'rent',
  },
  {
    id: '9',
    make: 'Peugeot',
    model: '301',
    year: 2021,
    price: 7000000,
    mileage: 60000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    description: "La Peugeot 301 est une berline familiale conçue pour le confort et la durabilité. Son grand coffre et son habitacle spacieux en font un excellent choix pour les familles.",
    features: ['Spacieuse', 'Confortable', 'Grand coffre', 'Adaptée au climat chaud'],
    isLocallyAssembled: false,
    images: [
        { id: 'sedan-2', url: '/peugeot.png', hint: 'blue sedan', type: 'image' },
        { id: 'sedan-1', url: '/prado.png', hint: 'red sedan', type: 'image' },
        { id: 'sedan-3', url: '/toyota1.png', hint: 'sedan interior', type: 'image' },
        { id: 'sedan-4', url: '/peugeot.png', hint: 'sedan dashboard', type: 'image' },
        { id: 'video-placeholder-9', url: 'https://picsum.photos/seed/301-video/800/600', hint: '301 video', type: 'video' }
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
        { id: 'video-placeholder-10', url: 'https://picsum.photos/seed/ranger-video/800/600', hint: 'ranger video', type: 'video' }
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
        { id: 'video-placeholder-11', url: 'https://picsum.photos/seed/prado-video/800/600', hint: 'prado video', type: 'video' }
    ],
    listingType: 'rent',
  },
  {
    id: '12',
    make: 'Seniran',
    model: 'Soren',
    year: 2024,
    price: 8500000,
    mileage: 500,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    description: 'La nouvelle Seniran Soren, assemblée localement, offre un design moderne et des équipements améliorés. Le meilleur de la production locale avec une touche de modernité.',
    features: ['Nouveau modèle 2024', 'Assemblage local', 'Garantie constructeur', 'Design élégant'],
    isLocallyAssembled: true,
    images: [
        { id: 'classic-1', url: '/soren.png', hint: 'classic car', type: 'image' },
        { id: 'sedan-2', url: '/mercedes.png', hint: 'blue sedan', type: 'image' },
        { id: 'sedan-3', url: '/prado.png', hint: 'sedan interior', type: 'image' },
        { id: 'sedan-4', url: 'https://images.unsplash.com/photo-1647269826024-2bf241770b6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx0b3lvdGElMjB5YXJpc3xlbnwwfHx8fDE3NTg1NDMyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'sedan dashboard', type: 'image' },
        { id: 'video-placeholder-12', url: 'https://picsum.photos/seed/soren-video/800/600', hint: 'soren video', type: 'video' }
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
