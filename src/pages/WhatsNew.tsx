import { motion } from "framer-motion";
import { ArrowLeft, Calendar, BookOpenText } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "New game being developed: Duty of the Damned!",
    excerpt: "I’m excited to announce the development of a new game: I’m calling it Duty of the Damned. This game takes inspiration from Lethal Company where the player and their squad go planet-by-planet collecting items and defeating monsters. The only catch is, one of your teammates can secretly be the ‘The Root,’ an entity that causes all the monsters’ existence. In addition, there is a resource mechanic that causes the player to continue to degrade (such as hunger, thirst, temperature or oxygen) unless they continue to restock. This game is currently in development and will be announced soon.",
    date: "Jan 21, 2026",
    category: "Development",
  },
  {
    id: 2,
    title: "FNAF Fan Game Returning to Development!",
    excerpt: "I will be resuming the development of my Five Nights at Freddy’s fan game. Originally it was supposed to be titled Five Nights at Freddy’s: The First Pizzeria, but I will be renaming it to Five Nights at Freddy’s: Where it all Began. In addition, I have created several more assets and will begin designing the 3D models. I’m so excited to share the final product!",
    date: "Jan 8, 2026",
    category: "Development",
  },
  {
    id: 3,
    title: "Completed Google's UI/UX course on Coursera!",
    excerpt: "I've just completed Google's Coursera course titled 'Design a User Experience for Social Good & Prepare for Jobs' which teaches me user experience fundamentals along with a brief introduction on UI and how to prepare to successfully interview for an entry-level UX design job. In addition, I've completed Google's 'Accelerate Your Job Search with AI' course which helps me explore new career possibilities and build a stand out resume with a step-by-step job search plan.",
    date: "September 21, 2025",
    category: "Achievement",
  },
  {
    id: 4,
    title: "Skyscanner Virtual Front-End Software Engineering Internship Complete!",
    excerpt: "I recently completed my one-month virtual internship with Skyscanner through Forage. During this program, I worked as a frontend engineer where I built a web application using React. One of my main tasks was developing a date-picking page with Skyscanner’s open-source Backpack React library. I also customized my application to improve usability and ran automated tests to make sure everything rendered correctly. This experience gave me valuable insight into frontend development practices and how large-scale companies structure their open-source tools.",
    date: "August 4, 2025",
    category: "Achievement",
  },
  {
    id: 5,
    title: "HPE Virtual Software Engineering Internship Complete!",
    excerpt: "As of today, I have completed my one-month virtual internship with Hewlett Packard Enterprise through Forage. Over the course of this program, I had the opportunity to dive into backend development by designing a RESTful web service to manage employee data. I built a Java Spring Boot application capable of handling HTTP requests and processing uploaded JSON files, while also writing unit tests to evaluate its performance. This experience allowed me to strengthen my skills in backend engineering and learn more about building scalable, testable applications.",
    date: "August 1, 2025",
    category: "Achievement",
  },
{
    id: 6,
    title: "EA Virtual Software Engineering Internship Complete!",
    excerpt: "As of today, I have completed my one-month virtual internship with Electronic Arts through Forage. During this internship, I learned how to propose features for software, create their respective class diagrams, develop the features, and fix bugs. The programming language I used was C++. I would like to thank the Electronic Arts Emerging Talent team for giving me this incredible opportunity to learn and grow with them.",
    date: "February 28, 2025",
    category: "Achievement",
  },
  {
    id: 7,
    title: "Finished my Tailwind CSS certification!",
    excerpt: "I've finally completed my Udemy certification course on Tailwind CSS! Check it out in the Certificates section!",
    date: "February 15, 2025",
    category: "Achievement",
  },
];

const WhatsNew = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
            
            <h1 className="section-title">What's New</h1>
            <p className="section-subtitle max-w-2xl">
              Updates, thoughts, and things I'm currently working on.
            </p>
          </motion.div>

          {/* Posts Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 max-w-3xl"
          >
            {posts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01, x: 8 }}
                className="liquid-glass-hover rounded-3xl p-6 md:p-8 cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="liquid-glass px-3 py-1 rounded-full text-xs font-medium text-primary">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default WhatsNew;
