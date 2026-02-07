import { motion } from "framer-motion";
import {
  ArrowDown,
  Cpu,
  Zap,
  Settings,
  ArrowUpRight,
  Linkedin,
  Github,
} from "lucide-react";
import ParticleField from "./ParticleField";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-bg"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />

      {/* 3D Particle Field */}
      <ParticleField />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute left-10 top-1/3 hidden lg:block"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="p-4 glass-panel rounded-xl"
            >
              <Cpu className="w-8 h-8 text-primary" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="absolute right-10 top-1/4 hidden lg:block"
          >
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="p-4 glass-panel rounded-xl"
            >
              <Zap className="w-8 h-8 text-accent" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="absolute right-20 bottom-1/3 hidden lg:block"
          >
            <motion.div
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="p-4 glass-panel rounded-xl"
            >
              <Settings className="w-8 h-8 text-secondary" />
            </motion.div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-inter text-muted-foreground">
              Robotics & Automation Engineer
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Abhishek Gupta</span>
            <br />
            <span className="gradient-text">Powering the Future</span>
            <br />
            <span className="text-foreground">of Robotics</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground font-inter max-w-2xl mx-auto mb-10"
          >
            <span className="text-primary">Autonomous Systems</span> •{" "}
            <span className="text-secondary">Embedded Intelligence</span> •{" "}
            <span className="text-accent">Smart Automation</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-orbitron font-semibold text-sm tracking-wider btn-glow inline-flex items-center gap-3"
            >
              Explore Projects →
            </a>

            <a
              href="#skills"
              className="px-8 py-4 rounded-lg border border-primary/30 font-orbitron font-semibold text-sm hover:bg-primary/10 transition-all"
            >
              View Skills
            </a>

            {/* ✅ RESUME */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border border-primary/30 font-orbitron font-semibold text-sm hover:bg-primary/10 transition-all inline-flex items-center gap-2"
            >
              Resume
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* ✅ SOCIAL ICONS */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/abhishek-gupta-056b37379/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/abhishekgupta8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 text-sm font-inter text-muted-foreground italic"
          >
            "Engineering Motion. Automating Tomorrow."
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-inter">Scroll to explore</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
