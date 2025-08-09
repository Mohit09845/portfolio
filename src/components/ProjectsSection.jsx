import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Streamify",
    description: "An online friend making website user can chat and video call.",
    image: "/streamify.png",
    tags: ["React", "TailwindCSS", "MongoDB", "Node.js"],
    demoUrl: "https://streamify-cd8g.onrender.com/",
    githubUrl: "https://github.com/Mohit09845/streamify",
  },
  {
    id: 2,
    title: "Blogbrew",
    description:
      "Your go-to destination for insightful stories, expert tips, and trending topics—all in one place.",
    image: "/blogbrew.png",
    tags: ["React.js", "Node.js", "MongoDB", "Javascript"],
    demoUrl: "https://blogbrew-chi.vercel.app/",
    githubUrl: "https://github.com/Mohit09845/blogbrew",
  },
  {
    id: 3,
    title: "Raghav-Electric",
    description:
      "An interactive website for managing electrical products focused on UI",
    image: "/raghav-electric.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "https://raghav-electric-frontend.vercel.app/",
    githubUrl: "https://github.com/Mohit09845/raghav-electric",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.id}-${tag}-${index}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      rel="noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      rel="noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Mohit09845"
            rel="noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
