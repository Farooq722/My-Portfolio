import { ImGithub } from "react-icons/im";
import { VscLiveShare } from "react-icons/vsc";

export const Hero2 = () => {
  const projects = [
    {
      title: "100xDevsAlumni",
      github: "https://github.com/Farooq722/100xDevsAlumni",
      href: "https://100x-devs-alumni-frontend.vercel.app",
      decs:
        "100xDevs Alumni is a community-driven platform where graduates of the 100xDevs program connect, showcase profiles, and collaborate. It helps alumni network, share opportunities, and mentor peers while enabling recruiters to discover talent. With features like directories, role management, and analytics, it strengthens professional growth and long-term collaboration.",
    },
    {
      title: "Mediom Blog",
      github: "https://github.com/Farooq722/medium",
      href: "https://mediom-five.vercel.app",
      decs:
        "Medium is an online publishing platform where writers share stories, ideas, and insights with a global audience. It provides a clean, distraction-free writing experience and allows readers to engage through highlights and comments. Writers can grow audiences, join the Partner Program, and earn from readership, making storytelling widely accessible.",
    },
    {
      title: "Gen Image AI",
      github: "https://github.com/Farooq722/Gen-Image",
      href: "https://gen-image-fe.vercel.app",
      decs:
        "Gen Image AI model use deep learning to create realistic or artistic visuals from text prompts. Trained on vast image–text datasets, they learn patterns of style, color, and composition. Users simply describe what they imagine, and the model generates unique images, revolutionizing creativity, design, and visual content creation globally.",
    },
    {
      title: "1bullex Landing Page",
      github: "https://github.com/Farooq722/bull-landing-page",
      href: "https://1bullex.vercel.app",
      decs:
        "1Bullex Landing Page highlights modern design, responsive layouts, and interactive UI components. Built with clean code, animations, and Tailwind, it demonstrates creativity, frontend expertise, and attention to user experience.",
    },
    {
      title: "Appit Landing Page",
      github: "https://github.com/Farooq722/appit-landing-page",
      href: "https://appit-ten.vercel.app",
      decs:
        "Appit Landing Page showcases sleek design, responsive sections, and interactive elements. Built with modern frontend tools, it demonstrates user-focused UI, smooth animations, and clean code to highlight professional web development skills.",
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
            className="mt-6 bg-transparent border border-gray-600 px-4 py-6 shadow-lg shadow-white/15 rounded-lg space-y-3"
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
        <h1 className="text-xl font-medium mt-8 text-gray-500 text-center sm:text-left">
          Github contributions
        </h1>
        <div className="w-full p-4 overflow-x-auto">
          <img
            src="https://ghchart.rshah.org/Farooq722"
            alt="Farooq Github chart"
            className="min-w-[600px] max-w-none h-full"
          />
        </div>
      </div>
    </div>
  );
};
