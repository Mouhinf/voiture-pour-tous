
'use client';

import { Building, Car, Home, Mail, ShoppingCart, KeyRound } from 'lucide-react';
import Link from 'next/link';

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    useSidebar,
} from '@/components/ui/sidebar';
import { Header } from './Header';
import { Footer } from './Footer';
import { Logo } from './Logo';

const AppShell = ({ children }: { children: React.ReactNode }) => {
    const { setOpenMobile } = useSidebar();

    const handleLinkClick = () => {
        setOpenMobile(false);
    };

    return (
        <>
            <Sidebar>
                <SidebarHeader>
                    <Link href="/" className="flex items-center gap-2" aria-label="Accueil" onClick={handleLinkClick}>
                        <Logo />
                        <span className="font-headline text-2xl font-bold tracking-tight text-primary">
                            Voiture pour tous
                        </span>
                    </Link>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarMenu>
                         <SidebarMenuItem>
                            <Link href="/" passHref onClick={handleLinkClick}>
                                <SidebarMenuButton tooltip="Accueil">
                                    <Home />
                                    <span>Accueil</span>
                                </SidebarMenuButton>
                            </Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <>
                                    <Car />
                                    <span>Véhicules</span>
                                </>
                            </SidebarMenuButton>
                            <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                     <Link href="/sale" passHref onClick={handleLinkClick}>
                                        <SidebarMenuSubButton>
                                            <ShoppingCart />
                                            <span>Acheter</span>
                                        </SidebarMenuSubButton>
                                    </Link>
                                </SidebarMenuSubItem>
                                <SidebarMenuSubItem>
                                     <Link href="/rent" passHref onClick={handleLinkClick}>
                                        <SidebarMenuSubButton>
                                            <KeyRound />
                                            <span>Louer</span>
                                        </SidebarMenuSubButton>
                                    </Link>
                                </SidebarMenuSubItem>
                            </SidebarMenuSub>
                        </SidebarMenuItem>
                         <SidebarMenuItem>
                             <Link href="/about" passHref onClick={handleLinkClick}>
                                <SidebarMenuButton tooltip="À propos">
                                    <Building />
                                    <span>À propos de nous</span>
                                </SidebarMenuButton>
                            </Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <Link href="/contact" passHref onClick={handleLinkClick}>
                                <SidebarMenuButton tooltip="Contact">
                                    <Mail />
                                    <span>Contact</span>
                                </SidebarMenuButton>
                            </Link>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarContent>
            </Sidebar>

            <SidebarInset>
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </SidebarInset>
        </>
    );
};

export default AppShell;
