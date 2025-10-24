import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";
import project1 from "../../public/project/project1.png";
import project2 from "../../public/project/project2.png";
import project3 from "../../public/project/project3.png";
import project4 from "../../public/project/project4.png";
import project5 from "../../public/project/project5.png";
import project6 from "../../public/project/project6.png";
import project7 from "../../public/project/project7.png";
import project8 from "../../public/project/project8.png";
import project9 from "../../public/project/project9.png";

const projects = [
  {
    id: 1,
    title: "Arjmand Chap Website",
    description: "An interactive and user-friendly website built for Arjmand Chap printing services. The website features a clean interface where users can explore the services, request custom prints, and contact the company. It’s built using React, Tailwind, and React Router for seamless navigation.",
    image: project1,
    tags: ["React", "Tailwind", "React Router"],
    demoUrl: "https://arjmand-chap.vercel.app/",
    githubUrl: "https://github.com/erfanbyt028/arjmand-chap-project",
  },
  {
    id: 2,
    title: "Concepto Project",
    description:
      "A modern, dynamic web project designed to showcase interactive content. The app features real-time updates, dynamic elements, and smooth transitions, built with React and styled using Tailwind CSS. React Router ensures smooth page navigation.",
    image: project2,
    tags: ["React", "Tailwind", "React Router"],
    demoUrl: "https://erfanbyt028.github.io/",
    githubUrl: "https://github.com/erfanbyt028/concepto-project",
  },
  {
    id: 3,
    title: "Corona Virus Project",
    description: "A web application to track COVID-19 stats globally. It offers real-time statistics, updates, and visual charts on cases, deaths, and recoveries. It was built with React and Tailwind CSS for an intuitive, clean user interface.",
    image: project3,
    tags: ["React", "Tailwind", "React Router"],
    demoUrl: "https://erfan0028.github.io/",
    githubUrl: "https://github.com/Ezhoosh-learning/corona-erfan-bayat",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "A dynamic weather forecasting application that allows users to view real-time weather updates based on their location or a specific city. Built with React and Tailwind CSS, this app provides accurate and up-to-date weather information with an easy-to-use interface.",
    image: project4,
    tags: ["React", "Tailwind", "React Router"],
    demoUrl: "https://erfanbayaat.github.io/",
    githubUrl: "https://github.com/erfanbyt028/Weather-app",
  },
  {
    id: 5,
    title: "Header Project",
    description:
      "A simple yet effective dynamic web component project, showcasing a responsive and customizable header for websites. It is built with React and styled with Tailwind CSS, providing a modern design for all screen sizes.",
    image: project5,
    tags: ["React", "Tailwind", "React Router"],
    demoUrl: "https://header-project.vercel.app/",
    githubUrl: "https://github.com/erfanbyt028/header-project",
  },
  {
    id: 6,
    title: "Diamond Beauty Shop",
    description:
      "An elegant and functional website for a beauty shop, offering products and services online. Built using HTML, CSS, and pure JavaScript, it showcases a clean and professional design with a focus on user experience and easy navigation.",
    image: project6,
    tags: ["HTML", "CSS", "Pure JS"],
    demoUrl: "https://diamond-beauty.vercel.app/",
    githubUrl: "https://github.com/erfanbyt028/diamondBeauty",
  },
  {
    id: 7,
    title: "Hpower Gym",
    description:
      "A gym website that provides an intuitive interface for users to explore fitness programs, schedule workouts, and stay updated with gym news. Built with HTML, CSS, and pure JavaScript, the site emphasizes ease of use and responsive design.",
    image: project7,
    tags: ["HTML", "CSS", "Pure JS"],
    demoUrl: "https://gym-project-alpha.vercel.app/",
    githubUrl: "https://github.com/erfanbyt028/gym-project",
  },
  {
    id: 8,
    title: "Navazino Project",
    description:
      "A project showcasing modern e-commerce features, with a clean and efficient user interface. Built using React and Tailwind CSS, the app is designed to provide smooth and quick navigation across product listings and other key pages.",
    image: project8,
    tags: ["React", "Tailwind", "React Router"],
    demoUrl: "https://navazino.com/",
    githubUrl: "https://github.com/hasanlashgari01/spotify-clone",
  },
  {
    id: 9,
    title: "Wishco Wood Shop",
    description:
      "An online store for woodworking products, featuring a clean, user-friendly interface. The site is built with React and Tailwind, focusing on product display, user interaction, and seamless navigation between product categories and checkout.",
    image: project9,
    tags: ["React", "Tailwind", "React Router"],
    demoUrl: "https://wishco-wood.vercel.app/",
    githubUrl: "",
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
