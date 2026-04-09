import React from "react";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_project_link,
  preview_link,
  layout,
  resource_links = [],
  resource_note,
}) => {
  const isHorizontal = layout === "horizontal";

  return (
    <div
      className={`w-full h-full rounded-2xl bg-[linear-gradient(145deg,rgba(23,18,45,0.96),rgba(13,10,28,0.92))] p-5 transition-all duration-300 hover:scale-[1.02] hover:bg-[linear-gradient(145deg,rgba(145,94,255,0.22),rgba(8,145,178,0.18),rgba(13,10,28,0.96))] ${
        isHorizontal
          ? "flex flex-col gap-5 lg:flex-row lg:items-stretch"
          : "sm:w-[360px] flex flex-col"
      }`}
    >
      <div
        className={`relative ${
          isHorizontal ? "w-full lg:w-[320px] lg:flex-shrink-0 h-[220px] lg:h-auto" : "w-full h-[230px]"
        }`}
      >
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
          loading="lazy"
        />

        {source_code_link && (
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>

      <div className={`${isHorizontal ? "flex flex-1 flex-col justify-between" : "mt-5 flex-1"}`}>
        <div>
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <p key={index} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>

          {resource_note && (
            <p className="mt-4 text-sm text-secondary">{resource_note}</p>
          )}
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap gap-3">
            {resource_links
              .filter((resource) => resource?.href)
              .map((resource, index) => (
                <a
                  key={`${resource.label}-${index}`}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isHorizontal ? "flex-1 min-w-[170px]" : ""}
                >
                  <button className="w-full rounded-md border border-[#915EFF]/40 bg-[#151030] px-4 py-2 font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:border-[#915EFF] hover:bg-[#915EFF] hover:shadow-[0_10px_25px_rgba(145,94,255,0.28)]">
                    {resource.label}
                  </button>
                </a>
              ))}

            {live_project_link && (
              <a
                href={live_project_link}
                target="_blank"
                rel="noopener noreferrer"
                className={isHorizontal ? "flex-1 min-w-[170px]" : ""}
              >
                <button className="w-full rounded-md bg-primary px-4 py-2 font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[#915EFF] hover:shadow-[0_10px_25px_rgba(145,94,255,0.28)]">
                  Live Project
                </button>
              </a>
            )}
          </div>

          {preview_link && (
            <a
              href={preview_link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block"
            >
              <button className="w-full rounded-md border border-cyan-400/40 bg-[linear-gradient(90deg,rgba(15,23,42,0.95),rgba(17,24,39,0.95))] px-4 py-2 font-medium text-white transition-all duration-200 hover:scale-[1.01] hover:border-cyan-300 hover:bg-[linear-gradient(90deg,rgba(8,47,73,0.95),rgba(76,29,149,0.92))] hover:shadow-[0_10px_25px_rgba(34,211,238,0.2)]">
                Preview Video
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <section>
      <div>
        <h3 className={`${styles.sectionSubText} text-center`}>
          Innovative Creations
        </h3>
      </div>

      <div>
        <h3 className={`${styles.sectionHeadText} text-center`}>Projects.</h3>
      </div>

      <div>
        <div className="grid grid-cols-1 gap-4 items-stretch md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {projects.slice(0, 4).map((project, index) => (
            <div
              key={`project-${index}`}
              className={project.layout === "horizontal" ? "md:col-span-2 xl:col-span-3" : ""}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "projects");
