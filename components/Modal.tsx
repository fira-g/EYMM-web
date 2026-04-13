"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.joshuaproject.net/v1/people_groups/daily_unreached.json?api_key=7e8e7b1e1a63&lang=eng",
    )
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((json) => {
        setData(json[0] || json);
        setLoading(false);
        console.log("API response:", json);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-base-100 w-full max-w-lg p-6 rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-primary-100">
            Pray for {data?.PeopNameInCountry || "Unreached People Group"}
          </h2>
          <button onClick={onClose} className="text-red-500 hover:text-red-700">
            ✕
          </button>
        </div>

        {loading ? (
          <div className="py-10 text-primary-200 text-center">
            getting data...
          </div>
        ) : error ? (
          <div className="py-10 text-center text-red-500">
            Could not load data.
          </div>
        ) : (
          <>
            <div className="flex gap-4 mb-4">
              <div className="w-[40%] h-32 relative">
                <Image
                  src={
                    data?.PeopNameInCountry
                      ? `${data?.PeopleGroupPhotoURL}`
                      : "/bg.png"
                  }
                  alt="Unreached Group"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-primary-100 font-bold leading-tight">
                  {data?.PeopNameInCountry || "People Group"}
                </h3>
                <p className="text-sm text-primary-200">
                  {data?.Ctry || "Unknown Country"} ,{" "}
                  {data?.Continent || "Unknown Continent"}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase text-blue-500">
                  Population: {data?.Population?.toLocaleString()}
                </p>
                <p className="text-xs text-primary-200">
                  Primary religion: {data?.PrimaryReligion || "Unknown"}
                </p>
                <p className="text-xs text-primary-200">
                  Evangelical Percentage :{" "}
                  {data?.PercentEvangelicalPC || "Unknown"}%
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-xl mb-6">
              <p className="text-sm italic text-gray-700 dark:text-gray-300">
                {data?.PrayForPG || "No prayer points available."}
              </p>
            </div>
          </>
        )}

        <button
          onClick={onClose}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );
}
