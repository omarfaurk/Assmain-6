"use client";

import { WorkOutContextApi } from "@/context/WorkOutContext";
import React, { useContext } from "react";

const AddToToday = ({ WorkOut }) => {
  const { addToPlan } = useContext(WorkOutContextApi);

  return (
    <button
      type="button"
      onClick={() => addToPlan(WorkOut)}
      className="rounded-md bg-[#C2F800] px-4 py-3 text-sm font-bold text-black transition hover:bg-[#b8e600]"
    >
      Add to today&apos;s plan
    </button>
  );
};

export default AddToToday;