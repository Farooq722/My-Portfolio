import { ImGithub } from "react-icons/im";
import { VscLiveShare } from "react-icons/vsc";

export const Hero2 = () => {
  const projects = [
    {
      title: "100xDevsAlumni",
      github: "https://github.com/Farooq722/100xDevsAlumni",
      href: "https://100x-devs-alumni-frontend.vercel.app",
      decs:
        "About Website is totally fine and working, But there are some minor fixes need to be done and will focus on that, till then website is deployed and working fine.",
    },
    {
      title: "100xDevsAlumni",
      github: "https://github.com/Farooq722/100xDevsAlumni",
      href: "https://100x-devs-alumni-frontend.vercel.app",
      decs:
        "About Website is totally fine and working, But there are some minor fixes need to be done and will focus on that, till then website is deployed and working fine.",
    },
    {
      title: "100xDevsAlumni",
      github: "https://github.com/Farooq722/100xDevsAlumni",
      href: "https://100x-devs-alumni-frontend.vercel.app",
      decs:
        "About Website is totally fine and working, But there are some minor fixes need to be done and will focus on that, till then website is deployed and working fine.",
    },
    {
      title: "100xDevsAlumni",
      github: "https://github.com/Farooq722/100xDevsAlumni",
      href: "https://100x-devs-alumni-frontend.vercel.app",
      decs:
        "About Website is totally fine and working, But there are some minor fixes need to be done and will focus on that, till then website is deployed and working fine. ",
    },
    {
      title: "100xDevsAlumni",
      github: "https://github.com/Farooq722/100xDevsAlumni",
      href: "https://100x-devs-alumni-frontend.vercel.app",
      decs:
        "About Website is totally fine and working, But there are some minor fixes need to be done and will focus on that, till then website is deployed and working fine.",
    },
    {
      title: "100xDevsAlumni",
      github: "https://github.com/Farooq722/100xDevsAlumni",
      href: "https://100x-devs-alumni-frontend.vercel.app",
      decs:
        "About Website is totally fine and working, But there are some minor fixes need to be done and will focus on that, till then website is deployed and working fine. ",
    },
  ];

  return (
    <div className="text-white mt-5">
      <h1 className="text-3xl font-semibold font-serif leading-tight">
        Proof Of Work
      </h1>
      <p className="text-sm mt-2 text-gray-300 tracking-[0.7px]">
        My work is available at{" "}
        <span className="text-white font-medium">X, LinkedIn & Notion</span>
      </p>
      <div className="grid grid-cols-2 gap-2 py-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mt-6 bg-transparent border border-gray-600 px-4 py-6 rounded space-y-3 "
          >
            <h2 className="text-2xl font-semibold text-gray-300">
              {project.title}
            </h2>
            <p className="text-sm text-gray-500 font-medium leading-tight line-clamp-5">
              {project.decs}
            </p>
            <div className="flex items-center gap-6 mt-4">
              <a
                href={project.href}
                target="_blank"
                className="text-gray-400 hover:text-red-100 "
              >
                <VscLiveShare size={20} />
              </a>
              <a
                href={project.href}
                target="_blank"
                className="text-gray-400 hover:text-red-100 "
              >
                <ImGithub size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-xl font-medium mt-4 text-gray-500">
          Github contributions
        </h1>
        <div className="w-full p-4">
          <img
            src="https://ghchart.rshah.org/Farooq722"
            alt="Farooq Github chart"
          />
        </div>
      </div>
    </div>
  );
};
