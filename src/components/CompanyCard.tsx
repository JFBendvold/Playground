import { Company } from "@/types";

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <a
      href={company.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-xl border-l-4 border-eu-blue bg-white p-5 shadow-sm ring-1 ring-gray-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-eu-blue transition-colors">
          {company.name}
        </h3>
        <svg
          className="h-4 w-4 text-gray-300 group-hover:text-eu-blue transition-colors shrink-0 mt-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
      <div className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
        <span>{company.countryFlag}</span>
        <span>{company.country}</span>
      </div>
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {company.description}
      </p>
    </a>
  );
}
