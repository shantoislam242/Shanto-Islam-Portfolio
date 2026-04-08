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
}) => {
  return (
    <div className="sm:w-[360px] w-full h-full rounded-2xl bg-[linear-gradient(145deg,rgba(23,18,45,0.96),rgba(13,10,28,0.92))] p-5 transition-all duration-300 hover:scale-[1.04] hover:bg-[linear-gradient(145deg,rgba(145,94,255,0.22),rgba(8,145,178,0.18),rgba(13,10,28,0.96))] flex flex-col">
      <div className="relative w-full h-[230px]">
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

      <div className="mt-5 flex-1">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <p key={index} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>

      {live_project_link && (
        <a
          href={live_project_link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3"
        >
          <button className="mt-3 rounded-md bg-primary px-4 py-2 font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[#915EFF] hover:shadow-[0_10px_25px_rgba(145,94,255,0.28)]">
            Live Project
          </button>
        </a>
      )}
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
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "projects");
