import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, GraduationCap, Code } from "lucide-react";
import headshot from "@/assets/images/me.jpg";

interface LargeItem {
  img: string;
  title: string;
  Subtitle1: string;
  Subtitle2: string;
}

interface SmallItem {
  img: string;
  name: string;
  skill: string;
}


const experiences: LargeItem[] = [
  { img: "/icons/UiUx-icon.png", title: "Freelance Front-End Engineer", Subtitle1: "Web Developer", Subtitle2: "Aug 2025 - Present" },
  { img: "/icons/skyscanner-icon.png", title: "Skyscanner", Subtitle1: "Virtual Frontend Software Engineer", Subtitle2: "Aug 2025" },
  // { img: "/icons/hpe-icon.png", title: "Hewlett Packard Enterprise", Subtitle1: "Virtual Software Engineer", Subtitle2: "Jul 2025" },
  { img: "/icons/ea-icon.png", title: "EA Sports", Subtitle1: "Virtual Software Engineer", Subtitle2: "February 2025" },
  { img: "/icons/TheStoryGarden-icon.png", title: "The Story Garden", Subtitle1: "Volunteer Supervisor", Subtitle2: "Jul 2019 - Aug 2019" },
  { img: "/icons/polycultural-icon.png", title: "Polycultural", Subtitle1: "Volunteer Supervisor", Subtitle2: "Jul 2019 - Aug 2019" },
];

const education: LargeItem[] = [
  { img: "/icons/tmu-icon.png", title: "Toronto Metropolitan University", Subtitle1: "B.S. Computer Engineering", Subtitle2: "Sep 2022 - Exp. May 2028" },
  { img: "/icons/erindale-icon.png", title: "Erindale Secondary School", Subtitle1: "High School Diploma", Subtitle2: "Sep 2018 - Jun 2022" },
];

const techStack: SmallItem[] = [
  { img: "/icons/HTML-icon.png", name: "HTML", skill: "Intermediate" },
  { img: "/icons/css-icon.png", name: "CSS", skill: "Intermediate" },
  { img: "/icons/js-icon.png", name: "JavaScript", skill: "Intermediate" },
  { img: "/icons/git-icon.png", name: "GIT", skill: "Intermediate" },
  { img: "/icons/vue-icon.png", name: "VUE", skill: "Novice" },
  { img: "/icons/react-icon.png", name: "React", skill: "Novice" },
  { img: "/icons/nextjs-icon.png", name: "NEXT", skill: "Learning..." },
  { img: "/icons/angular-icon.png", name: "ANGULAR", skill: "Learning..." },
  { img: "/icons/tailwind-icon.png", name: "Tailwind", skill: "Intermediate" },
  { img: "/icons/firebase-icon.png", name: "Firebase", skill: "Learning..." },
  { img: "/icons/sql-icon.png", name: "SQL", skill: "Intermediate" },
  { img: "/icons/java-icon.png", name: "Java", skill: "Advanced" },
  { img: "/icons/python-icon.png", name: "Python", skill: "Intermediate" },
  { img: "/icons/c-icon.png", name: "C", skill: "Intermediate" },
  { img: "/icons/cpp_icon.png", name: "C++", skill: "Intermediate" },
];

type TabType = "experience" | "education" | "tech";

