import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tags: string[];
  date: string;
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio website built using React+Vite, Typescript, and Tailwind.",
    image: "/images/portfolio.png", 
    link: "https://www.asimsalman.com",
    github: "#",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    date: "Jan 2026",
  },
  {
    id: 2,
    title: "Duty of the Damned",
    description: "An interactive, multiplayer, survival horror game.",
    image: "/images/DotD.png",
    link: "#",
    github: "#",
    tags: ["Godot", "Blender"],
    date: "Jan 2026 – Present",
  },
  {
    id: 3,
    title: "Photo/Video equipment rental DBMS",
    description: "Full-stack DBMS solution, integrating an Oracle SQL backend with a custom Python UI.",
    image: "/images/DBMS.png",
    link: "#",
    github: "#",
    tags: ["Oracle SQL", "Python"],
    date: "Sep 2025 - Nov 2025",
  },
  {
    id: 4,
    title: "Happy Chappy Grill Website",
    description: "Website proposal to a local family-owned restaurant.",
    image: "/images/happy-chappy.png",
    link: "https://happy-chappy-demo.netlify.app/",
    github: "#",
    tags: ["HTML", "CSS", "JavaScript"],
    date: "Sep 2025",
  },
  {
    id: 5,
    title: "Café Alba Website",
    description: "Website proposal to a café.",
    image: "/images/cafe-alba.png",
    link: "https://cafealba-demo.netlify.app/",
    github: "#",
    tags: ["HTML", "CSS", "JavaScript"],
    date: "Aug 2025",
  },
  {
    id: 6,
    title: "PassVault Password Manager",
    description: "Local manager for passwords using custom encryption keys.",
    image: "/images/passvault.png",
    link: "#",
    github: "https://github.com/AsimS468/PassVault-App",
    tags: ["Java", "JavaFX", "CSS"],
    date: "Apr 2024 – Present",
  },
  {
    id: 7,
    title: "FNAF: Where it all Began",
    description: "Five Nights at Freddy's fan game.",
    image: "/images/FNAF.jpg",
    link: "https://www.linkedin.com/in/m-asim-salman/details/projects/",
    github: "#",
    tags: ["Godot", "Blender"],
    date: "Jul 2023 – Present",
  },
  {
    id: 8,
    title: "Valkyrie Web-Novel",
    description: "Chapter-by-chapter web-novel released weekly to tell a story.",
    image: "/images/valk.jpeg",
    link: "https://www.linkedin.com/in/m-asim-salman/details/projects/",
    github: "#",
    tags: ["MS Word"],
    date: "Apr 2021 – Present",
  },
  {
    id: 9,
    title: "Raspberry Pi Minecraft Server",
    description: "Minecraft server hosted on a Raspberry Pi 3 utilizing Debian Linux and PaperMC.",
    image: "/images/r-pi-server.jpeg",
    link: "https://www.linkedin.com/in/m-asim-salman/details/projects/",
    github: "#",
    tags: ["Debian Linux", "Raspberry Pi", "PaperMC"],
    date: "Nov 2021 – Dec 2021",
  },
  {
    id: 10,
    title: "Bluetooth Speaker",
    description: "Bluetooth speaker built using a wired bluetooth earbud set.",
    image: "/images/bt-speaker.jpeg",
    link: "#",
    github: "#",
    tags: ["Electronics"],
    date: "Jul 2021 – Aug 2021",
  },
];

const AllProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-32">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link to="/">
              <motion.button
                whileHover={{ x: -5 }}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </motion.button>
            </Link>
            
            <h1 className="section-title">All Projects</h1>
            <p className="section-subtitle max-w-2xl">
              A complete collection of my work and personal projects.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {allProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -8 }}
                className="liquid-glass-hover rounded-3xl overflow-hidden group flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                  
                  {/* Date badge */}
                  <div className="absolute top-4 left-4">
                    <span className="liquid-glass px-3 py-1 rounded-full text-xs font-medium">
                      {project.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-lg bg-primary/10 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-white/5">
                    {project.link && project.link !== "#" && (
                        <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 liquid-glass py-2 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                        >
                        <ExternalLink className="w-4 h-4" />
                        <span>See More</span>
                        </motion.a>
                    )}
                    {project.github && project.github !== "#" && (
                        <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 liquid-glass py-2 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                        >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                        </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AllProjects;
