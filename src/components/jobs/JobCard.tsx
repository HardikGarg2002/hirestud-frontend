import Image from "next/image";
import React from "react";

function JobCard(job: any) {
  return (
    <div className="flex ">
      <div className="flex">
        <Image
          src="https://lh3.googleusercontent.com/RsEv0ZlVZkwHVxGKH0a8mjDWvqiulD5YX3yX4mnHR4zWawCMB2G_1SNABw5ezxOBuaHn0klco_IPd8XqSzFfMLvdPGgf2mlSoHl9mA"
          alt="google logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h1>{job.title}</h1>
          <p>{job.company}</p>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default JobCard;
