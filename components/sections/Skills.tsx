"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiPrisma,
  SiExpress,
} from "react-icons/si";

const skillsCallback = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "Next.js",
      "React.js",
      "Node.js",
      "NestJS",
      "Express.js",
      "Better Auth",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "Prisma", "Tailwind CSS"],
  },
];

const iconList = [
  { icon: SiTypescript, color: "#3178C6" },
  { icon: SiJavascript, color: "#F7DF1E" },
  { icon: SiReact, color: "#61DAFB" },
  { icon: SiNextdotjs, color: "currentColor" },
  { icon: SiNodedotjs, color: "#339933" },
  { icon: SiNestjs, color: "#E0234E" },
  { icon: SiPython, color: "#3776AB" },
  { icon: SiPostgresql, color: "#336791" },
  { icon: SiMongodb, color: "#47A248" },
  { icon: SiDocker, color: "#2496ED" },
  { icon: SiTailwindcss, color: "#06B6D4" },
  { icon: SiGit, color: "#F05032" },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-secondary/5 overflow-hidden">
      {/* Animated Icon Marquee */}
      <div className="w-full mb-16 relative flex items-center pt-24">
        <div className="flex w-[200%]">
          {" "}
          {/* Container for seamless looping */}
          <motion.div
            className="flex items-center gap-16 px-8 whitespace-nowrap"
            animate={{ x: [0, "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
          >
            {[...iconList, ...iconList, ...iconList].map((IconItem, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center text-foreground/50 hover:text-foreground hover:scale-110 transition-all"
              >
                <IconItem.icon size={50} style={{ color: IconItem.color }} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsCallback.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-xl p-5 border border-secondary/20 hover:border-primary/50 transition-colors shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-3 text-primary">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs bg-secondary/10 text-foreground/80 rounded-md border border-secondary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