const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
  { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
  { id: "education", label: "Education", icon: <GraduationCap className="w-4 h-4" /> },
  { id: "tech", label: "Tech Stack", icon: <Code className="w-4 h-4" /> },
];

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>("experience");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Passionate about creating beautiful, functional, and user-centered digital experiences.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-center gap-12 mb-20"
        >
          {/* Headshot - Desktop only */}
          <div className="hidden lg:block flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="liquid-glass p-3 rounded-3xl"
            >
              <img
                src={headshot}
                alt="Profile headshot"
                className="w-65 h-64 rounded-2xl object-cover"
              />
            </motion.div>
          </div>

          {/* Bio text */}
          <div className="liquid-glass rounded-3xl p-8 md:p-10 flex-1 max-w-3xl">
            <p className="text-lg leading-relaxed text-foreground/90">
              Hello 👋 My name is Muhammad Asim Salman (but you can call me Asim). I'm a third-year undergraduate student at Toronto Metropolitan University with a major in Computer Engineering and a minor in Computer Science.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mt-4">
              I'm a detail-oriented and adaptable individual with strong technical, organizational, and communication skills. Experienced in working both independently and in teams to complete projects efficiently and accurately. Skilled in data management, software tools, and troubleshooting.
            </p>
          </div>
        </motion.div>

        {/* Tabs Section */}
        <div>
          {/* Tab buttons */}
          <div className="flex justify-center mb-8">
            <div className="liquid-glass rounded-full p-1.5 flex gap-1">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative px-6 py-3 rounded-full flex items-center gap-2 font-medium transition-colors ${
                    activeTab === tab.id
                      ? "text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{tab.icon}</span>
                  <span className="relative z-10 hidden sm:inline">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4"
          >
            {activeTab === "experience" &&
              experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                    hover: { scale: 1.05, y: -4 } // Card lift
                  }}
                  className="card-tech flex items-center gap-3 cursor-pointer overflow-hidden w-[350px] h-[75px] px-4"
                >
                  {/* Image Container */}
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <motion.img
                      src={exp.img}
                      alt={exp.title}
                      className="w-full h-full object-contain"
                      variants={{
                        visible: { scale: 1 },
                        hover: { scale: 1.25 }
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    />
                  </div>

                  {/* Text Container: Static (No movement here) */}
                  <div className="min-w-0 flex-1 flex flex-col justify-center">
                    
                    {/* Title: This is the ONLY thing that moves vertically */}
                    <motion.h4 
                      className="font-semibold text-sm leading-none truncate relative z-10"
                      variants={{
                        // 1. In 'visible' state (idle), we push it DOWN to visually center it
                        //    because the invisible subtitles are taking up space below it.
                        visible: { y: 18 }, 
                        // 2. On hover, it returns to its natural position (moving UP)
                        hover: { y: 0 }
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {exp.title}
                    </motion.h4>
                    
                    {/* Subtitles: STRICTLY opacity only. No Y movement. */}
                    <motion.div
                      variants={{
                        visible: { opacity: 0 },
                        hover: { opacity: 1 }
                      }}
                      transition={{ duration: 0.2 }} // Fast, clean fade
                    >
                      <p className="text-xs text-muted-foreground mt-1 truncate">
                        {exp.Subtitle1}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {exp.Subtitle2}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}

            {activeTab === "education" &&
              education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                    hover: { scale: 1.05, y: -4 }
                  }}
                  className="card-tech flex items-center gap-3 cursor-pointer overflow-hidden w-[350px] h-[75px] px-4"
                >
                  {/* Image Container */}
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <motion.img
                      src={edu.img}
                      alt={edu.title}
                      className="w-full h-full object-contain"
                      variants={{
                        visible: { scale: 1 },
                        hover: { scale: 1.25 }
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    />
                  </div>

                  {/* Text Container: Static */}
                  <div className="min-w-0 flex-1 flex flex-col justify-center">
                    
                    {/* Title: Moves vertically */}
                    <motion.h4 
                      className="font-semibold text-sm leading-none truncate relative z-10"
                      variants={{
                        visible: { y: 18 }, // Pushed down to center
                        hover: { y: 0 }     // Slides up
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {edu.title}
                    </motion.h4>
                    
                    {/* Subtitles: Opacity Only */}
                    <motion.div
                      variants={{
                        visible: { opacity: 0 },
                        hover: { opacity: 1 }
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-xs text-muted-foreground mt-1 truncate">
                        {edu.Subtitle1}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {edu.Subtitle2}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}

            {activeTab === "tech" &&
              techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                    hover: { scale: 1.05, y: -4 }
                  }}
                  className="card-tech flex items-center gap-3 cursor-pointer overflow-hidden"
                >
                  {/* Image Container */}
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <motion.img
                      src={tech.img}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                      variants={{
                        visible: { scale: 1 },
                        hover: { scale: 1.25 }
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    />
                  </div>

                  {/* Text Container: Static (No movement on the container itself) */}
                  <div className="min-w-0 flex-1 flex flex-col justify-center">
                    
                    {/* Title: This is the ONLY thing that moves vertically */}
                    <motion.h4 
                      className="font-semibold text-sm leading-none relative z-10"
                      variants={{
                        // 1. Pushed down by 8px to visually center it when idle
                        visible: { y: 11 }, 
                        // 2. Slides up to normal position on hover
                        hover: { y: 0 }    
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {tech.name}
                    </motion.h4>
                    
                    {/* Skill: STRICTLY opacity only. No Y movement. */}
                    <motion.p
                      className="text-xs text-muted-foreground mt-1"
                      variants={{
                        visible: { opacity: 0 },
                        hover: { opacity: 1 }
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech.skill}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
