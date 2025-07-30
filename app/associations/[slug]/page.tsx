// app/associations/[slug]/page.tsx
import { associations } from "../../data/association";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function AssociationDetail({ params }: PageProps) {
  const asso = associations.find((a) => a.slug === params.slug);

  if (!asso) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800">{asso.nom}</h1>
          <Link href="/associations">
            <span className="text-blue-500 hover:underline text-sm">
              ← Retour à la liste
            </span>
          </Link>
        </div>

        <Image
          src={asso.logo}
          alt={asso.nom}
          width={800}
          height={400}
          className="rounded-lg mb-6 object-cover"
        />

        <p className="text-gray-700 leading-relaxed mb-4">{asso.description}</p>

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Adresse</h2>
          <p className="text-gray-600">{asso.domaine}</p>

          <h2 className="text-xl font-semibold text-blue-700 mt-4 mb-2">Téléphone</h2>
          <p className="text-gray-600">{asso.contact}</p>
        </div>
      </div>
    </main>
  );
}

// ✅ Cette fonction permet de générer toutes les pages dynamiques à build-time
export function generateStaticParams() {
  return associations.map((a) => ({
    slug: a.slug,
  }));
}
