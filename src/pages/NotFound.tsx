import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* --- 1. Background Decorative Elements (Copied from Hero) --- */}
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

      <div className="section-container relative z-10 text-center px-4">
        
        {/* --- 2. 404 Heading (Styled like your Name) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Optional: A subtle warning icon above */}
          <div className="flex justify-center mb-6">
             <div className="liquid-glass p-4 rounded-3xl animate-glow-pulse">
                <AlertTriangle className="w-12 h-12 text-primary" />
             </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-bold mb-2">
            <span className="text-gradient">404</span>
          </h1>
        </motion.div>

        {/* --- 3. Subtext (Styled like Typewriter section) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Page Not Found</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
             The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </motion.div>

        {/* --- 4. Return Button (Styled like Hero Buttons) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl flex items-center gap-3 font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
            >
              <Home className="w-5 h-5" />
              <span>Return to Home</span>
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default NotFound;