import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string; // Keep this string
  date: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Duty of the Damned",
    description: "An interactive, multiplayer, survival horror game.",
    image: "/images/DotD.png",
    link: "#",
    date: "Jan 2026 – Present",
  },
  {
    id: 2,
    title: "Photo/Video equipment rental DBMS",
    description: "Full-stack DBMS solution, integrating an Oracle SQL backend with a custom Python UI.",
    image: "/images/DBMS.png",
    link: "#",
    date: "Sep 2025 - Nov 2025",
  },
  {
    id: 3,
    title: "Happy Chappy Grill Website",
    description: "Website proposal to a local family-owned restaurant.",
    image: "/images/happy-chappy.png",
    link: "https://happy-chappy-demo.netlify.app/",
    date: "Sep 2025",
  },
  {
    id: 4,
    title: "Café Alba Website",
    description: "Website proposal to a café.",
    image: "/images/cafe-alba.png",
    link: "https://cafealba-demo.netlify.app/",
    date: "Aug 2025",
  },
  {
    id: 5,
    title: "PassVault Password Manager",
    description: "Local manager for passwords using custom encryption keys.",
    image: "/images/passvault.png",
    link: "https://github.com/AsimS468/PassVault-App",
    date: "Apr 2024 – Present",
  },
  {
    id: 6,
    title: "FNAF: Where it all Began",
    description: "Five Nights at Freddy's fan game.",
    image: "/images/FNAF.jpg",
    link: "#",
    date: "Jul 2023 – Present",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* ... Header section remains the same ... */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A collection of my recent work and personal projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 timeline-line hidden md:block" />

          {projects.map((project, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 md:mb-16 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot and Date Badge remain the same... */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:block z-10">
                  <div className="timeline-dot" />
                </div>
                <div
                  className={`absolute top-1/2 -translate-y-1/2 hidden md:block ${
                    isLeft ? "left-1/2 ml-8" : "right-1/2 mr-8"
                  }`}
                >
                  <span className="liquid-glass px-4 py-2 rounded-full text-sm font-medium text-muted-foreground">
                    {project.date}
                  </span>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-4rem)] ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="liquid-glass-hover rounded-3xl overflow-hidden h-full" // Added h-full
                  >
                    <div className={`flex h-full ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                      
                      {/* Image Side */}
                      <div className="w-1/2 relative min-h-[200px]"> {/* Added min-height */}
                        <img
                          src={project.image}
                          alt={project.title}
                          // UPDATED: Removed 'aspect-[4/3]' and added 'absolute inset-0'
                          // This makes the image cover the area completely, regardless of text length
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                      </div>

                      {/* Text Details Side */}
                      <div className="w-1/2 p-5 flex flex-col justify-center">
                        <span className="text-xs text-primary font-medium mb-2 md:hidden">
                          {project.date}
                        </span>
                        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                        
                        {/* UPDATED: Removed 'line-clamp-2' so full text shows */}
                        <p className="text-sm text-muted-foreground mb-4">
                          {project.description}
                        </p>

                        {/* UPDATED: Only show button if link is NOT "#" and NOT empty */}
                        {project.link && project.link !== "#" && (
                          <motion.a
                            href={project.link}
                            whileHover={{ x: 5 }}
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow transition-colors mt-auto" // mt-auto pushes it to bottom if needed
                          >
                            <span>See More</span>
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Footer Button remains the same... */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/projects">
             {/* ... */}
             <motion.button className="liquid-glass-hover px-8 py-4 rounded-2xl inline-flex items-center gap-3 font-medium">
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
             </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
