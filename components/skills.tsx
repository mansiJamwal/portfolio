"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skillCategories = [
  {
    name: "Languages",
    skills: ["C++", "C", "Python", "JavaScript", "TypeScript", "Java", "HTML", "CSS"],
  },
  {
    name: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Express", "Node.js", "Django", "Tailwind CSS", "NumPy", "Pandas"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    name: "Tools & Technologies",
    skills: ["Git", "Docker", "Vercel", "AWS", "Prisma", "Recoil", "Postman", "Linux"],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text"
        >
          Skills
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-gray-950 p-6 rounded-lg shadow-lg border border-gray-800"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-pink-500/20 rounded-full text-sm font-medium text-gray-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
