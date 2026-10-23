import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiClock2, CiStar } from 'react-icons/ci';
import { FaFire } from 'react-icons/fa';

const CardDisign = ({Work}) => {
    return (
  <Link href={`/ApiCard/${Work.id}`}>
       <div className="card my-5 w-96 shadow-sm  bg-[#20242E] ">
  <figure >
    <Image
      src={Work.image}
      alt="Card Images" width={400} height={200} className='rounded-2xl'/>
  </figure>
  <div className="card-body text-white">
   <div className='flex flex-wrap gap-2'>
    {Work.muscleGroups.map((muscle)=><span key={muscle} className="badge badge-outline bg-[#C2F800] p-4 font-bold text-black">{muscle}</span>)}
   </div>
    <h2 className="card-title">{Work.name}</h2>
    <p>{Work.equipment}</p>
    <hr />
    <div className='flex justify-around items-center'>
   <span className='flex items-center gap-2'> <CiClock2 /> {Work.duration}</span>
   <span className='flex items-center gap-2'> <FaFire /> {Work.caloriesBurned}</span>
   <span className='flex items-center gap-2'> <CiStar /> {Work.rating}</span>
    </div>
  </div>
</div>
</Link>
    );
};

export default CardDisign;