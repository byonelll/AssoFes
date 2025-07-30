export default function SearchBar({
  value,
  onChange,
  placeholder = "Rechercher une association, un pays…",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="w-full md:max-w-md">
      <label htmlFor="search" className="sr-only">
        Rechercher une association
      </label>
      <div className="relative">
        {/* Icône loupe */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-500"
        >
          <path
            d="M21 21l-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <input
          id="search"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-full border border-blue-200 bg-white/80 backdrop-blur-md px-12 py-3 shadow-sm outline-none placeholder:text-gray-400
                     focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
        />

        {/* Bouton clear */}
        {value && (
          <button
            type="button"
            aria-label="Effacer la recherche"
            onClick={() => onChange("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 hover:bg-blue-50"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-gray-500">
              <path
                d="M6 6l12 12M18 6L6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
