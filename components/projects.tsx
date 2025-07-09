"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projectsData = [
  {
    title: "Paytm Clone",
    description:
      "This project replicates essential PayTM functionalities, enabling users to manage transactions, check account balances, and interact with others efficiently.",
    features: [
      "Seamless Transactions: Send money via P2P transfers, view account balances, and transfer money from bank account.",
      "Secure Access: User authentication and authorization powered by Next-Auth.",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Postgres", "Turborepo", "Prisma", "Express"],
    status: "Ongoing",
    github: "https://github.com/mansiJamwal",
    live: "https://smart-wallet-user-app.vercel.app",
  },
  {
    title: "Charcha: Real-Time Chat Application",
    description:
      "Developed a dynamic chat application enabling real-time messaging for personal and group conversations. Key features include secure one-on-one chats, community-driven chat rooms, and category-based search for easy topic discovery.",
    features: [],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Django", "Django Channels", "Redis", "Recoil"],
    status: "October 2024",
    github: "https://github.com/mansiJamwal",
    live: null,
  },
  {
    title: "The Event Calendar",
    description:
      "Developed a React-based Event Calendar with features to add, update, and delete events, leveraging local storage for data persistence. Designed an intuitive interface for seamless event management.",
    features: [],
    techStack: ["React", "TypeScript"],
    status: "December 2024",
    github: "https://github.com/mansiJamwal",
    live: "https://calendar-ecru-beta.vercel.app/",
  },
  {
    title: "The Todo Website",
    description:
      "Developed a responsive Todo web app for task management with key features like task creation, editing, deletion, and completion tracking. Built using React for a dynamic frontend experience, with state management using Recoil for optimized performance.",
    features: [],
    techStack: ["React", "JavaScript", "MongoDB", "Express.js", "Recoil"],
    status: "March 2024",
    github: "https://github.com/mansiJamwal",
    live: "https://todo-website-one.vercel.app",
  },
  {
    title: "The 2048 game",
    description:
      '2048 presents with a 4×4 grid. When you start the game, there will be two "tiles" on the grid, each displaying the number 2 or 4. You hit the arrow keys on your keyboard to move the tiles around and generate new tiles, which will also be valued at 2 or 4.',
    features: [],
    techStack: ["Pygame", "Python"],
    status: "June 2024",
    github: "https://github.com/mansiJamwal",
    live: null,
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text"
        >
          Projects
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-950 rounded-lg overflow-hidden shadow-lg border border-gray-800 hover:border-pink-500/30 flex flex-col h-full"
            >
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-xs font-medium px-3 py-1 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full text-pink-400">
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-400 mb-4">{project.description}</p>

                {project.features.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 text-sm flex items-start">
                          <span className="text-pink-500 mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs px-2 py-1 bg-gray-800 rounded-md text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800 p-4 flex justify-between">
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={16} className="mr-1" />
                  <span className="text-sm">Code</span>
                </Link>

                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span className="text-sm">Live Demo</span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
