import JobCard from "@/components/jobs/JobCard";
import React from "react";

async function getJobs() {
  return [
    {
      id: 1,
      title: "Software Developer",
      description: "We are looking for a software developer to join our team.",
      company: "ABC Corporation",
      location: "New York, NY",
      salary: {
        min: 100000,
        max: 200000,
        currency: "IND",
      },
      type: "Full-time",
    },
    {
      id: 2,
      title: "Product Manager",
      description: "We are looking for a product manager to join our team.",
      company: "XYZ Corporation",
      location: "Los Angeles, CA",
      salary: {
        min: 80000,
        max: 120000,
        currency: "USD",
      },
      type: "Full-time",
    },
    {
      id: 3,
      title: "Marketing Coordinator",
      description:
        "We are looking for a marketing coordinator to join our team.",
      company: "DEF Corporation",
      location: "Chicago, IL",
      salary: {
        type: "hourly",
        min: 60,
        max: 90,
        currency: "USD",
      },
      type: "Full-time",
    },
    {
      id: 4,
      title: "Sales Representative",
      description:
        "We are looking for a sales representative to join our team.",
      company: "GHI Corporation",
      location: "Houston, TX",
      salary: {
        type: "Annualy",
        min: 80000,
        max: 120000,
        currency: "USD",
      },
      type: "Full-time",
      tags: ["sales", "marketing"],
    },
  ];
}

const JoblistingPage = async () => {
  const jobListings = await getJobs();
  return (
    <div className="p-4">
      <h1>Job Listings</h1>
      <div className="grid grid-cols-3 gap-4">
        {jobListings.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default JoblistingPage;
