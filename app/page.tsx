import Image from "next/image";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import ActivityCard from "@/components/ActivityCard";
import {
  Atom,
  BarChart,
  Church,
  Leaf,
  LucideQuote,
  Quote,
  School,
  SunIcon,
  TextQuote,
} from "lucide-react";
import TestimonyCard from "@/components/TestimonyCard";

const images = [
  "/bg.png",
  "/bg.png",
  "/bg.png",
  "/logo.png",
  "/bg.png",
  "/bg.png",
];

//mock data for activities

const activities = [
  {
    image: "/bg.png",
    title: "Youth Training Workshop",
    description:
      "A comprehensive training program equipping youth with evangelism and discipleship skills.",
    link: "https://example.com/activity1",
  },
  {
    image: "/logo.png",
    title: "Mission Trip to Rural Ethiopia",
    description:
      "A short-term mission trip focused on community development and sharing the Gospel.",
    link: "https://example.com/activity2",
  },
  {
    image: "/bg.png",
    title: "Church Planting Initiative",
    description:
      "An initiative to plant new churches in unreached areas of Ethiopia.",
    link: "https://example.com/activity3",
  },
  {
    image: "/bg.png",
    title: "Youth Training Workshop",
    description:
      "A comprehensive training program equipping youth with evangelism and discipleship skills.",
    link: "https://example.com/activity1",
  },
  {
    image: "/logo.png",
    title: "Mission Trip to Rural Ethiopia",
    description:
      "A short-term mission trip focused on community development and sharing the Gospel.",
    link: "https://example.com/activity2",
  },
];

// mock data for testimonies, replace with real data later
const testimonies = [
  {
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. deserunt officia",
    name: "John Doe",
  },
  {
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. deserunt officia",
    name: "Jane Doe",
  },
  {
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. deserunt officia",
    name: "Alice Smith",
  },
];

