import { motion } from "framer-motion";
import { ArrowRight, FileText, Award } from "lucide-react";
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
    title: "Software Engineering",
    image: "/images/hpe-certificate.jpg",
    pdfLink: "/documents/hpe-certificate.pdf",
    issuer: "Forage",
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="certificates" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
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

        {/* Certificates Grid - Hexagonal/Staggered Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -8, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className={`${index % 3 === 1 ? "lg:mt-12" : ""}`}
              style={{ perspective: "1000px" }}
            >
              <div className="liquid-glass-hover rounded-3xl overflow-hidden group">
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
                <div className="p-5">
                  <p className="text-xs text-primary font-medium mb-1">{cert.issuer}</p>
                  <h3 className="text-lg font-bold mb-4">{cert.title}</h3>
                  
                  <motion.a
                    href={cert.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Certificate</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
