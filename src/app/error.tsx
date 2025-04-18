'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HomeIcon, RefreshCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error en la aplicación:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">
        ¡Ups! Algo salió mal
      </h1>
      <p className="text-lg mb-8 max-w-md">
        Lo sentimos, ha ocurrido un error inesperado. Puedes intentar recargar
        la página o volver al inicio.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={() => reset()}
          variant="outline"
          size="lg"
          className="gap-2"
        >
          <RefreshCcw className="h-5 w-5" />
          Intentar de nuevo
        </Button>
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
