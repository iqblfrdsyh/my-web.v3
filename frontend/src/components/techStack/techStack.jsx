import { skills } from "@/data/skills";
import { Image } from "@nextui-org/react";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TitleWithSub from "../ui/title";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section>
      <TitleWithSub
        title={"Tech Stack"}
        subtitle={"Some of the tech stacks that I often use"}
      />
      <div className="flex items-center justify-evenly sm:mt-20">
        <hr className="bg-black h-1 w-[230px] mx-2 hidden sm:block" />
        <div className="flex flex-wrap gap-10 sm:w-[490px] justify-center items-center">
          {skills.map((skill, index) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: index * 0.1 }}
              key={skill.id}
            >
              <Image
                src={`/images/icons/skills/${skill.icon}`}
                alt={skill.icon}
                radius="none"
                className="h-[40px] w-[40px] sm:w-[60px] sm:h-[60px]"
              />
            </motion.div>
          ))}
        </div>
        <hr className="bg-black h-1 w-[230px] mx-2 hidden sm:block" />
      </div>
    </section>
  );
};

export default TechStack;
