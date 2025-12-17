"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring" as const, damping: 12, stiffness: 100 },
    },
  };

  const firstName = "Tebarek".split("");
  const lastName = "Shemsu".split("");

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            className="flex-1 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-primary font-mono text-base md:text-lg mb-3">
                Software Engineer & Full Stack Developer
              </h2>
            </motion.div>

            <motion.div
              className="mb-4 overflow-hidden"
              variants={itemVariants}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold tracking-tight text-foreground flex flex-wrap justify-center md:justify-start gap-x-4"
                variants={nameVariants}
                initial="hidden"
                animate="visible"
              >
                <span className="flex">
                  {firstName.map((char, index) => (
                    <motion.span key={index} variants={letterVariants}>
                      {char}
                    </motion.span>
                  ))}
                </span>
                <span className="flex text-primary">
                  {lastName.map((char, index) => (
                    <motion.span key={index} variants={letterVariants}>
                      {char}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-base md:text-lg text-foreground/80 mb-6 max-w-2xl leading-relaxed mx-auto md:mx-0"
              variants={itemVariants}
            >
              Experience in designing and deploying production-ready web
              platforms using React/Next.js and Node/NestJS. Dedicated to
              delivering features that cut manual work, boost performance, and
              improve security.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 justify-center md:justify-start"
              variants={itemVariants}
            >
              <Button
                asChild
                size="default"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-transform hover:scale-105"
              >
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="default"
                className="border-primary/50 hover:bg-secondary/10 text-foreground transition-transform hover:scale-105"
              >
                <a
                  href="/TEBAREK-SHEMSU-Resume.pdf"
                  download="TEBAREK-SHEMSU-Resume.pdf"
                >
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="mt-8 flex gap-5 justify-center md:justify-start"
              variants={itemVariants}
            >
              <Link
                href="https://github.com/tebaarekshemsu"
                target="_blank"
                className="text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform duration-200"
              >
                <Github size={22} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/tebarek-shemsu"
                target="_blank"
                className="text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform duration-200"
              >
                <Linkedin size={22} />
              </Link>
              <Link
                href="mailto:tebarek29@gmail.com"
                className="text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform duration-200"
              >
                <Mail size={22} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 w-full max-w-xs md:max-w-lg relative aspect-square"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            {/* Profile Image with Abstract Background */}
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-2xl"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="/IMG_0302.JPG"
                  alt="Tebarek Shemsu"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
