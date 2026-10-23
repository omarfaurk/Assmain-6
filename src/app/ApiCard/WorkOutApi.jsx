import CardDisign from '@/app/WorkOutCard/CardDisign';
import React from 'react';
import { cacheLife } from "next/cache";

const WorkoutCardApi = async () => {
  "use cache";
  cacheLife("hours");

  const response = await fetch("https://api.api-store.workers.dev/api/fitlog");
  if (!response.ok) return [];
  return response.json();
};

const WorkOutApi = async() => {
    const MyAllWorkOut = await WorkoutCardApi();
    return (
        <div className='container mx-auto my-20'>
            <div className='text-left'>
                <h1 className='font-bold text-white text-4xl'>THE LIBRARY</h1><br />
                <p className='text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
{MyAllWorkOut.map((Work, index)=><CardDisign key={index} Work={Work}></CardDisign>)}
            </div>
        </div>
    );
};
export default WorkOutApi;