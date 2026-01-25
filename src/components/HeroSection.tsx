import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download} from "lucide-react";
import { Link } from "react-router-dom";
import headshot from "@/assets/images/me.jpg";

export const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Mobile headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:hidden mb-8"
          >
            <div className="liquid-glass p-2 rounded-3xl animate-glow-pulse">
              <img
                src={headshot}
                alt="Profile headshot"
                className="w-40 h-40 rounded-2xl object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="text-gradient">Muhammad<br/>Asim Salman</span>
            </h1>
          </motion.div>

          {/* Typewriter effect */}
          {/* Typewriter effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-16 md:h-20 flex items-center justify-center"
          >
            <span className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
              <TypeAnimation
                sequence={[
                  "An aspiring engineer",
                  2000,
                  "A programmer",
                  2000,
                  "A software developer",
                  2000,
                  "A front-end engineer",
                  2000,
                  "A quick learner",
                  2000,
                  "An innovator",
                  2000,
                  "A problem solver",
                  2000,
                  "A chill dude",
                  2000,
                  "A web developer",
                  2000,
                  "A CEO",
                  2000,
                  "A creative thinker",
                  2000,
                  "A dedicated worker",
                  2000,
                  "An aura farmer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block"
                cursor={true} // Ensure this is true so the library provides its own cursor
              />
              {/* DELETED THE MANUAL CURSOR SPAN HERE */}
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Link to="/whats-new">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="liquid-glass-hover px-8 py-4 rounded-2xl flex items-center gap-3 font-medium group"
              >
                <span>What's New</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link to="/projects">
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl flex items-center gap-3 font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>

            <motion.a
              href="/documents/Muhammad_Asim_Salman_Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass-hover px-8 py-4 rounded-2xl flex items-center gap-3 font-medium"
            >
              <Download className="w-5 h-5 text-primary" />
              <span>Resume</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
