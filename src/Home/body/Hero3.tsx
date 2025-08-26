export const Hero3 = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Node.js",
    "Zustand",
    "Express.js",
    "MongoDB",
    "Postgres",
    "JWT",
    "Tailwind CSS",
    "Framer Motion",
    "Docker",
    "Kubernetes (B)",
    "AWS (EC2, S3, Load Balancer, IAM, CLOUDFRONT)",
    "Git",
    "GitHub",
  ];

  return (
    <div className="text-white mt-5 px-4 sm:px-0 text-center sm:text-left">
      <h1 className="text-3xl font-semibold font-serif leading-tight">
        Tech Stack
      </h1>

      <div className="flex flex-wrap justify-center sm:justify-start gap-x-2 gap-y-3 mt-2 py-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-sm text-gray-400 font-medium leading-tight border border-gray-500 p-2 rounded-md max-w-full break-words whitespace-normal"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
