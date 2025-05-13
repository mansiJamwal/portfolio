"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { School, Award } from "lucide-react"

const educationData = [
  {
    institution: "Indian Institute of Technology",
    degree: "Integrated Dual-Degree - Computer Science and Engineering",
    duration: "2023 - 2028",
    gpa: "GPA: 9.74/10.0",
    icon: School,
  },
  {
    institution: "MM Public School",
    degree: "CBSE (CLASS XII)",
    duration: "2023",
    gpa: "96%",
    icon: School,
  },
  {
    institution: "Delhi Public School",
    degree: "CBSE (CLASS X)",
    duration: "2021",
    gpa: "97.8%",
    icon: School,
  },
]

const achievementsData = [
  "Secured 99.7 percentile and a rank of 3462 among 11.7 lakh candidates in JEE Mains 2023.",
  "Secured 2558 rank among 1.8 lakh candidates in JEE Advance 2023.",
]

export default function Education() {
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
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text"
        >
          Education
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800 hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-3 rounded-lg">
                  <item.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.institution}</h3>
                  <p className="text-gray-300 mt-1">{item.degree}</p>
                  <div className="flex justify-between mt-2">
                    <p className="text-gray-400">{item.duration}</p>
                    <p className="text-pink-400 font-medium">{item.gpa}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center text-white">Scholastic Achievements</h3>
            <div className="space-y-4">
              {achievementsData.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-gray-900 p-4 rounded-lg shadow-md border border-gray-800"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-pink-500 p-2 rounded-full">
                    <Award className="text-white" size={20} />
                  </div>
                  <p className="text-gray-300">{achievement}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
