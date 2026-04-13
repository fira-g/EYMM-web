import React from "react";
import Image from "next/image";
import ZigzagSteps from "./ZigzagSteps";

const engageSteps = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rerum reprehenderit corporis iure aliquam provident suscipit iste ab omnis facilis id et quis impedit, dicta perferendis dolor. Commodi, odit beatae!",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rerum reprehenderit corporis iure aliquam provident suscipit iste ab omnis facilis id et quis impedit, dicta perferendis dolor. Commodi, odit beatae!",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rerum reprehenderit corporis iure aliquam provident suscipit iste ab omnis facilis id et quis impedit, dicta perferendis dolor. Commodi, odit beatae!",
  },
];

function MemberCare({ isReversed }: { isReversed: boolean }) {
  return (
    <>
      <section className="bg-gray-200 w-full py-10" id="member-care">
        <h1 className="text-4xl font-extrabold text-center py-2 text-black mb-4">
          Member Care
        </h1>
        <div
          className={`flex ${isReversed ? "flex-row-reverse" : "flex-row"} justify-center items-center gap-10 max-w-5xl mx-auto`}
        >
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
              fuga suscipit magnam consequuntur culpa repellat sunt, eum porro
              quia adipisci iste asperiores amet qui. Voluptatibus in expedita
              eum amet nesciunt.lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illum fuga suscipit magnam consequuntur culpa
              repellat sunt, eum porro quia adipisci iste asperiores amet qui.
              Voluptatibus in expedita eum amet nesciunt. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Earum vitae, reiciendis
              perspiciatis molestiae a error, assumenda officia officiis dicta
              animi quae autem incidunt ex est libero! Illo, sint velit.
              Repellendus. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Incidunt corporis, sit commodi beatae dolore quisquam nam
              perferendis officia explicabo, pariatur nostrum cupiditate animi.
            </p>
          </div>
        </div>
      </section>
      {/* engage */}
      <section className="bg-gray-300 w-full py-10">
        <h1 className="text-center font-black font-bold text-xl">
          How to Engage in Mission School Department?
        </h1>
        <ZigzagSteps steps={engageSteps} />
      </section>
    </>
  );
}

export default MemberCare;
