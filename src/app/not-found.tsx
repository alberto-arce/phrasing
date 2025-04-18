import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HomeIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Página no encontrada</h2>
      <p className="text-lg mb-8 max-w-md">
        Lo sentimos, la página que estás buscando no existe o ha sido movida a
        otra ubicación.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild variant="default" size="lg" className="gap-2">
          <Link href="/">
            <HomeIcon className="h-5 w-5" />
            Volver al inicio
          </Link>
        </Button>
      </div>
    </div>
  );
}
