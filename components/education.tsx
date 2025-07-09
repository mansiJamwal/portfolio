"use client"

import { motion, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { School, Award, Calendar, TrendingUp } from "lucide-react"

const educationData = [
  {
    institution: "Indian Institute of Technology",
    degree: "Integrated Dual-Degree - Computer Science and Engineering",
    duration: "2023 - 2028",
    gpa: "GPA: 9.70/10.0",
    icon: School,
    color: "from-blue-500 to-purple-600",
    bgColor: "from-blue-500/10 to-purple-600/10",
  },
  {
    institution: "MM Public School",
    degree: "CBSE (CLASS XII)",
    duration: "2023",
    gpa: "96%",
    icon: School,
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-500/10 to-teal-600/10",
  },
  {
    institution: "Delhi Public School",
    degree: "CBSE (CLASS X)",
    duration: "2021",
    gpa: "97.8%",
    icon: School,
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-500/10 to-red-600/10",
  },
]

const achievementsData = [
  {
    text: "Secured 99.7 percentile and a rank of 3462 among 11.7 lakh candidates in JEE Mains 2023.",
    highlight: "99.7 percentile",
    color: "from-yellow-400 to-orange-500",
  },
  {
    text: "Secured 2558 rank among 1.8 lakh candidates in JEE Advanced 2023.",
    highlight: "2558 rank",
    color: "from-pink-400 to-rose-500",
  },
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const achievementVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="education"
      className="py-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={inView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-1 mb-6"
          >
            <School className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Academic Journey</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Education
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            A journey of continuous learning and academic excellence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

            <div className="space-y-4">
              {educationData.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-8 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-slate-800 z-10 hidden md:block group-hover:scale-125 transition-transform duration-300" />

                  <div className="md:ml-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 hover:border-slate-600/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        className={`bg-gradient-to-r ${item.color} p-3 rounded-xl shadow-lg`}
                      >
                        <item.icon className="text-white w-5 h-5" />
                      </motion.div>

                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                            {item.institution}
                          </h3>
                          <div className="flex items-center gap-2 text-slate-400">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-medium">{item.duration}</span>
                          </div>
                        </div>

                        <p className="text-slate-300 text-base mb-4 leading-relaxed">{item.degree}</p>

                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold text-base">{item.gpa}</span>
                        </div>
                      </div>
                    </div>

                    {/* Decorative gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${item.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={inView ? { scale: 1 } : { scale: 0.9 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-1 mb-6"
              >
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-300 font-medium">Achievements</span>
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Scholastic Excellence</h3>
              <p className="text-slate-400 text-base">Recognition of dedication and hard work</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
              {achievementsData.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={achievementVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: 1.2 + index * 0.2 }}
                  className="group relative"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-yellow-500/10 h-full">
                    <div className="flex flex-col items-center gap-4 text-center h-full">
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        className={`bg-gradient-to-r ${achievement.color} p-4 rounded-xl shadow-lg mx-auto`}
                      >
                        <Award className="text-white w-6 h-6" />
                      </motion.div>

                      <div className="flex-1 space-y-3">
                        <p className="text-slate-300 text-base leading-relaxed">
                          {achievement.text.split(achievement.highlight).map((part, i, arr) => (
                            <span key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                <span
                                  className={`bg-gradient-to-r ${achievement.color} text-transparent bg-clip-text font-bold`}
                                >
                                  {achievement.highlight}
                                </span>
                              )}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>

                    {/* Decorative gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${achievement.color.replace("400", "500/5").replace("500", "600/5")} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
