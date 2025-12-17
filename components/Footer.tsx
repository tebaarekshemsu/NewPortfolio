import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-secondary/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand / Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary mb-4">
              Tebarek Shemsu
            </h3>
            <p className="text-foreground/70 max-w-xs mx-auto md:mx-0">
              Building digital experiences with modern technologies. Let's
              create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="#about"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Socials */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Connect
            </h3>
            <div className="flex justify-center md:justify-end gap-4">
              <Link
                href="https://github.com/tebaarekshemsu"
                target="_blank"
                className="p-2 bg-secondary/10 rounded-full text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/tebarek-shemsu"
                target="_blank"
                className="p-2 bg-secondary/10 rounded-full text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="mailto:tebarek29@gmail.com"
                className="p-2 bg-secondary/10 rounded-full text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Tebarek Shemsu. All rights reserved.
          </p>
          <p className="text-foreground/40 text-xs flex items-center gap-1">
            Built with <span className="text-primary">Next.js</span> &{" "}
            <span className="text-primary">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
