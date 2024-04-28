import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className=" w-full bg-white border-b z-10 py-3 shadow-sm">
      <div className=" flex items-center justify-between px-4">
        <div className="w-4/6 flex items-center gap-3">
          <Image
            src="/apple-touch-icon.png"
            alt="Logo"
            width={50}
            height={30}
            className="rounded-md w-9 h-9"
          />

          <Link href="/" className="text-xl font-bold">
            HireStud
          </Link>
          <input
            type="text"
            placeholder="Enter Job or company"
            className="w-full flex-grow min-w-0 border rounded-md pl-3 py-2 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-4">
          <Link href="/company" className="hover:text-blue-500">
            Company
          </Link>

          <Link href="/joblisting" className="hover:text-blue-500">
            Jobs
          </Link>

          <Link href="/reminder" className="hover:text-blue-500">
            Reminders
          </Link>
          <div>|</div>

          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md"
          >
            Login / Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};
