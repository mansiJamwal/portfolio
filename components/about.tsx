"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            About Me
          </h2>
          <div className="text-gray-300 text-lg leading-relaxed">
            <p className="mb-4">
              I'm a Computer Science and Engineering student at the Indian Institute of Technology, passionate about
              building innovative web applications and solving complex problems.
            </p>
            <p className="mb-4">
              With a strong foundation in data structures, algorithms, and web development technologies, I strive to
              create efficient, user-friendly solutions that make a positive impact.
            </p>
            <p>
              My journey in tech is driven by curiosity and a desire to continuously learn and grow. I enjoy tackling
              challenges and turning ideas into reality through code.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