export default function Home() {
  return (
    <div className="flex text-black text-min-h-screen flex-col bg-[url('/bg.png')] bg-cover bg-center bg-base-100 max-h-screen">
      <div className=" flex flex-col justify-center items-center">
        <Navbar />
        <main className="flex  min-h-screen w-full mx-auto flex-col items-center justify-center ">
          {/* Hero Section */}

          <section className="flex flex-col bg-linear-to-bl from-black/65 to-black/35 items-center w-full justify-center gap-10 h-screen -mb-15">
            <div className="max-w-4xl">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-center text-base-100/65">
                Mobilizing Ethiopian Youth For God's Mission
              </h1>
              <h2 className="text-center mx-auto text-base-100">
                The Awakening of the Body of Christ For the Great Commision
              </h2>
            </div>
          </section>

          {/* About Section-vision and misssion  */}
          <section className="bg-base-100  min-h-screen w-full flex">
            <div className=" flex flex-col gap-10 justify-between items-center">
              <div className="flex max-w-xl flex-col gap-1 items-center justify-center pt-10">
                <p className="text-black text-xs font-extralight">
                  A little about
                  <span className="font-extrabold text-primary-200"> EYMM</span>
                </p>
                <h1 className="text-3xl text-black font-bold">Who Are We ?</h1>
                <p className="text-center mt-2">
                  Ethiopian Youth Mission Movement (EYMM) is a
                  mission-mobilizing movement passionate about seeing Ethiopian
                  believers actively engaded in God's global mission.
                </p>
                <p className="text-center mt-3">
                  We exist to inspirre and equip youth to share the Gospel,
                  starting with their families and communities, crossing
                  cultural boundaries and reaching unreached nations.
                </p>
              </div>
              <div className="flex flex-col w-full   bg-gray-300 items-center  justify-evenly">
                <div className=" flex flex-1 justify-center px-auto sm:px-20 md:px-50 lg:px-80 py-20">
                  <div className="flex-1 flex flex-col justify-center items-center pr-15 gap-3">
                    <h1 className="text-3xl font-extrabold">
                      Our <span className="text-primary-200">Vision</span>
                    </h1>
                    <p className="text-center">
                      To see all Ethiopians believers mobilized to reach the
                      unreached
                    </p>
                  </div>
                  <div className="h-full rounded w-1 bg-primary-200"></div>
                  <div className="flex-1  flex flex-col justify-center items-center pl-15 gap-3">
                    <h1 className="text-3xl font-extrabold">
                      Our <span className="text-primary-200">Mission</span>
                    </h1>
                    <p className="text-center">
                      We, as a mission movement exist to mobilize believers to
                      reach the unreached, through developing global missionary
                      vision, church engagement and self-supporting missions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Activities */}
          <section className="bg-base-100 min-h-screen w-full flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col gap-1 items-center ">
              <p className="text-black text-xs font-extralight">
                What we do at
                <span className="font-extrabold text-primary-200"> EYMM</span>
              </p>
              <h1 className="text-4xl text-black font-bold">
                Recent Activities
              </h1>
            </div>
            <div className="mt-10">
              <Carousel activities={activities} />
            </div>
          </section>

          {/* stats */}
          <section className="py-12 px-10 w-full bg-linear-to-r from-primary-100 via-30%  via-primary-200 to-primary-100 flex items-center justify-between ">
            <div className="flex flex-col items-center justify-center text-center text-base-100 flex-1">
              <h1 className="text-lg md:text-3xl lg:text-7xl font-bold">18</h1>
              <h2 className="text-sm md:text-lg lg:text-2xl">
                Covered regions
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center text-center text-base-100 flex-1">
              <h1 className="text-lg md:text-3xl lg:text-7xl font-bold">
                22500
              </h1>
              <h2 className="text-sm md:text-lg lg:text-2xl">Trained Youth</h2>
            </div>
            <div className="flex flex-col items-center justify-center text-center text-base-100 flex-1">
              <h1 className="text-lg md:text-3xl lg:text-7xl font-bold">450</h1>
              <h2 className="text-sm md:text-lg lg:text-2xl">
                sent on short term missions
              </h2>
            </div>
          </section>

          {/* Testimonials */}
          <section className="bg-base-100 min-h-screen w-full flex flex-col items-center justify-center gap-6 py-16">
            <div className="flex flex-col gap-1 items-center ">
              <p className="text-black text-xs font-extralight">
                What our people are saying about
                <span className="font-extrabold text-primary-200"> EYMM</span>
              </p>
              <h1 className="text-4xl text-black font-bold">Testimonials</h1>
            </div>
            <div className="mt-10 flex flex-row md:flex-row gap-10 items-center justify-center">
              {testimonies.map((t, i) => (
                <div key={i} className="flex-1">
                  <TestimonyCard testimony={t.testimony} name={t.name} />
                </div>
              ))}
            </div>
            <div className="flex flex-row w-full max-w-3xl items-center justify-between gap-15 mt-10">
              <div className="flex flex-col flex-1 gap-3 items-end text-right">
                <h1 className="text-2xl font-bold">
                  We work with the best partner
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ullam placeat sit sunt quidem modi aspernatur ab, neque natus
                  iure iste quae beatae similique in et! Quibusdam ullam eius
                  delectus officia. llam placeat sit sunt quidem modi aspernatur
                  ab, neque natus iure iste quae beatae similique in et!
                  Quibusdam ullam eius delectus officia.
                </p>
                <button className=" text-base-100 px-6 py-1 rounded-md bg-primary-100 hover:bg-primary-100/20 border-primary-100 border-2 hover:text-primary-100 cursor-pointer transition-all">
                  Read More
                </button>
              </div>
              <div className="flex-1">
                <Image
                  src="/crossoverGlobal.png"
                  alt="Partner"
                  width={260}
                  height={220}
                  className="rounded-lg shadow-lg "
                />
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section className="py-2 px-10 w-full bg-linear-to-b from-[#A7DD62] to-[#5A7735] opacity-90 flex items-center justify-between flex-col gap-4 rounded-lg">
            <h2 className="font-extrabold text-2xl">Our Next Steps</h2>
            <div className="flex justify-evenly w-full gap-2">
              <div className="flex flex-col justify-center items-center gap-1 max-w-35">
                <BarChart />
                <p className="text-center">Expand to 150 Coordinators</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1 max-w-35">
                <Leaf />
                <p className="text-center">Plant 100 churches</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1 max-w-35">
                <School />
                <p className="text-center">Launch Mission schools</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1 max-w-35">
                <Atom />
                <p className="text-center">
                  Equip youth through business training
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1 max-w-35">
                <SunIcon />
                <p className="text-center">
                  Develop Business as a Mission(BAM)
                </p>
              </div>
            </div>
          </section>

          {/* Donate */}

          <section className="bg-base-100  w-full flex flex-col items-center gap-4 py-16">
            <h2 className="text-2xl font-extrabold">
              Be part of the movement by giving
            </h2>
            <div className="flex gap-30 mt-4">
              <div className="flex gap-1">
                <Image
                  src={"/telebirr.png"}
                  alt="telebirr logo"
                  width={60}
                  height={20}
                />
                <div className="">
                  <p className="">+251936197341</p>
                  <p className="">Hiwot Abebe</p>
                  <p className="">Director of operations</p>
                </div>
              </div>
              <div className="flex gap-1">
                <Image src={"/cbe.png"} alt="cbe logo" width={60} height={20} />
                <div className="">
                  <p className="">1000421527605</p>
                  <p className="">Ethiopian Youth Mission Mov. Mins.</p>
                </div>
              </div>
            </div>

            <button className="bg-accent px-2 py-1 rounded-lg">Donate</button>
          </section>
        </main>
      </div>
    </div>
  );
}
