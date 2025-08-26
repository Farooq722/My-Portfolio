import { RiTwitterXLine } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { TbBrandLinkedin } from "react-icons/tb";
import { RxNotionLogo } from "react-icons/rx";

export const Navbar = () => {
  const socialLinks = [
    {
      icon: <RxNotionLogo />,
      title: "Notion",
      href: "https://www.notion.so/B-Farooq-241f9f953c1580bda8e6c6288fa77cd1",
    },
    {
      icon: <SiGithub />,
      title: "GitHub",
      href: "https://github.com/Farooq722",
    },
    {
      icon: <TbBrandLinkedin size={26} />,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/b-farooq-46728a216",
    },
    {
      icon: <RiTwitterXLine />,
      title: "Twitter",
      href: "https://x.com/iam_farooq_",
    },
  ];

  return (
    <nav className="text-white py-2">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold">
          <h1 className="font-serif  leading-tight">B Farooq</h1>
        </div>
        <div className="flex space-x-3 p-1 text-2xl">
          {socialLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              aria-label={link.title}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 hover:bg-neutral-800 rounded-xl"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <span className="block h-[1px] bg-gradient-to-r from-transparent via-neutral-500 to-transparent rounded-2xl" />
    </nav>
  );
};
