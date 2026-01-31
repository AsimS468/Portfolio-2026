import { motion } from "framer-motion";
import { ArrowLeft, FileText, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

interface Certificate {
  id: number;
  title: string;
  image: string;
  pdfLink: string;
  issuer: string;
  date: string;
}

const allCertificates: Certificate[] = [
  {
    id: 1,
    title: "Google: Accelerate Your Job Search with AI",
    image: "/images/Google-2.png",
    pdfLink: "https://www.coursera.org/account/accomplishments/verify/TSIMX0H5DOK7",
    issuer: "Coursera",
    date: "Sep 2025",
  },
  {
    id: 2,
    title: "Google: Design a User Experience for Social Good & Prepare for Jobs",
    image: "/images/google-1.png",
    pdfLink: "https://www.coursera.org/account/accomplishments/verify/JYP6MXGEJJIU",
    issuer: "Coursera",
    date: "Sep 2025",
  },
  {
    id: 3,
    title: "Scyscanner: Front-End Software Engineering Job Simulation",
    image: "/images/skyscanner-certificate.jpg",
    pdfLink: "#",
    issuer: "Forage",
    date: "Aug 2025",
  },
  {
    id: 4,
    title: "HPE: Software Engineering Job Simulation",
    image: "/images/hpe-certificate.jpg",
    pdfLink: "#",
    issuer: "Forage",
    date: "Aug 2025",
  },
  {
    id: 5,
    title: "Electronic Arts: Software Engineering Job Simulation",
    image: "/images/EA-Certificate.jpg",
    pdfLink: "#",
    issuer: "Forage",
    date: "Feb 2025",
  },
  {
    id: 6,
    title: "Tailwind CSS v4 - Beginner to Pro",
    image: "/images/8.jpg",
    pdfLink: "https://www.udemy.com/certificate/UC-1fe2b67e-34e2-44b5-b9dc-526cc0245d8d/",
    issuer: "Udemy",
    date: "Feb 2025",
  },
  {
    id: 7,
    title: "Crash Course: Build a Full-Stack Web App in a Weekend!",
    image: "/images/7.jpg",
    pdfLink: "https://www.udemy.com/certificate/UC-972b6692-472a-4653-a2bd-6480fd0f82e0/",
    issuer: "Udemy",
    date: "Feb 2025",
  },
  {
    id: 8,
    title: "The Complete Cyber Security Course : Hackers Exposed!",
    image: "/images/6.jpg",
    pdfLink: "https://www.udemy.com/certificate/UC-7fd1385b-1a92-40fe-83a7-e9aa8732e9d8/",
    issuer: "Udemy",
    date: "Sep 2023",
  },
  {
    id: 9,
    title: "Intel® AI Fundamentals",
    image: "/images/IC.jpg",
    pdfLink: "https://www.coursera.org/account/accomplishments/specialization/HB6N75LG2K6B",
    issuer: "Coursera",
    date: "Sep 2023",
  },
  {
    id: 10,
    title: "Intel® AI Win Recipes",
    image: "/images/IC3.jpg",
    pdfLink: "https://www.coursera.org/account/accomplishments/verify/E9LRWZDNXHDN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    issuer: "Coursera",
    date: "Sep 2023",
  },
  {
    id: 11,
    title: "The Intel® AI Value",
    image: "/images/IC2.jpg",
    pdfLink: "https://www.coursera.org/account/accomplishments/verify/956U2YK88Y6C?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    issuer: "Coursera",
    date: "Sep 2023",
  },
  {
    id: 12,
    title: "Intel® AI Essentials",
    image: "/images/IC1.jpg",
    pdfLink: "https://www.coursera.org/account/accomplishments/verify/D6TEQSJX66XV?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    issuer: "Coursera",
    date: "Sep 2023",
  },
  {
    id: 13,
    title: "WHMIS for Students",
    image: "/images/1.jpg",
    pdfLink: "#",
    issuer: "Toronto Metropolitan University",
    date: "Oct 2024",
  },
  {
    id: 14,
    title: "Android Development for Beginners: Your first app in 2 hours",
    image: "/images/2.jpg",
    pdfLink: "https://www.udemy.com/certificate/UC-66695bc7-af94-4f89-993e-85229ef23596/",
    issuer: "Udemy",
    date: "Nov 2021",
  },
  {
    id: 15,
    title: "Introduction to Electric Circuits",
    image: "/images/3.jpg",
    pdfLink: "https://www.udemy.com/certificate/UC-b164abf7-974c-4e75-8574-404d68524c56/",
    issuer: "Udemy",
    date: "Jan 2021",
  },
  {
    id: 16,
    title: "Learn C++ by Creating",
    image: "/images/4.jpg",
    pdfLink: "https://www.udemy.com/certificate/UC-178450c5-fae5-4294-93f7-e159e0f39955/",
    issuer: "Udemy",
    date: "Dec 2020",
  },
  {
    id: 17,
    title: "Python For Everybody : Python Programming MADE EASY",
    image: "/images/5.jpg",
    pdfLink: "https://www.udemy.com/certificate/UC-37b59d56-9f18-48a7-9ad0-de371f13df63/",
    issuer: "Udemy",
    date: "Nov 2020",
  },
];

const AllCertificates = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
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
            
            <h1 className="section-title">All Certificates</h1>
            <p className="section-subtitle max-w-2xl">
              Professional certifications and completed courses.
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {allCertificates.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03, rotateY: 3 }}
                style={{ perspective: "1000px" }}
                className="liquid-glass-hover rounded-3xl overflow-hidden group"
              >
                {/* Certificate Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <motion.div 
                      whileHover={{ rotate: 15 }}
                      className="liquid-glass p-2 rounded-xl"
                    >
                      <Award className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>
                  
                  {/* Date */}
                  <div className="absolute top-4 left-4">
                    <span className="liquid-glass px-3 py-1 rounded-full text-xs font-medium">
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-primary font-medium mb-1">{cert.issuer}</p>
                  <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                  
                  {/* Actions */}
                  <div className="flex gap-3">
                    <motion.a
                      href={cert.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 liquid-glass py-2 rounded-xl flex items-center justify-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      <span>View Certificate</span>
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      className="liquid-glass p-2 rounded-xl hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
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

export default AllCertificates;
