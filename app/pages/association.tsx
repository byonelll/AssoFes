import { associations } from "../data/association";
import AssociationCard from "../components/AssociationCard";

export default function AssociationsPage() {
  return (
    <main className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Associations étudiantes</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {associations.map((asso) => (
          <AssociationCard key={asso.nom} association={asso} />
        ))}
      </div>
    </main>
  );
}