import { projects } from "@/data";
import React from "react";
import { ThreeDCardDemo } from "./ui/ThreeDCard";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projectse">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 md:gap-x-32 md:gap-y-4 gap-32 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <ThreeDCardDemo
              title={title}
              href={link}
              img={img}
              des={des}
              iconLists={iconLists}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
