import { Briefcase, BriefcaseIcon, Code, User } from "lucide-react";
import cv from "../../public/erfanBayatCv.pdf";

const AbouteMeSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & tech Creator
            </h3>
            <p className="text-muted-foreground">
              With over 2 years of experience in web development, I specialize
              in building responsive, accessible, and high-performance web
              applications using the latest technologies.
            </p>

            <p className="text-muted-foreground">
              I’m driven by the challenge of solving complex problems with
              elegant solutions. Always staying curious, I continuously learn
              new tools and techniques to keep up with the fast-paced evolution
              of the web.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                get in touch
              </a>
              <a
                href={cv}
                download="Erfan_Bayat_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary hover:bg-primary/20 transition-colors duration-300"
              >
                download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">
                    Web Development
                  </h4>
                  <p className="text-muted-foreground">
                    I build modern, responsive, and user-friendly web
                    applications, focusing on performance, accessibility, and
                    seamless front-end and back-end integration.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    I create clean, intuitive interfaces that enhance user
                    experience, blending beauty and functionality for easy
                    navigation.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BriefcaseIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">
                    Project management
                  </h4>
                  <p className="text-muted-foreground">
                    I manage projects from start to finish, ensuring efficient
                    execution, clear communication, and successful outcomes
                    through collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbouteMeSection;
