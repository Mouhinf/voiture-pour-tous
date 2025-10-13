export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted py-6">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>&copy; {currentYear} Voiture pour tous. Tous droits réservés.</p>
        <p className="text-sm">Conçu pour le marché Sénégalais.</p>
      </div>
    </footer>
  );
}
