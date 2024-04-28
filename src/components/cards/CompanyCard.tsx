import React from "react";

const CompanyCard = ({ company }: any) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-4 bg-white">
      <div className="font-bold text-xl mb-2">{company.name}</div>
      <p className="text-gray-700 text-base">{company.description}</p>
      <div className="py-4">
        <p className="text-gray-900 leading-none">{company.industry}</p>
        <p className="text-gray-600">{company.location}</p>
        <p className="text-gray-600">{company.size}</p>
      </div>
      <div className="flex items-center justify-between">
        <a
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-800"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default CompanyCard;
