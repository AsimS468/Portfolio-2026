import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, FileText, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Certificate {
  id: number;
  title: string;
  image: string;
  pdfLink: string;
  issuer: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Google UX/UI",
    image: "/images/google-1.png",
    pdfLink: "https://www.coursera.org/account/accomplishments/verify/JYP6MXGEJJIU",
    issuer: "Coursera",
  },
  {
    id: 2,
    title: "Front-End Software Engineering",
    image: "/images/skyscanner-certificate.jpg",
    pdfLink: "/documents/skyscanner-certificate.pdf",
    issuer: "Forage",
  },
  {
    id: 3,
    title: "Tailwind CSS v4 - Beginner to Pro",
    image: "/images/8.jpg",
    pdfLink: "https://www.udemy.com/certificate/UC-1fe2b67e-34e2-44b5-b9dc-526cc0245d8d/",
    issuer: "Udemy",
  },
  {
    id: 4,
    title: "Software Engineering",
    image: "/images/EA-Certificate.jpg",
    pdfLink: "/documents/EA-certificate.pdf",
    issuer: "Forage",
  },
  {
    id: 5,
    title: "Intel® AI Fundamentals",
    image: "/images/IC.jpg",
    pdfLink: "https://www.coursera.org/account/accomplishments/specialization/HB6N75LG2K6B",
    issuer: "Coursera",
  },
  {
    id: 6,
    title: "Web App Development",
    image: "/images/7.jpg",
    pdfLink: "https://www.udemy.com/certificate/UC-972b6692-472a-4653-a2bd-6480fd0f82e0",
    issuer: "Udemy",
  },
];

export const CertificatesSection = () => {
  // --- Carousel State ---
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  // Optional: Auto-play the carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // --- Animation Variants for Mobile Grid ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  // --- Animation Variants for Desktop Carousel ---
  const carouselVariants = {
    center: { x: "0%", scale: 1, zIndex: 30, opacity: 1 },
    left: { x: "-75%", scale: 0.85, zIndex: 20, opacity: 0.6 },
    right: { x: "75%", scale: 0.85, zIndex: 20, opacity: 0.6 },
    hidden: { x: "0%", scale: 0.5, zIndex: 10, opacity: 0 }, // Cards behind are invisible
  };

  return (
    <section id="certificates" className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Certificates</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Professional certifications and completed courses.
          </p>
        </motion.div>

        {/* --- MOBILE VIEW: Single Column Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6 max-w-5xl mx-auto"
        >
          {certificates.map((cert) => (
            <motion.div key={cert.id} variants={itemVariants}>
              <CertificateCard cert={cert} isCenter={true} />
            </motion.div>
          ))}
        </motion.div>

        {/* --- DESKTOP VIEW: 3-Card Carousel --- */}
        <div className="hidden lg:flex relative w-full h-[450px] items-center justify-center max-w-6xl mx-auto">
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-8 z-50 liquid-glass p-3 rounded-full hover:text-primary transition-colors hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-8 z-50 liquid-glass p-3 rounded-full hover:text-primary transition-colors hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Track */}
          {certificates.map((cert, index) => {
            // Determine position relative to the currentIndex
            let position = "hidden";
            if (index === currentIndex) {
              position = "center";
            } else if (index === (currentIndex + 1) % certificates.length) {
              position = "right";
            } else if (index === (currentIndex - 1 + certificates.length) % certificates.length) {
              position = "left";
            }

            return (
              <motion.div
                key={cert.id}
                className="absolute w-[400px]"
                variants={carouselVariants}
                initial={false}
                animate={position}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                // Make non-center cards clickable to slide to them
                onClick={() => {
                  if (position === "left") prevSlide();
                  if (position === "right") nextSlide();
                }}
                style={{ cursor: position === "center" ? "default" : "pointer" }}
              >
                <CertificateCard cert={cert} isCenter={position === "center"} />
              </motion.div>
            );
          })}
        </div>

        {/* See All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/certificates">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass-hover px-8 py-4 rounded-2xl inline-flex items-center gap-3 font-medium"
            >
              <span>View All Certificates</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Sub-component for the card UI
const CertificateCard = ({ cert, isCenter }: { cert: Certificate; isCenter: boolean }) => (
  <motion.div 
    className="liquid-glass rounded-3xl overflow-hidden group h-full shadow-lg"
    // Only allow the hover lift effect if it's the center card or on mobile
    whileHover={isCenter ? { y: -8 } : {}}
  >
    {/* Certificate Image */}
    <div className="relative overflow-hidden aspect-[4/3]">
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />

      {/* Badge */}
      <div className="absolute top-4 right-4">
        <div className="liquid-glass p-2 rounded-xl">
          <Award className="w-5 h-5 text-primary" />
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col justify-between">
      <div>
        <p className="text-xs text-primary font-medium mb-1">{cert.issuer}</p>
        <h3 className="text-lg font-bold mb-4">{cert.title}</h3>
      </div>

      <a
        href={cert.pdfLink}
        target="_blank"
        rel="noopener noreferrer"
        // Prevent accidental link clicks on side cards
        onClick={(e) => !isCenter && e.preventDefault()}
        className={`inline-flex items-center gap-2 text-sm font-medium transition-colors mt-auto ${
          isCenter ? "text-primary hover:text-primary-glow" : "text-primary/50 pointer-events-none"
        }`}
      >
        <FileText className="w-4 h-4" />
        <span>View Certificate</span>
      </a>
    </div>
  </motion.div>
);