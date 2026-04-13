import React from "react";

function ZigzagSteps({ steps }: { steps: { text: string }[] }) {
  let isEven = true;
  return (
    <div className="grid gap- grid-cols-1 md:grid-cols-2  max-w-5xl mx-auto mt-10">
      {steps.map((step, index) => {
        isEven = index % 2 === 0;
        return (
          <React.Fragment key={index}>
            <>
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? "" : "flex-row-reverse border-l-2 border-primary-200"} py-2 px-8 justify-center gap-6`}
              >
                <p className="text-justify text-xs text-black">{step.text}</p>
                <div className="h-10 w-10 shrink-0 rounded-[50%] bg-accent/70"></div>
              </div>
              {isEven && <div className="border-l-2 border-primary-200"></div>}
              {isEven && <div className=""></div>}
            </>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default ZigzagSteps;
