import { SlLocationPin } from "react-icons/sl";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { RiMailSendLine } from "react-icons/ri";

export const Hero1 = () => {
  const items = [
    {
      icon: <SlLocationPin size={18} />,
      title: "INDIA",
    },
    {
      icon: <PiSuitcaseSimpleFill size={20} />,
      title: "Open to full-time roles",
    },
    {
      id: "mail",
      icon: <RiMailSendLine size={20} />,
      title: "Contact me",
    },
  ];

  return (
    <section className="py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-10">
          <img
            src="./portimage.jpeg"
            alt="Profile pic"
            className="rounded-full w-[270px] h-[270px] bg-white"
          />
          <div className="flex flex-col space-y-4 mt-6 md:mt-10 items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl font-serif font-extrabold text-white leading-tight">
              Full Stack Developer
            </h1>
            <p className="text-sm leading-tight font-medium text-slate-300 font-serif">
              Turning ideas into clean, reliable web apps.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-2 mt-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 text-sm text-slate-300 mt-3"
            >
              {item.icon}
              <span className="text-gray-200 font-semibold text-sm">
                {item.id === "mail" ? (
                  <a
                    href="mailto:bfarooq2022@gmail.com"
                    target="_blank"
                    className="border-none hover:text-gray-400"
                  >
                    Mail me
                  </a>
                ) : (
                  item.title
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
