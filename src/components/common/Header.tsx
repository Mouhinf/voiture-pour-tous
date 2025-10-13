
'use client';

import Link from 'next/link';
import { SidebarTrigger } from '../ui/sidebar';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Desktop Logo/Title */}
        <div className="mr-4 hidden md:flex">
             <Link href="/" className="flex items-center gap-2" aria-label="Accueil">
              <Logo />
              <span className="font-headline text-2xl font-bold tracking-tight text-primary">
                Voiture pour tous
              </span>
            </Link>
        </div>
        
        {/* Mobile Trigger and Logo */}
        <div className="flex w-full items-center justify-between md:hidden">
            <SidebarTrigger />
            <div className="flex-1 text-center">
                 <Link href="/" className="flex items-center gap-2 justify-center" aria-label="Accueil">
                    <Logo />
                    <span className="font-headline text-lg font-bold tracking-tight text-primary">
                        Voiture pour tous
                    </span>
                </Link>
            </div>
            <div className="w-10">
               {/* Spacer for alignment */}
            </div>
        </div>
      </div>
    </header>
  );
}
