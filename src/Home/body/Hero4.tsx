export const Hero4 = () => {
  const blogs = [
    {
      title:
        "Setting Up Zustand in a Turborepo Monorepo: A Step-by-Step Guide ",
      link:
        "https://medium.com/@farooq32176/setting-up-zustand-in-a-turborepo-monorepo-a-step-by-step-guide-30a1b30489d7",
    },
  ];

  return (
    <div className="text-white mt-5 px-4 sm:px-0 text-center sm:text-left">
      <h1 className="text-3xl font-semibold font-serif leading-tight">
        Blogs
      </h1>

      <div className="mt-5 flex flex-col gap-4 items-center sm:items-start">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border border-gray-700 hover:bg-gray-800 p-2 rounded-md w-full sm:w-full max-w-full"
          >
            <h2 className="text-md font-semibold text-gray-400 break-words">
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {blog.title}
              </a>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
