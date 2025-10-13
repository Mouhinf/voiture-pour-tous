
'use client';

import { SidebarProvider } from '@/components/ui/sidebar';
import AppShell from '@/components/common/AppShell';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppShell>
        {children}
      </AppShell>
    </SidebarProvider>
  );
}
