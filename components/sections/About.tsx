"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, index }: { icon: any, title: string, description: string, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20 hover:border-primary/50 transition-colors shadow-sm"
    >
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 text-primary">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-foreground/70 leading-relaxed">{description}</p>
    </motion.div>
);

export function About() {
    return (
        <section id="about" className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="mt-6 text-lg text-foreground/80 max-w-3xl mx-auto">
                        I'm a Full-Stack Developer with a passion for building scalable, user-centric web applications.
                        I bridge the gap between elegant front-end interfaces and robust back-end logic.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        index={0}
                        icon={Layout}
                        title="Frontend Development"
                        description="Crafting responsive, interactive, and accessible UIs using React, Next.js, and TypeScript with a focus on animations and performance."
                    />
                    <FeatureCard
                        index={1}
                        icon={Database}
                        title="Backend Systems"
                        description="Architecting secure and scalable server-side systems with Node.js, Nestjs, PostgreSQL, and MongoDB."
                    />
                    <FeatureCard
                        index={2}
                        icon={Code}
                        title="Full Stack Solutions"
                        description="Delivering end-to-end web platforms that innovative business needs to reliable deployment."
                    />
                </div>
            </div>
        </section>
    );
}
