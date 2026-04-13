"use client";
import Footer from "@/components/Footer";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { url } from "inspector";
import ZigzagSteps from "./components/ZigzagSteps";
import MissionSchool from "./components/MissionSchool";
import MemberCare from "./components/MemberCare";
import TechAndMedia from "./components/TechAndMedia";
import RegionalLeader from "./components/RegionalLeader";
import CentralManagement from "./components/CentralManagement";
import Startup from "./components/Startup";

function DepartmentsPage() {
  const departments = [
    {
      name: "Mission School",
      image: "/mission-school.png",
      url: "#mission-school",
    },
    {
      name: "Member Care",
      image: "/mission-school.png",
      url: "#member-care",
    },
    {
      name: "Tech and Media",
      image: "/mission-school.png",
      url: "#tech-and-media",
    },
    {
      name: "Startup and Innovation",
      image: "/mission-school.png",
      url: "#startup-and-innovation",
    },
    {
      name: "Central Management",
      image: "/mission-school.png",
      url: "#central-management",
    },
    {
      name: "Regional Leadership",
      image: "/mission-school.png",
      url: "#regional-leader",
    },
  ];

  return (
    <div className="flex text-black min-h-screen flex-col bg-[url('/departments-bg.png')] bg-cover bg-center bg-base-100 max-h-screen">
      <div className=" flex flex-col justify-center items-center gap-0">
        <main className="flex  min-h-screen w-full mx-auto flex-col items-center justify-center ">
          {/* Hero Section */}

          <section className="flex flex-col bg-linear-to-bl from-black/65 to-black/35 items-center w-full justify-center gap-10 h-screen -mb-15">
            <div className="max-w-5xl relative flex flex-col items-center">
              <h1 className="relative z-20 text-5xl lg:text-7xl font-extrabold text-center text-base-100">
                How we Do?
              </h1>

              <div className="bg-accent/80 w-[calc(100%+2rem)]  h-7 absolute bottom-[1px]"></div>
            </div>
          </section>

          {/* Our departments */}
          <section className="bg-base-100 w-full py-10">
            <h1 className="text-4xl font-extrabold text-center py-2 text-black mb-4">
              Our Departments
            </h1>
            <div className="flex justify-center items-center gap-8 flex-wrap max-w-7xl mx-auto py-6">
              {departments.map((department) => (
                <Link
                  key={department.name}
                  href={department.url}
                  className="flex flex-col items-center gap-2 "
                >
                  <Image
                    src={department.image}
                    alt={department.name}
                    width={70}
                    height={70}
                  />
                  <h1 className=" text-center text-black">{department.name}</h1>
                </Link>
              ))}
            </div>
          </section>

          {/* Mission School     */}
          <MissionSchool isReversed={false} />
          <MemberCare isReversed={true} />
          <TechAndMedia isReversed={false} />
          <RegionalLeader isReversed={true} />
          <CentralManagement isReversed={false} />
          <Startup isReversed={true} />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default DepartmentsPage;
