import React from "react";
import { Button } from "@/components/ui/button";

const JobCard = ({ job }: any) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="p-5">
        <h5 className="text-lg font-bold tracking-tight text-gray-900 ">
          {job.title}
        </h5>
        <p className="font-normal text-gray-700 line-clamp-1">
          {job.description}
        </p>
        <div className="mt-4">
          <div className="text-sm text-gray-500">{job.company}</div>
          <div className="text-sm text-gray-500">{job.location}</div>
          <div className="text-sm text-gray-500">{job.salary}</div>
          <div className="text-sm font-semibold text-blue-600">{job.type}</div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
