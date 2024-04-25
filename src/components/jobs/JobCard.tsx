import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

function JobCard({ job }: any) {
  return (
    <div className="p-4 rounded-lg border-2 border-gray-200 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
      <Image
        src="https://lh3.googleusercontent.com/RsEv0ZlVZkwHVxGKH0a8mjDWvqiulD5YX3yX4mnHR4zWawCMB2G_1SNABw5ezxOBuaHn0klco_IPd8XqSzFfMLvdPGgf2mlSoHl9mA"
        alt="google logo"
        width={30}
        height={30}
        className="rounded-full"
      />
      <h1 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h1>
      <p className="text-gray-600 mb-2">{job.company}</p>
      <div className="flex items-center text-gray-600 mb-4">
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 19l-7-7 2.828-2.828L12 14.344l8.172-8.172L19 12"></path>
        </svg>
        <p>{job.location}</p>
      </div>
      <div className="mb-4">
        <div className="text-lg text-blue-600 font-bold">
          ${job.salary?.min} - ${job.salary?.max} {job.salary?.type}
        </div>
        <div className="text-sm text-gray-600">{job.type}</div>
      </div>
      <div className="text-gray-700 leading-relaxed mb-4">
        {job.description}
      </div>
      <div className="text-center">
        <Button
          variant={"outline"}
          size={"lg"}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-xl border-2 border-blue-500 transition-all duration-300 transform hover:scale-105 hover:text-white"
        >
          Apply
        </Button>
      </div>
    </div>
  );
}

export default JobCard;
