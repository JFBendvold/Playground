export default function Hero({ companyCount }: { companyCount: number }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-eu-light/30 to-blue-50 pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
          Shop <span className="text-eu-blue">European</span>.{" "}
          <br className="sm:hidden" />
          Support <span className="text-eu-blue">Europe</span>.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Discover quality products and services from Europe&apos;s finest
          companies. Your guide to choosing European alternatives.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200">
          <span className="text-eu-blue font-semibold">{companyCount}</span>{" "}
          European companies across{" "}
          <span className="text-eu-blue font-semibold">7</span> categories
        </div>
      </div>
    </section>
  );
}
