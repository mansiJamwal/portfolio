"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! This is a demo form.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text"
        >
          Get In Touch
        </motion.h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-3 rounded-lg mr-4">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <Link
                    href="mailto:mansi.jamwal.cse23@itbhu.ac.in"
                    className="text-white hover:text-pink-400 transition-colors"
                  >
                    mansi.jamwal.cse23@itbhu.ac.in
                  </Link>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-3 rounded-lg mr-4">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <Link href="tel:+919582221171" className="text-white hover:text-pink-400 transition-colors">
                    +91 9582221171
                  </Link>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-3 rounded-lg mr-4">
                  <Linkedin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <Link
                    href="https://www.linkedin.com/in/mansi-jamwal-454898284/"
                    target="_blank"
                    className="text-white hover:text-pink-400 transition-colors"
                  >
                    mansi-jamwal-454898284
                  </Link>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-3 rounded-lg mr-4">
                  <Github className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <Link
                    href="https://github.com/mansiJamwal"
                    target="_blank"
                    className="text-white hover:text-pink-400 transition-colors"
                  >
                    mansiJamwal
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                Send Message
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="mt-20 py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Mansi Jamwal. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
