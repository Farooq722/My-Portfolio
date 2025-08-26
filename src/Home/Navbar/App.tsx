import { useState, useEffect } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { TbBrandLinkedin } from "react-icons/tb";
import { RxNotionLogo } from "react-icons/rx";
import { GiTireIronCross } from "react-icons/gi";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
      <div className="flex justify-between items-center relative z-50">
        <div className="text-3xl font-bold">
          <h1 className="font-serif leading-tight">B Farooq</h1>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex space-x-3 p-1 text-2xl">
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

        {/* Mobile: toggle between menu and cross */}
        <div className="md:hidden">
          {!open ? (
            <button
              aria-label="Open menu"
              className="p-2 text-3xl"
              onClick={() => setOpen(true)}
            >
              <MdOutlineMenuOpen size={30} />
            </button>
          ) : (
            <button
              aria-label="Close menu"
              className="p-2 text-3xl"
              onClick={() => setOpen(false)}
            >
              <GiTireIronCross />
            </button>
          )}
        </div>
      </div>

      <span className="block h-[1px] bg-gradient-to-r from-transparent via-neutral-500 to-transparent rounded-2xl" />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-inherit md:hidden transform transition-transform duration-300 ${
          open ? "translate-x-[40%]" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col gap-2 px-4 py-6 text-2xl mt-12">
          {socialLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              aria-label={link.title}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 hover:bg-neutral-800 rounded-xl"
              onClick={() => setOpen(false)}
            >
              {link.icon}
              <span className="text-base">{link.title}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
