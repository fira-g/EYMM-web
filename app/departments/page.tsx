import Footer from "@/components/Footer";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { url } from "inspector";

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
      url: "/departments/mission-school",
    },
    {
      name: "Tech and Media",
      image: "/mission-school.png",
      url: "/departments/mission-school",
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
            <div className="flex justify-center items-center gap-14 flex-wrap max-w-5xl mx-auto ">
              {departments.map((department) => (
                <Link
                  key={department.name}
                  href={department.url}
                  className="flex flex-col items-center gap-2 py-6"
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
          <section className="bg-gray-200 w-full py-10" id="mission-school">
            <h1 className="text-4xl font-extrabold text-center py-2 text-black mb-4">
              Mission School
            </h1>
            <div className="flex justify-center items-center gap-10 max-w-5xl mx-auto ">
              <div className="flex-1">
                <Image
                  src="/mission-school-desc.png"
                  alt="Mission School"
                  width={400}
                  height={200}
                  className="w-full  object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-md text-black max-w-3xl mx-auto px-4 flex-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  fuga suscipit magnam consequuntur culpa repellat sunt, eum
                  porro quia adipisci iste asperiores amet qui. Voluptatibus in
                  expedita eum amet nesciunt.lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Illum fuga suscipit magnam
                  consequuntur culpa repellat sunt, eum porro quia adipisci iste
                  asperiores amet qui. Voluptatibus in expedita eum amet
                  nesciunt. Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Earum vitae, reiciendis perspiciatis molestiae a error,
                  assumenda officia officiis dicta animi quae autem incidunt ex
                  est libero! Illo, sint velit. Repellendus. Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Incidunt corporis, sit
                  commodi beatae dolore quisquam nam perferendis officia
                  explicabo, pariatur nostrum cupiditate animi amet? Dolorem
                  enim ipsam error maiores ex.
                </p>
              </div>
            </div>
          </section>
          {/* engage */}
          <section className="bg-gray-300 w-full py-10">
            <h1 className="text-center font-black font-bold text-xl">
              How to Engage in Mission School Department?
            </h1>
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default DepartmentsPage;
