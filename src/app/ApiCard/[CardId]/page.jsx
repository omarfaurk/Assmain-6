import AddToToday from "@/app/buttonsection/AddToToday";
import SaveForLater from "@/app/buttonsection/SaveForLater";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";


const WorkoutCardApi = async (CardId) => {
  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${CardId}`
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
};

// Inner component: this is where params + fetch happen (inside Suspense)
const WorkoutDetails = async ({ params }) => {
  const { CardId } = await params;
  const WorkOut = await WorkoutCardApi(CardId);

  if (!WorkOut || !WorkOut.image) {
    notFound();
  }

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 md:grid-cols-2 lg:gap-8">
      {/* Workout Image */}
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={WorkOut.image}
          alt={WorkOut.name}
          width={740}
          height={900}
          priority
          className="h-72 w-full rounded-2xl object-cover sm:h-96 md:h-120 lg:h-140"
        />
      </div>

      {/* Workout Information */}
      <div className="min-w-0 space-y-5">
        <div className="space-y-3">
          <h1 className="text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
            {WorkOut.name}
          </h1>
          <p className="text-sm leading-6 text-[#9CA3AF] sm:text-base">
            {WorkOut.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {WorkOut.muscleGroups?.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#CCF800] px-3 py-1 text-xs font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-700 bg-[#171A21]">
          <table className="w-full border-collapse text-xs sm:text-sm">
            <tbody>
              {[
                ["Equipment", WorkOut.equipment],
                ["Difficulty", WorkOut.difficulty],
                ["Sets", WorkOut.sets],
                ["Reps", WorkOut.reps],
                ["Duration", `${WorkOut.duration} min`],
                ["Calories", `${WorkOut.caloriesBurned} kcal`],
                ["Rating", ` ${WorkOut.rating}`],
              ].map(([label, value]) => (
                <tr
                  key={label}
                  className="border-b border-gray-800 last:border-0"
                >
                  <th className="w-1/2 px-3 py-3 text-left font-medium uppercase text-[#9CA3AF] sm:px-4">
                    {label}
                  </th>
                  <td className="wrap-break-word px-3 py-3 text-right font-medium text-white sm:px-4">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wide">
            Instructions
          </h2>
          <ol className="list-inside list-decimal space-y-2 text-xs leading-5 text-[#9CA3AF] sm:text-sm">
            {WorkOut.instructions?.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <AddToToday WorkOut={WorkOut} />
          <SaveForLater WorkOut={WorkOut} />
        </div>
      </div>
    </div>
  );
};

// Page: no awaiting here, just the Suspense shell
const Pages = ({ params }) => {
  return (
    <div className="min-h-screen bg-[#121316] px-4 py-6 text-white sm:px-6 lg:px-10 lg:py-10">
      <Suspense
        fallback={
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            <div className="h-72 animate-pulse rounded-2xl bg-[#171A21] sm:h-96 md:h-120" />
            <div className="space-y-4">
              <div className="h-8 w-2/3 animate-pulse rounded bg-[#171A21]" />
              <div className="h-4 w-full animate-pulse rounded bg-[#171A21]" />
              <div className="h-48 animate-pulse rounded bg-[#171A21]" />
            </div>
          </div>
        }
      >
        <WorkoutDetails params={params} />
      </Suspense>
    </div>
  );
};

export default Pages;