"use client";

import { WorkOutContextApi } from "@/context/WorkOutContext";
import React, { useContext } from "react";
import { CiBookmark } from "react-icons/ci";

const SaveForLater = ({ WorkOut }) => {
  const { saveForLater } = useContext(WorkOutContextApi);

  return (
    <button
      type="button"
      onClick={() => saveForLater(WorkOut)}
      className="flex items-center justify-center gap-3 rounded-md border border-gray-700 px-4 py-3 text-sm text-white transition hover:bg-[#232834]"
    >
      <CiBookmark /> Save for later
    </button>
  );
};

export default SaveForLater;