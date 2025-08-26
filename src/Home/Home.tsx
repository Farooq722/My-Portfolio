import { Hero1 } from "./body/Hero1";
import { Hero2 } from "./body/Hero2";
import { Hero3 } from "./body/Hero3";
import { Hero4 } from "./body/Hero4";
import { Navbar } from "./Navbar/App";

export const Home = () => {
  return (
    <div className="max-w-[50rem] mx-auto p-4 bg-slate-900 rounded-tl-md rounded-tr-md">
      <Navbar />
      <Hero1 />
      <Hero3 />
      <Hero2 />
      <Hero4 />
    </div>
  );
};
