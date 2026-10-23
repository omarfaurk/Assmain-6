"use client";

import React, { createContext, useEffect, useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const WorkOutContextApi = createContext({});

const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";
const PLAN_CAP = 5;

const WorkOutContext = ({ children }) => {
  const [AddWorkOut, setAddWorkOut] = useState([]);
  const [SaveWorkOut, setSaveWorkOut] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setAddWorkOut(JSON.parse(localStorage.getItem(PLAN_KEY)) ?? []);
        setSaveWorkOut(JSON.parse(localStorage.getItem(SAVED_KEY)) ?? []);
      } catch {
      }
      setLoaded(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

 
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(PLAN_KEY, JSON.stringify(AddWorkOut));
      localStorage.setItem(SAVED_KEY, JSON.stringify(SaveWorkOut));
    } catch {
    }
  }, [AddWorkOut, SaveWorkOut, loaded]);

  const showToast = (message, type = "success") => {
    const options = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: false,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: "light",
      transition: Bounce,
    };

    if (type === "error") {
      toast.error(message, options);
    } else if (type === "info") {
      toast.info(message, options);
    } else {
      toast.success(message, options);
    }
  };

  const addToPlan = (workout) => {
    if (AddWorkOut.some((w) => w.id === workout.id)) {
      showToast("Already in today's plan", "info");
      return;
    }
    const activeCount = AddWorkOut.filter((w) => !w.done).length;
    if (activeCount >= PLAN_CAP) {
      showToast("Plan is full. Finish a lift first.", "error");
      return;
    }
    setAddWorkOut([...AddWorkOut, { ...workout, done: false }]);
    showToast("Added to today's plan");
  };

  const saveForLater = (workout) => {
    if (SaveWorkOut.some((w) => w.id === workout.id)) {
      showToast("Already saved", "info");
      return;
    }
    setSaveWorkOut([...SaveWorkOut, workout]);
    showToast("Saved for later");
  };

  const removeFromPlan = (id) =>
    setAddWorkOut(AddWorkOut.filter((w) => w.id !== id));

  const removeFromSaved = (id) =>
    setSaveWorkOut(SaveWorkOut.filter((w) => w.id !== id));

  const toggleDone = (id) =>
    setAddWorkOut(
      AddWorkOut.map((w) => (w.id === id ? { ...w, done: !w.done } : w))
    );

  const SharedData = {
    AddWorkOut,
    setAddWorkOut,
    SaveWorkOut,
    setSaveWorkOut,
    loaded,
    addToPlan,
    saveForLater,
    removeFromPlan,
    removeFromSaved,
    toggleDone,
    showToast,
  };

  return (
    <WorkOutContextApi.Provider value={SharedData}>
      {children}
      <ToastContainer />
    </WorkOutContextApi.Provider>
  );
};

export default WorkOutContext;