import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

function JobCard({ job }: any) {
  return (
    <div className="p-3 rounded-lg border-2 ">
      <Image
        src="https://lh3.googleusercontent.com/RsEv0ZlVZkwHVxGKH0a8mjDWvqiulD5YX3yX4mnHR4zWawCMB2G_1SNABw5ezxOBuaHn0klco_IPd8XqSzFfMLvdPGgf2mlSoHl9mA"
        alt="google logo"
        width={30}
        height={30}
        className="rounded-full"
      />
      <h1>{job.title}</h1>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <div className="">
        <div>
          ${job.salary.min} to ${job.salary.max} {job.salary.type}
        </div>
        <div>{job.type}</div>
      </div>
      <div>{job.description}</div>
      <div className="text-center">
        <Button variant={"outline"} size={"lg"} className="rounded-xl ">
          Apply
        </Button>
      </div>
    </div>
  );
}

export default JobCard;
