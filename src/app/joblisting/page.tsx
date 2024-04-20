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
      salary: "$100,000",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Product Manager",
      description: "We are looking for a product manager to join our team.",
      company: "XYZ Corporation",
      location: "Los Angeles, CA",
      salary: "$80,000",
      type: "Full-time",
    },
    {
      id: 3,
      title: "Marketing Coordinator",
      description:
        "We are looking for a marketing coordinator to join our team.",
      company: "DEF Corporation",
      location: "Chicago, IL",
      salary: "$60,000",
      type: "Full-time",
    },
  ];
}

const JoblistingPage = async () => {
  const jobListings = await getJobs();
  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobListings.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </ul>
    </div>
  );
};

export default JoblistingPage;
