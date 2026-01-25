import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, MapPin, ArrowUpRight, Download, } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="liquid-glass rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always open to discussing new projects, creative ideas, 
                  or opportunities to be part of your visions.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:asims468.04@gmail.com" className="font-medium hover-underline">
                        asims468.04@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Mississauga, ON</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <p className="text-sm text-muted-foreground mb-4">Check out my</p>
                  <div className="flex gap-3">
                    
                    <motion.a
                      href="https://ca.linkedin.com/in/muhammad-asim-salman-653864282"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="liquid-glass p-4 rounded-2xl text-foreground/80 hover:text-primary transition-colors group"
                    >
                      <Linkedin className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href="https://github.com/AsimS468"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="liquid-glass p-4 rounded-2xl text-foreground/80 hover:text-primary transition-colors group"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href="/documents/Muhammad_Asim_Salman_Resume.pdf"
                      download
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="liquid-glass-hover px-8 py-4 rounded-2xl flex items-center gap-3 font-medium"
                    >
                      <Download className="w-5 h-5 text-primary" />
                      <span>Resume</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Quick Action */}
              <div className="flex flex-col justify-center">
                <motion.a
                  href="mailto:asims468.04@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group liquid-glass-hover rounded-3xl p-8 text-center cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Send className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Send a Message</h4>
                  <p className="text-muted-foreground mb-4">
                    Drop me an email and I'll get back to you as soon as possible.
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium">
                    <span>asims468.04@gmail.com</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 text-sm text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} Muhammad Asim Salman. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};
