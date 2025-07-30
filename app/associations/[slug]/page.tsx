// app/associations/[slug]/page.tsx

import { associations } from "../../data/association";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// ✅ Pas d'import inutile de `Metadata`, car il n'est pas utilisé.

type Props = {
  params: {
    slug: string;
  };
};

// ✅ Fonction composant normale (pas async ici !)
export default function AssociationDetail({ params }: Props) {
  const asso = associations.find((a) => a.slug === params.slug);

  if (!asso) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8 flex flex-col items-center">
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-3xl text-center">
        <Image
          src={`/logos/${asso.logo}`}
          alt={asso.nom}
          width={120}
          height={120}
          className="mx-auto rounded-full border border-blue-200 shadow-md"
        />
        <h1 className="text-3xl font-extrabold mt-4 text-gray-800">{asso.nom}</h1>
        <p className="mt-2 text-gray-600">{asso.description}</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
            <h3 className="text-blue-700 font-semibold">Domaine</h3>
            <p className="text-gray-700 mt-1">{asso.domaine}</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
            <h3 className="text-blue-700 font-semibold">Contact</h3>
            <p className="text-gray-700 mt-1">{asso.contact}</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
            <h3 className="text-blue-700 font-semibold">Pays</h3>
            <p className="text-gray-700 mt-1">{asso.nom}</p>
          </div>
        </div>

        <div className="mt-8 text-left">
          <h2 className="text-xl font-semibold text-blue-700">Bureau</h2>
          <ul className="mt-3 space-y-2">
            {asso.bureau.map((membre, idx) => (
              <li
                key={idx}
                className="bg-white border border-blue-100 rounded-lg px-4 py-2 shadow-sm"
              >
                {membre}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <Link
            href="/associations"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
          >
            ← Retour aux associations
          </Link>
        </div>
      </div>
    </main>
  );
}

// ✅ Fonction pour génération statique
export function generateStaticParams() {
  return associations.map((a) => ({
    slug: a.slug,
  }));
}
