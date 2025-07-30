"use client";

import { useMemo, useState } from "react";
import { associations } from "../data/association"; // ajuste le chemin
import AssociationCard from "../components/AssociationCard";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";

const PAGE_SIZE = 12;

export default function AssociationsPage() {
  const [search, setSearch] = useState("");
  const [selectedDomaine, setSelectedDomaine] = useState("Tous");
  const [page, setPage] = useState(1);

  const domaines = useMemo(
    () => ["Tous", ...Array.from(new Set(associations.map((a) => a.domaine)))],
    []
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return associations.filter((a) => {
      const okDomaine = selectedDomaine === "Tous" || a.domaine === selectedDomaine;
      const okSearch =
        !q ||
        a.nom.toLowerCase().includes(q) ||
        (a.nom ?? "").toLowerCase().includes(q);
      return okDomaine && okSearch;
    });
  }, [search, selectedDomaine]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const paginated = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* En-tête / Hero léger */}
      <section className="px-6 md:px-10 pt-16 pb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Associations étudiantes & stagiaires
        </h1>
        <p className="text-gray-600 mt-2">
          Explore la vie associative de Fès — recherche, filtre par domaine et découvre chaque bureau.
        </p>
      </section>

      {/* Contrôles sticky */}
      <div className="sticky top-0 z-20 bg-white/70 backdrop-blur-md border-y border-blue-100">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <SearchBar
            value={search}
            onChange={(v) => {
              setSearch(v);
              setPage(1);
            }}
            placeholder="Rechercher une association, un pays…"
          />
          <FilterPanel
            domains={domaines}
            selected={selectedDomaine}
            onSelect={(d) => {
              setSelectedDomaine(d);
              setPage(1);
            }}
          />
        </div>
      </div>

      {/* Résultats */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-8">
        {/* Compteur / info */}
        <div className="mb-4 text-sm text-gray-600">
          {filtered.length} résultat{filtered.length > 1 ? "s" : ""} — domaine :{" "}
          <span className="font-medium text-blue-700">{selectedDomaine}</span>
        </div>

        {/* Grille */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((asso) => (
              <AssociationCard key={asso.slug} association={asso} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-block bg-white/70 backdrop-blur-md border border-blue-100 rounded-2xl px-6 py-5 shadow-sm">
              <p className="text-gray-700 font-medium">Aucun résultat</p>
              <p className="text-gray-500 text-sm mt-1">
                Essaie d’élargir ta recherche ou de changer de domaine.
              </p>
            </div>
          </div>
        )}

        {/* Pagination */}
        {filtered.length > 0 && totalPages > 1 && (
          <div className="flex justify-center mt-10 gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={safePage === 1}
              className="px-4 py-2 rounded-full bg-white border border-blue-100 text-gray-700 hover:bg-blue-50 disabled:opacity-50"
            >
              Précédent
            </button>
            <span className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold">
              {safePage} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage === totalPages}
              className="px-4 py-2 rounded-full bg-white border border-blue-100 text-gray-700 hover:bg-blue-50 disabled:opacity-50"
            >
              Suivant
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
