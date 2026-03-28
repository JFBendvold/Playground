"use client";

import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CategoryNav from "@/components/CategoryNav";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import { categories, companies } from "@/data/companies";
import { CategorySlug } from "@/types";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategorySlug | "all">(
    "all"
  );

  const filteredCompanies = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return companies.filter((c) => {
      const matchesSearch =
        query === "" ||
        c.name.toLowerCase().includes(query) ||
        c.country.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query);
      const matchesCategory =
        activeCategory === "all" || c.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const visibleCategories = useMemo(() => {
    return categories.filter((cat) =>
      filteredCompanies.some((c) => c.category === cat.slug)
    );
  }, [filteredCompanies]);

  return (
    <>
      <Header />
      <Hero companyCount={companies.length} />

      <div id="categories" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <CategoryNav
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          {visibleCategories.length > 0 ? (
            <div className="space-y-14">
              {visibleCategories.map((cat) => (
                <CategorySection
                  key={cat.slug}
                  category={cat}
                  companies={filteredCompanies.filter(
                    (c) => c.category === cat.slug
                  )}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-gray-500">
                No companies found matching &ldquo;{searchQuery}&rdquo;
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-4 text-sm font-medium text-eu-blue hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
