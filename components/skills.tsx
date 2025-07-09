"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code2, Layers3, Database, Wrench } from "lucide-react"

// Add your skill images and names here
const skillCategories = [
  {
    name: "Languages",
    icon: Code2,
    color: "text-blue-400",
    skills: [
      { name: "C++", image: "/c++_logo.png?height=48&width=48" },
      { name: "C", image: "/c_logo.png?height=48&width=48" },
      { name: "Python", image: "/python_logo.png?height=48&width=48" },
      { name: "JavaScript", image: "/javascript_logo.png?height=48&width=48" },
      { name: "TypeScript", image: "/typescript_logo.png?height=48&width=48" },
      { name: "Java", image: "/java_logo.png?height=48&width=48" },
      { name: "HTML", image: "/html_logo.png?height=48&width=48" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    icon: Layers3,
    color: "text-purple-400",
    skills: [
      { name: "React", image: "/react_logo.png?height=48&width=48" },
      { name: "Next.js", image: "/nextjs_logo.svg?height=48&width=48" },
      { name: "Express", image: "/expressjs_logo.png?height=48&width=48" },
      { name: "Node.js", image: "/nodejs_logo.png?height=48&width=48" },
      { name: "Django", image: "/django_logo.svg?height=48&width=48" },
      { name: "CSS", image: "/css_logo.png?height=48&width=48" },
      { name: "Tailwind CSS", image: "/tailwind_logo.png?height=48&width=48" },
      { name: "NumPy", image: "/numpy_logo.svg?height=48&width=48" },
      { name: "Pandas", image: "/panadas_logo.png?height=48&width=48" },
    ],
  },
  {
    name: "Databases & ORMs",
    icon: Database,
    color: "text-emerald-400",
    skills: [
      { name: "MongoDB", image: "/mongodb_logo.png?height=48&width=48" },
      { name: "PostgreSQL", image: "/postgres_logo.png?height=48&width=48" },
      { name: "MySQL", image: "/mysql_logo.png?height=48&width=48" },
      { name: "Redis", image: "/redis_logo.png?height=48&width=48" },
      { name: "Prisma", image: "/prisma_logo.svg?height=48&width=48" },
    ],
  },
  {
    name: "Tools & Technologies",
    icon: Wrench,
    color: "text-orange-400",
    skills: [
      { name: "Git", image: "/git_logo.png?height=48&width=48" },
      { name: "Docker", image: "/docker_logo.png?height=48&width=48" },
      { name: "Vercel", image: "/vercel_logo.png?height=48&width=48" },
      { name: "AWS", image: "/aws_logo.png?height=48&width=48" },
      { name: "Postman", image: "/postman_logo.svg?height=48&width=48" },
    ],
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-gray-800 p-10 rounded-xl shadow-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300 h-[450px] w-full"
            >
              <div className="text-center mb-6">
                <div className="flex justify-center mb-3">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <h3 className={`text-lg font-bold ${category.color}`}>{category.name}</h3>
              </div>

              <div className="grid grid-cols-3 gap-4 justify-items-center">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center">
                    <img
                      src={skill.image || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-12 h-12 object-contain mb-2"
                    />
                    <span className="text-gray-300 text-sm font-medium text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
