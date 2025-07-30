import Image from "next/image";

type Association = {
  logo: string;
  nom: string;
  description: string;
  slug: string;
};

interface AssociationCardProps {
  association: Association;
}

export default function AssociationCard({ association }: AssociationCardProps) {
  return (
    <div className="bg-white border rounded-lg shadow-md hover:shadow-xl transition-shadow p-4 flex flex-col items-center">
      <Image src={`/logos/${association.logo}`} alt={association.nom} width={80} height={80} className="rounded-full" />
      <h3 className="font-bold mt-2 text-blue-700">{association.nom}</h3>
      <p className="text-sm text-gray-600 text-center">{association.description}</p>
      <a href={`/associations/${association.slug}`} className="mt-2 text-blue-600 underline hover:text-blue-800 transition">
        Voir plus
      </a>
    </div>
  );
}