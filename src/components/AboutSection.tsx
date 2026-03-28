import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, GraduationCap, Code } from "lucide-react";
import headshot from "/images/me.jpg";

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
  { img: "/icons/git-icon.png", name: "GIT", skill: "Novice" },
  { img: "/icons/vue-icon.png", name: "VUE", skill: "Intermediate" },
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
  { id: "experience", label: "Experience", icon: <Briefcase className="w-5 h-5" /> },
  { id: "education", label: "Education", icon: <GraduationCap className="w-5 h-5" /> },
  { id: "tech", label: "Tech Stack", icon: <Code className="w-5 h-5" /> },
];

const getSkillValue = (skill: string) => {
  switch (skill) {
    case "Learning...": return 0;
    case "Novice": return 0.3;
    case "Intermediate": return 0.6;
    case "Advanced": return 0.9;
    default: return 0;
  }
};

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>("experience");

  // Handles the entrance animation (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  // Handles the entrance animation (Individual Card Appearance)
  const itemEntranceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
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

        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 w-full items-start">
          
          {/* LEFT COLUMN: Bio Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            <div className="liquid-glass rounded-3xl p-8 md:p-10 w-full max-w-2xl mx-auto lg:ml-auto lg:mr-0 text-left">
              <img
                src={headshot}
                alt="Profile headshot"
                className="w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover mb-4 mr-6 float-left shadow-lg"
              />
              <p className="text-lg leading-relaxed text-foreground/90">
                Hello 👋 My name is Muhammad Asim Salman (but you can call me Asim). I'm a third-year undergraduate student at Toronto Metropolitan University with a major in Computer Engineering and a minor in Computer Science.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mt-4">
                I'm a detail-oriented and adaptable individual with strong technical, organizational, and communication skills. Experienced in working both independently and in teams to complete projects efficiently and accurately. Skilled in data management, software tools, and troubleshooting.
              </p>
              <div className="clear-both"></div>
            </div>
          </motion.div>

          {/* MIDDLE COLUMN: Centered Tab Icons */}
          <div className="flex justify-center w-full lg:w-auto">
            <div className="liquid-glass rounded-full p-2 flex flex-row lg:flex-col gap-2 sticky top-32">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative p-4 rounded-full flex items-center justify-center transition-colors ${
                    activeTab === tab.id
                      ? "text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                  aria-label={tab.label}
                  title={tab.label}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="about-active-tab"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{tab.icon}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Tab Content */}
          <div className="min-w-0">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {activeTab === "experience" &&
                experiences.map((exp, index) => (
                  // OUTER WRAPPER: Handles entrance stagger only
                  <motion.div key={`exp-${index}`} variants={itemEntranceVariants}>
                    {/* INNER CARD: Handles hover interactions only */}
                    <motion.div
                      initial="idle"
                      animate="idle"
                      whileHover="hover"
                      variants={{
                        idle: { scale: 1, y: 0 },
                        hover: { scale: 1.05, y: -4 }
                      }}
                      className="card-tech flex items-center gap-3 cursor-pointer overflow-hidden w-[350px] h-[75px] px-4"
                    >
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <motion.img
                          src={exp.img}
                          alt={exp.title}
                          className="w-full h-full object-contain"
                          variants={{ idle: { scale: 1 }, hover: { scale: 1.25 } }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        />
                      </div>
                      <div className="min-w-0 flex-1 flex flex-col justify-center">
                        <motion.h4 
                          className="font-semibold text-sm leading-none truncate relative z-10"
                          variants={{ idle: { y: 18 }, hover: { y: 0 } }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          {exp.title}
                        </motion.h4>
                        <motion.div
                          variants={{ idle: { opacity: 0 }, hover: { opacity: 1 } }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="text-xs text-muted-foreground mt-1 truncate">{exp.Subtitle1}</p>
                          <p className="text-xs text-muted-foreground truncate">{exp.Subtitle2}</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}

              {activeTab === "education" &&
                education.map((edu, index) => (
                  <motion.div key={`edu-${index}`} variants={itemEntranceVariants}>
                    <motion.div
                      initial="idle"
                      animate="idle"
                      whileHover="hover"
                      variants={{
                        idle: { scale: 1, y: 0 },
                        hover: { scale: 1.05, y: -4 }
                      }}
                      className="card-tech flex items-center gap-3 cursor-pointer overflow-hidden w-[350px] h-[75px] px-4"
                    >
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <motion.img
                          src={edu.img}
                          alt={edu.title}
                          className="w-full h-full object-contain"
                          variants={{ idle: { scale: 1 }, hover: { scale: 1.25 } }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        />
                      </div>
                      <div className="min-w-0 flex-1 flex flex-col justify-center">
                        <motion.h4 
                          className="font-semibold text-sm leading-none truncate relative z-10"
                          variants={{ idle: { y: 18 }, hover: { y: 0 } }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          {edu.title}
                        </motion.h4>
                        <motion.div
                          variants={{ idle: { opacity: 0 }, hover: { opacity: 1 } }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="text-xs text-muted-foreground mt-1 truncate">{edu.Subtitle1}</p>
                          <p className="text-xs text-muted-foreground truncate">{edu.Subtitle2}</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}

              {activeTab === "tech" &&
                techStack.map((tech, index) => (
                  <motion.div key={`tech-${index}`} variants={itemEntranceVariants}>
                    <motion.div
                      initial="idle"
                      animate="idle"
                      whileHover="hover"
                      variants={{
                        idle: { scale: 1, y: 0 },
                        hover: { scale: 1.05, y: -4 }
                      }}
                      className="card-tech flex items-center gap-3 cursor-pointer overflow-hidden relative pr-4 py-2"
                    >
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <motion.img
                          src={tech.img}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                          variants={{ idle: { scale: 1 }, hover: { scale: 1.25 } }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        />
                      </div>
                      <div className="min-w-0 flex-1 flex flex-col justify-center">
                        <motion.h4 
                          className="font-semibold text-sm leading-none relative z-10"
                          variants={{ idle: { y: 11 }, hover: { y: 0 } }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          {tech.name}
                        </motion.h4>
                        <motion.p
                          className="text-xs text-muted-foreground mt-1"
                          variants={{ idle: { opacity: 0 }, hover: { opacity: 1 } }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech.skill}
                        </motion.p>
                      </div>

                      {/* Animated Donut Chart */}
                      <motion.div
                        variants={{
                          idle: { opacity: 0, scale: 0.8 },
                          hover: { opacity: 1, scale: 1 }
                        }}
                        transition={{ duration: 0.2 }}
                        className="ml-auto w-6 h-6 flex-shrink-0 relative"
                      >
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" strokeWidth="4" stroke="currentColor" fill="none" className="text-foreground/10" />
                          <motion.circle
                            cx="12" cy="12" r="10"
                            strokeWidth="4"
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="none"
                            className="text-primary"
                            variants={{
                              idle: { pathLength: 0 },
                              hover: { pathLength: getSkillValue(tech.skill) }
                            }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                          />
                        </svg>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};