"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

// Data derived from resume
const experiences = [
    {
        company: "Digital Addis",
        role: "Full Stack Developer",
        period: "08/2025 – 10/2025",
        description: "Designed and launched 'SurveyHub' and 'CTI Events', web platforms adopted by multiple organizations. Optimized backend queries in NestJS/Prisma and implemented role-based authentication.",
        tech: ["NestJS", "Prisma", "TypeScript"]
    },
    {
        company: "Conquer Agency",
        role: "Full Stack Developer",
        period: "02/2025 – 08/2025",
        description: "Built 'Tigat.net', an online learning platform. Enhanced authentication reliability and API throughput, collaborating with a cross-functional team.",
        tech: ["React", "Node.js", "MongoDB", "Video Streaming"]
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-secondary/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Work Experience</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-secondary/50 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-background bg-secondary/30 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-primary-foreground">
                                <Briefcase size={18} className="text-primary" />
                            </div>

                            {/* Content */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-background rounded-xl border border-secondary/20 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                                    <h3 className="text-lg font-bold text-foreground">{exp.company}</h3>
                                    <div className="flex items-center text-sm text-foreground/60 mt-1 sm:mt-0">
                                        <Calendar size={14} className="mr-1" />
                                        {exp.period}
                                    </div>
                                </div>
                                <div className="text-primary font-medium text-sm mb-3">{exp.role}</div>
                                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">{exp.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t) => (
                                        <span key={t} className="px-2 py-1 text-xs rounded-full bg-accent/20 text-foreground/80 border border-accent/30 font-mono">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
