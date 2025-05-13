"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase } from "lucide-react"

const experienceData = [
  {
    company: "AtoInfinity Hub",
    position: "Technical Intern",
    duration: "Jan 2025",
    description: [
      "Independently developed and deployed the company's website using Next.js, ensuring a modern, responsive, and user-friendly interface.",
      "Managed the entire development lifecycle, from design to deployment, showcasing strong problem-solving and time-management skills.",
      "Gained hands-on experience in Next.js framework, server-side rendering, and website deployment.",
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text"
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800 hover:border-blue-500/30"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-blue-500 to-pink-500 p-3 rounded-lg">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start flex-wrap">
                      <h3 className="text-xl font-semibold text-white">{item.company}</h3>
                      <span className="text-pink-400 font-medium">{item.duration}</span>
                    </div>
                    <p className="text-gray-300 mt-1">{item.position}</p>
                    <ul className="mt-4 space-y-2">
                      {item.description.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-gray-400 flex items-start">
                          <span className="text-pink-500 mr-2">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
