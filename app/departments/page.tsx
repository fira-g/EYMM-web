import Footer from "@/components/Footer";
import { Link } from "lucide-react";
import React from "react";
import Image from "next/image";

function DepartmentsPage() {
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
          <section>
            <Link href="/">
              <Image
                src="/departments-image.png"
                alt="Departments"
                width={80}
                height={80}
              />
            </Link>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default DepartmentsPage;
