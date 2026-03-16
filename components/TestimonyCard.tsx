import React from "react";
import Image from "next/image";

interface TestimonyProps {
  testimony: string;
  name: string;
}
function TestimonyCard({ testimony, name }: TestimonyProps) {
  return (
    <div className="bg-orange-400/10 relative max-w-3xs p-10 rounded-lg flex flex-col gap-5 justify-center">
      <Image
        src="/quote.png"
        alt="quote"
        width={80}
        height={80}
        className="absolute -top-8 -left-3 "
      />
      <p className="">{testimony}</p>
      <hr className="border-black" />
      <h3 className="font-bold">- {name}</h3>
    </div>
  );
}

export default TestimonyCard;
