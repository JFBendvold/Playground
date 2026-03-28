import { Category, Company } from "@/types";
import CompanyCard from "./CompanyCard";

export default function CategorySection({
  category,
  companies,
}: {
  category: Category;
  companies: Company[];
}) {
  return (
    <section id={category.slug} className="scroll-mt-32">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        <span className="mr-2">{category.emoji}</span>
        {category.name}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {companies.map((company) => (
          <div key={company.name} className="animate-fade-in-up">
            <CompanyCard company={company} />
          </div>
        ))}
      </div>
    </section>
  );
}
