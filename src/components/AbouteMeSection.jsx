import { Briefcase, BriefcaseIcon, Code, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import cv from "../../public/erfanBayatCv.pdf";

const AbouteMeSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('about.title')} <span className="text-primary">{t('about.titleHighlight')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold">
              {t('about.subtitle')}
            </h3>
            <p className="text-muted-foreground">
              {t('about.description1')}
            </p>

            <p className="text-muted-foreground">
              {t('about.description2')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {t('about.getInTouch')}
              </a>
              <a
                href={cv}
                download="Erfan_Bayat_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary hover:bg-primary/20 transition-colors duration-300"
              >
                {t('about.downloadCV')}
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
                    {t('about.webDev.title')}
                  </h4>
                  <p className="text-muted-foreground">
                    {t('about.webDev.description')}
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
                  <h4 className="font-semibold text-lg mb-2">{t('about.uiUx.title')}</h4>
                  <p className="text-muted-foreground">
                    {t('about.uiUx.description')}
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
                    {t('about.projectMgmt.title')}
                  </h4>
                  <p className="text-muted-foreground">
                    {t('about.projectMgmt.description')}
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
