import CompanyCard from "@/components/cards/CompanyCard";
import React from "react";
import companydata from "@/lib/json/company.json";
// Adjust the path to your JSON file

const CompanyListingPage = () => {
  const companies = companydata;
  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Company Listings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyListingPage;
