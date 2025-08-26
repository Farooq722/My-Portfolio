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
    <div className="text-white mt-5">
      <h1 className="text-3xl font-semibold font-serif leading-tight">
        Tech Stack
      </h1>
      <div className="flex flex-wrap gap-2 mt-2 py-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-sm text-gray-400 font-medium leading-tight border border-gray-500 p-2  rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
