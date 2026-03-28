import { motion } from "framer-motion";
import { Code, GraduationCap, ArrowRight } from "lucide-react";
// Import your actual images here
// import tutoringImg from "@/assets/images/tutoring.jpg";
// import webdevImg from "@/assets/images/webdev.jpg";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    id: "tutoring",
    title: "Online Tutoring",
    description: "Personalized, one-on-one online tutoring tailored to your learning pace. Whether you need help grasping complex Computer Science concepts, debugging code, or preparing for exams, I provide clear explanations and practical guidance.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop", // Replace with your tutoringImg
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Custom, responsive, and highly performant web applications built from scratch. From sleek landing pages to complex web tools, I use modern technologies like React, Tailwind, and Vue.js to bring your vision to life.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop", // Replace with your webdevImg
    icon: <Code className="w-6 h-6 text-primary" />,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Offering specialized solutions for your individual needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="liquid-glass rounded-3xl overflow-hidden flex flex-col group"
            >
              {/* Card Image */}
              <div className="h-56 md:h-64 overflow-hidden relative">
                <motion.div 
                  className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"
                />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                
                <p className="text-foreground/80 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 self-start hover:shadow-lg hover:shadow-primary/25 transition-all"
                >
                  See more
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};