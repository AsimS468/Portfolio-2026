import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Home, User, Briefcase, Wrench, Award, Mail, Github, Linkedin, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
// 1. Import Router Hooks
import { useLocation, useNavigate } from "react-router-dom";

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: "home", icon: <Home className="w-5 h-5" />, label: "Home", href: "#hero" },
  { id: "about", icon: <User className="w-5 h-5" />, label: "About", href: "#about" },
  { id: "projects", icon: <Briefcase className="w-5 h-5" />, label: "Projects", href: "#projects" },
  { id: "services", icon: <Wrench className="w-5 h-5" />, label: "Services", href: "#services" },
  { id: "certificates", icon: <Award className="w-5 h-5" />, label: "Certificates", href: "#certificates" },
  { id: "contact", icon: <Mail className="w-5 h-5" />, label: "Contact", href: "#contact" },
];

const DesktopNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  // 2. Initialize Hooks
  const location = useLocation();
  const navigate = useNavigate();

  // 3. Smart Navigation Handler
  const handleNavClick = (href: string) => {
    if (location.pathname !== "/") {
      // If NOT on home page: Go home first
      navigate("/");
      // Wait 100ms for home page to render, then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // If ALREADY on home page: Just scroll
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 hidden md:flex items-center justify-center"
    >
      <motion.div 
        className="liquid-glass rounded-full px-2 py-2 flex items-center gap-1"
        layout="size"
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            // 4. Use the new handler
            onClick={() => handleNavClick(item.href)}
            className="relative flex items-center gap-2 px-4 py-2 rounded-full text-foreground/80 hover:text-foreground transition-colors"
            layout="position"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <span>{item.icon}</span>
            <AnimatePresence mode="wait">
              {hoveredItem === item.id && (
                <motion.span
                  initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                  animate={{ opacity: 1, width: "auto", marginLeft: 4 }}
                  exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="text-sm font-medium whitespace-nowrap overflow-hidden"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
            {hoveredItem === item.id && (
              <motion.div
                layoutId="nav-highlight"
                className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      <div className="flex items-center gap-2 ml-4">
        <motion.a
          href="https://ca.linkedin.com/in/muhammad-asim-salman-653864282"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="liquid-glass p-3 rounded-full text-foreground/80 hover:text-primary transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </motion.a>
        <motion.a
          href="https://github.com/AsimS468"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="liquid-glass p-3 rounded-full text-foreground/80 hover:text-primary transition-colors"
        >
          <Github className="w-5 h-5" />
        </motion.a>
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="liquid-glass p-3 rounded-full text-foreground/80 hover:text-primary transition-colors relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {theme === "light" ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sun className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.nav>
  );
};

const MobileNavbar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const { theme, toggleTheme } = useTheme();

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id: string, href: string) => {
    setActiveItem(id);
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // UPDATED: Include services by expanding the slice or selecting specific items
  // Using slice(0, 5) ensures Home, About, Projects, Services, and Certificates are considered
  const mobileNavItems = [
    ...navItems.slice(0, 5), // This now includes 'Services' (index 3) and 'Certificates' (index 4)
    { id: "theme", icon: theme === "light" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />, label: "Theme", href: "#" },
  ];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-4 left-0 right-0 z-50 md:hidden flex justify-center"
    >
      {/* TIP: If the navbar gets too wide with the extra icon, 
          you can reduce the 'gap-2' to 'gap-1' or 'px-4' to 'px-2' 
      */}
      <div className="liquid-glass rounded-3xl px-3 py-2 flex items-center gap-1">
        {mobileNavItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => {
              if (item.id === "theme") {
                toggleTheme();
              } else {
                handleNavClick(item.id, item.href);
              }
            }}
            whileTap={{ scale: 0.9 }}
            className={`relative p-3 rounded-2xl transition-colors ${
              activeItem === item.id
                ? "text-primary"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            {item.icon}
            {activeItem === item.id && item.id !== "theme" && (
              <motion.div
                layoutId="mobile-nav-indicator"
                className="absolute inset-0 bg-primary/10 rounded-2xl -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export const Navbar = () => {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
};