import jobdata from "@/lib/json/job.json";

import JobCard from "@/components/jobs/JobCard";

const JoblistingPage = async () => {
  const jobListings = jobdata;
  return (
    <div className="p-5 bg-gray-100 ">
      <h1 className="text-3xl font-bold text-center mb-10">All Jobs</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobListings.map((job) => (
          <li key={job.id}>
            <JobCard job={job} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JoblistingPage;
