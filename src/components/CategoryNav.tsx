import { Category, CategorySlug } from "@/types";

export default function CategoryNav({
  categories,
  activeCategory,
  onSelect,
}: {
  categories: Category[];
  activeCategory: CategorySlug | "all";
  onSelect: (slug: CategorySlug | "all") => void;
}) {
  return (
    <div className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => onSelect("all")}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-150 ${
              activeCategory === "all"
                ? "bg-eu-blue text-white shadow-sm"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => {
                if (activeCategory === cat.slug) {
                  onSelect("all");
                } else {
                  onSelect(cat.slug);
                  setTimeout(() => {
                    document
                      .getElementById(cat.slug)
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 50);
                }
              }}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-150 ${
                activeCategory === cat.slug
                  ? "bg-eu-blue text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
