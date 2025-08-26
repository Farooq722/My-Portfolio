import { Hero1 } from "./body/Hero1";
import { Hero2 } from "./body/Hero2";
import { Hero3 } from "./body/Hero3";
import { Hero4 } from "./body/Hero4";
import { Hero5 } from "./body/Hero5";
import { Navbar } from "./Navbar/App";

export const Home = () => {
  return (
    <div className="w-full max-w-[50rem] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 bg-neutral-900 rounded-md">
      <Navbar />
      <Hero1 />
      <span className="block h-[1px] border border-gray-800 w-full" />
      <Hero3 />
      <Hero2 />
      <Hero4 />
      <span className="block h-[1px] border border-gray-800 w-full mt-10" />
      <Hero5 />
    </div>
  );
};
