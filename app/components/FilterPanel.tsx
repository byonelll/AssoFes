export default function FilterPanel({
  domains,
  selected,
  onSelect,
}: {
  domains: string[];
  selected: string;
  onSelect: (domaine: string) => void;
}) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-2 py-1">
        {domains.map((domain) => {
          const active = selected === domain;
          return (
            <button
              key={domain}
              onClick={() => onSelect(domain)}
              aria-pressed={active}
              className={[
                "whitespace-nowrap px-4 py-2 rounded-full border text-sm transition shadow-sm",
                active
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white/80 text-gray-700 border-blue-200 hover:bg-blue-50",
              ].join(" ")}
            >
              {domain}
            </button>
          );
        })}
      </div>
    </div>
  );
}
