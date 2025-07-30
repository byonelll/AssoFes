import { associations } from "../data/association";
import { useRouter } from "next/router";
import Image from "next/image";

export default function AssociationDetail() {
  const router = useRouter();
  const { association } = router.query;
  const asso = associations.find(a => a.slug === association);

  if (!asso) return <div>Association introuvable.</div>;

  return (
    <main className="p-8">
      <Image src={`/logos/${asso.logo}`} alt={asso.nom} width={120} height={120} />
      <h1 className="text-2xl font-bold mt-4">{asso.nom}</h1>
      <p className="mt-2">{asso.description}</p>
      <div className="mt-4">
        <strong>Bureau :</strong>
        <ul>
          {asso.bureau.map((membre, idx) => <li key={idx}>{membre}</li>)}
        </ul>
      </div>
      <div className="mt-4">
        <strong>Contact :</strong> {asso.contact}
      </div>
    </main>
  );
}