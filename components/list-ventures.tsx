import { cn } from '@/libs/utils';

import CardVentures from '@/components/ui/card-ventures';

interface ListVenturesProps {
  className?: string;
}

const ListVentures = ({ className }: ListVenturesProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10',
        className
      )}
    >
      <p>1995 - 2002</p>
      <p>Estudios superiores en la carrera de Ingeniería Civil en Electricidad impartida por la Universidad de Santiago de Chile.</p>
      <p>2011</p>
      <p>Diplomado en Energía y Desarrollo Sustentable impartida por la Universidad de Santiago de Chile.</p>
      <p>2023 - 2024</p>
      <p>Desarrollador Full Stack impartida por la Universidad del Desarrollo</p>
    </div>
  );
};

export default ListVentures;
