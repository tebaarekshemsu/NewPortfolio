"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code2, Layers, Monitor } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Define simpler project categories
type Category = string;

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  category: Category;
  image?: string; // Placeholder for now
}

export function Projects() {
  // Moved data inside component to ensure HMR and fresh rendering
  const allProjects: Project[] = [
    {
      title: "Tigat.net",
      description:
        "An online learning platform",
      technologies: ["React", "Node Js", "Mongo DB", "Express Js", "TypeScript","Tailwind CSS"],
      liveUrl: "https://tigat.net",
      category: "Full Stack",
    },
    {
      title: "SurveyHub",
      description:
        "A comprehensive survey management system allowing dynamic form creation and data visualization.",
      technologies: ["NestJS", "PostgreSQL", "Better Auth"],
      repoUrl: "https://github.com/",
      category: "Backend",
    },
    {
      title: "CTI Events",
      description:
        "Event management platform for simplified registration and ticketing workflows.",
      technologies: ["Next.js", "Better Auth", "PostgreSQL"],
      repoUrl: "https://github.com/",
      category: "Full Stack",
    },
  ];

  // Dynamic categories based on current data
  const availableCategories: Category[] = [
    "All",
    ...(Array.from(new Set(allProjects.map((p) => p.category))) as Category[]),
  ];

  const [activeTab, setActiveTab] = useState<Category>("All");

  const filteredProjects = allProjects.filter(
    (project) => activeTab === "All" || project.category === activeTab
  );

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-8" />

          <p className="max-w-2xl mx-auto text-foreground/70 text-lg">
            A selection of my recent work, ranging from complex web applications
            to marketing sites.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {availableCategories.map((tab) => {
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as Category)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border-2",
                  activeTab === tab
                    ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                    : "bg-transparent text-foreground/60 border-secondary/30 hover:border-secondary hover:text-foreground"
                )}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-48 bg-secondary/10 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Placeholder Icon based on category if no image */}
                  <div className="text-primary/40 group-hover:text-primary transition-colors duration-300">
                    {project.category === "Full Stack" ? (
                      <Layers size={64} />
                    ) : project.category === "Frontend" ? (
                      <Monitor size={64} />
                    ) : (
                      <Code2 size={64} />
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-secondary/20 text-foreground/90 rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    {project.liveUrl && (
                      <Button
                        asChild
                        size="sm"
                        variant="default"
                        className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Link>
                      </Button>
                    )}
                    {project.repoUrl && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1 border-primary/20 text-foreground hover:bg-secondary/10"
                      >
                        <Link href={project.repoUrl} target="_blank">
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-foreground/50"
          >
            <p>No projects found in this category yet.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
