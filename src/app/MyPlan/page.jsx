"use client";

import { WorkOutContextApi } from "@/context/WorkOutContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useMemo, useState } from "react";
import { FaFire } from "react-icons/fa";
import { FiClock, FiStar, FiX } from "react-icons/fi";

const SORT_KEYS = {
  duration: "duration",
  calories: "caloriesBurned",
  rating: "rating",
};

const Myplan = () => {
  const {
    AddWorkOut = [],
    SaveWorkOut = [],
    loaded,
    removeFromPlan,
    removeFromSaved,
    toggleDone,
  } = useContext(WorkOutContextApi);

  const [activeTab, setActiveTab] = useState("plan"); // "plan" | "saved"
  const [sortBy, setSortBy] = useState("duration");

  const list = activeTab === "plan" ? AddWorkOut : SaveWorkOut;

  const sortedList = useMemo(() => {
    const key = SORT_KEYS[sortBy];
    return [...list].sort((a, b) => Number(b[key]) - Number(a[key]));
  }, [list, sortBy]);

  // Live metrics from Today's Plan
  const totalExercises = AddWorkOut.length;
  const totalMinutes = AddWorkOut.reduce(
    (sum, w) => sum + Number(w.duration || 0),
    0
  );
  const totalCalories = AddWorkOut.reduce(
    (sum, w) => sum + Number(w.caloriesBurned || 0),
    0
  );

  const stats = [
    { label: "Exercises", value: totalExercises, accent: true },
    { label: "Minutes", value: totalMinutes },
    { label: "Calories", value: totalCalories },
  ];

  const tabClass = (tab) =>
    `px-5 py-2 text-sm font-medium rounded-lg cursor-pointer transition-all ${
      activeTab === tab
        ? "bg-[#252836] text-[#ccff00]"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title */}
        <div className="my-8 sm:my-10">
          <h1 className="uppercase font-bold text-3xl sm:text-4xl">My Plan</h1>
          <p className="text-[#8A92A0] mt-3 text-sm sm:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border border-[#232732] rounded-lg">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`p-5 sm:p-6 ${
                i < 2
                  ? "border-b sm:border-b-0 sm:border-r border-[#232732]"
                  : ""
              }`}
            >
              <p className="text-sm text-[#8A92A0] mb-2">{s.label}</p>
              <span
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
                  s.accent ? "text-[#CCFF00]" : ""
                }`}
              >
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0f1117] my-20 text-white p-6 sm:p-14 rounded-xl min-h-100 container mx-auto">
        {/* Tabs + sort */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex bg-[#181a20] p-1 rounded-xl border border-gray-800">
            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={tabClass("plan")}
            >
              Today&apos;s Plan
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={tabClass("saved")}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Sort By</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#181a20] border border-gray-800 text-white rounded-lg px-4 py-2 pr-8 appearance-none focus:outline-none cursor-pointer"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs">
                ▼
              </span>
            </div>
          </div>
        </div>

        {/* Loading / Empty / List */}
        {!loaded ? (
          <p className="py-20 text-center text-gray-400">Loading workouts…</p>
        ) : sortedList.length === 0 ? (
          <div className="border border-dashed border-gray-800 bg-[#12141c] rounded-2xl p-12 flex flex-col items-center justify-center text-center min-h-75">
            <h2 className="text-xl font-black uppercase tracking-wider text-white mb-2">
              Nothing Here Yet
            </h2>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold text-sm px-6 py-3 rounded-full transition-all shadow-[0_0_15px_rgba(204,255,0,0.3)]"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {sortedList.map((w) => (
              <div
                key={w.id}
                className="flex flex-wrap items-center gap-4 rounded-2xl border border-gray-800 bg-[#12141c] p-4"
              >
                <Image
                  src={w.image}
                  alt={w.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 shrink-0 rounded-xl object-cover"
                />

                <div className="min-w-0 flex-1">
                  <h3
                    className={`font-bold uppercase ${
                      w.done ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {w.name}
                  </h3>
                  <p className="mt-1 text-xs text-gray-400">{w.equipment}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-gray-300">
                    <span className="flex items-center gap-1">
                      <FiClock /> {w.duration} min
                    </span>
                    <span className="flex items-center gap-1">
                      <FaFire /> {w.caloriesBurned} kcal
                    </span>
                    <span className="flex items-center gap-1">
                      <FiStar /> {w.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/ApiCard/${w.id}`}
                    className="rounded-md border border-gray-700 px-3 py-2 text-xs text-white hover:bg-[#232834]"
                  >
                    View Details
                  </Link>

                  {activeTab === "plan" && (
                    <button
                      type="button"
                      onClick={() => toggleDone(w.id)}
                      className="rounded-md bg-[#C2F800] px-3 py-2 text-xs font-bold text-black"
                    >
                      {w.done ? "Undo" : "Mark as Done"}
                    </button>
                  )}

                  <button
                    type="button"
                    aria-label={`Remove ${w.name}`}
                    onClick={() =>
                      activeTab === "plan"
                        ? removeFromPlan(w.id)
                        : removeFromSaved(w.id)
                    }
                    className="rounded-md border border-gray-700 p-2 text-white hover:bg-[#232834]"
                  >
                    <FiX />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Myplan;