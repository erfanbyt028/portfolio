import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";
import project1 from "../../public/project/project1.png";
import project2 from "../../public/project/project2.png";
import project3 from "../../public/project/project3.png";
import project4 from "../../public/project/project4.png";

const projects = [
  {
    id: 1,
    title: "Arjmand Chap Website",
    description: "An interactive website for the Arjmand Chap printing services.",
    image: project1,
    tags: ["React", "Tailwind", "React Router"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Concepto Project",
    description:
      "A modern web project designed to showcase dynamic and interactive content. Built using React and styled with Tailwind CSS, the app leverages React Router for seamless navigation.",
    image: project2,
    tags: ["React", "Tailwind", "React Router"],
    demoUrl: "https://erfanbyt028.github.io/",
    githubUrl: "https://github.com/erfanbyt028/concepto-project",
  },
  {
    id: 3,
    title: "Corona Virus Project",
    description: "A web app to track COVID-19 stats and updates globally.",
    image: project3,
    tags: ["React", "Tailwind", "React Router"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "A dynamic weather forecasting application built with React. It allows users to view real-time weather updates based on their location or a specific city.",
    image: project4,
    tags: ["React", "Tailwind", "React Router"],
    demoUrl: "https://erfanbayaat.github.io/",
    githubUrl: "https://github.com/erfanbyt028/Weather-app",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
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
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm truncate">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
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
            href="https://github.com/erfanbyt028"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
