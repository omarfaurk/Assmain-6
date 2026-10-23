import Banner from "@/container/Banner";
import WorkOutApi from "@/app/ApiCard/WorkOutApi";


export default function Home() {
  return (
    <div className=" bg-black ">
      <Banner />
      <WorkOutApi />
    </div>
  );
}
