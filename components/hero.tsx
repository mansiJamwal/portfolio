"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-950">
                <Image
                  src="/placeholder.svg?height=250&width=250"
                  alt="Mansi Jamwal"
                  width={250}
                  height={250}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center md:text-left mt-6 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-xl md:text-2xl font-medium text-gray-300">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold mt-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                Mansi Jamwal
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl md:text-2xl font-medium text-gray-300 h-16"
            >
              <TypeAnimation
                sequence={[
                  "Computer Science Student",
                  1000,
                  "Web Developer",
                  1000,
                  "Problem Solver",
                  1000,
                  "Tech Enthusiast",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center md:justify-start space-x-4 mt-8"
            >
              <Link
                href="https://github.com/mansiJamwal"
                target="_blank"
                className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mansi-jamwal-454898284/"
                target="_blank"
                className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="mailto:mansi.jamwal.cse23@itbhu.ac.in"
                className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </Link>
              <Link
                href="tel:+919582221171"
                className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Phone size={20} />
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-16"
        >
          <Link
            href="#about"
            className="flex items-center justify-center w-10 h-10 mx-auto text-white bg-gradient-to-r from-pink-500 to-blue-500 rounded-full animate-bounce"
          >
            <ArrowDown size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
