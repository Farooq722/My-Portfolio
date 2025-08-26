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
      title: "Mediom Blog",
      github: "https://github.com/Farooq722/medium",
      href: "https://mediom-five.vercel.app",
      decs:
        "About Website is totally fine and working, But there are some minor fixes need to be done and will focus on that, till then website is deployed and working fine.",
    },
    {
      title: "Gen Image AI",
      github: "https://github.com/Farooq722/Gen-Image",
      href: "https://gen-image-fe.vercel.app",
      decs:
        "About Website is totally fine and working, But there are some minor fixes need to be done and will focus on that, till then website is deployed and working fine.",
    },
    {
      title: "1bullex Landing Page",
      github: "https://github.com/Farooq722/bull-landing-page",
      href: "https://1bullex.vercel.app",
      decs:
        "About Website is totally fine and working, But there are some minor fixes need to be done and will focus on that, till then website is deployed and working fine. ",
    },
    {
      title: "Appit Landing Page",
      github: "https://github.com/Farooq722/appit-landing-page",
      href: "https://appit-ten.vercel.app",
      decs:
        "About Website is totally fine and working, But there are some minor fixes need to be done and will focus on that, till then website is deployed and working fine.",
    },
    {
      title: "Paytm Replica",
      github: "https://github.com/Farooq722/paytm",
      href: "https://github.com/Farooq722/paytm",
      decs:
        "This project is a Paytm-like application that enables users to sign up, log in, transfer money between accounts, and view account details via a dashboard. It features a simple wallet system with secure authentication and transaction capabilities, utilizing modern web technologies.",
    },
  ];

  return (
    <div className="text-white mt-5 px-4 sm:px-0">
      <h1 className="text-3xl font-semibold font-serif leading-tight text-center sm:text-left">
        Proof Of Work
      </h1>
      <p className="text-sm mt-2 text-gray-300 tracking-[0.7px] text-center sm:text-left">
        My work is available at{" "}
        <span className="text-white font-medium">X, LinkedIn & Notion</span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-3 sm:gap-4 py-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mt-6 bg-transparent border border-gray-600 px-4 py-6 rounded space-y-3"
          >
            <h2 className="text-2xl font-semibold text-gray-300">
              {project.title}
            </h2>
            <p className="text-sm text-gray-500 font-medium leading-tight line-clamp-4">
              {project.decs}
            </p>
            <div className="flex items-center gap-6 mt-4">
              <a
                href={project.href}
                target="_blank"
                className="text-gray-400 hover:text-red-100"
              >
                <VscLiveShare size={20} />
              </a>
              <a
                href={project.github}
                target="_blank"
                className="text-gray-400 hover:text-red-100"
              >
                <ImGithub size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h1 className="text-xl font-medium mt-4 text-gray-500 text-center sm:text-left">
          Github contributions
        </h1>
        <div className="w-full p-4">
          <img
            src="https://ghchart.rshah.org/Farooq722"
            alt="Farooq Github chart"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};
