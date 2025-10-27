import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import project1 from "../../public/project/project1.png";
import project2 from "../../public/project/project2.png";
import project3 from "../../public/project/project3.png";
import project4 from "../../public/project/project4.png";
import project5 from "../../public/project/project5.png";
import project6 from "../../public/project/project6.png";
import project7 from "../../public/project/project7.png";
import project8 from "../../public/project/project8.png";
import project9 from "../../public/project/project9.png";

const ProjectSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      image: project1,
      tags: ["React", "Tailwind", "React Router"],
      demoUrl: "https://arjmand-chap.vercel.app/",
      githubUrl: "https://github.com/erfanbyt028/arjmand-chap-project",
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      image: project2,
      tags: ["React", "Tailwind", "React Router"],
      demoUrl: "https://erfanbyt028.github.io/",
      githubUrl: "https://github.com/erfanbyt028/concepto-project",
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      image: project3,
      tags: ["React", "Tailwind", "React Router"],
      demoUrl: "https://erfan0028.github.io/",
      githubUrl: "https://github.com/Ezhoosh-learning/corona-erfan-bayat",
    },
    {
      id: 4,
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      image: project4,
      tags: ["React", "Tailwind", "React Router"],
      demoUrl: "https://erfanbayaat.github.io/",
      githubUrl: "https://github.com/erfanbyt028/Weather-app",
    },
    {
      id: 5,
      title: t('projects.project5.title'),
      description: t('projects.project5.description'),
      image: project5,
      tags: ["React", "Tailwind", "React Router"],
      demoUrl: "https://header-project.vercel.app/",
      githubUrl: "https://github.com/erfanbyt028/header-project",
    },
    {
      id: 6,
      title: t('projects.project6.title'),
      description: t('projects.project6.description'),
      image: project6,
      tags: ["HTML", "CSS", "Pure JS"],
      demoUrl: "https://diamond-beauty.vercel.app/",
      githubUrl: "https://github.com/erfanbyt028/diamondBeauty",
    },
    {
      id: 7,
      title: t('projects.project7.title'),
      description: t('projects.project7.description'),
      image: project7,
      tags: ["HTML", "CSS", "Pure JS"],
      demoUrl: "https://gym-project-alpha.vercel.app/",
      githubUrl: "https://github.com/erfanbyt028/gym-project",
    },
    {
      id: 8,
      title: t('projects.project8.title'),
      description: t('projects.project8.description'),
      image: project8,
      tags: ["React", "Tailwind", "React Router"],
      demoUrl: "https://navazino.com/",
      githubUrl: "https://github.com/hasanlashgari01/spotify-clone",
    },
    {
      id: 9,
      title: t('projects.project9.title'),
      description: t('projects.project9.description'),
      image: project9,
      tags: ["React", "Tailwind", "React Router"],
      demoUrl: "https://wishco-wood.vercel.app/",
      githubUrl: "",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t('projects.title')}<span className="text-primary"> {t('projects.titleHighlight')}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('projects.description')}
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
            {t('projects.checkGithub')} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
