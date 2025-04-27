"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [expandedProject, setExpandedProject] = useState(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "Website Development",
      shortDescription: "Created and designed website using HTML, CSS, JavaScript, PHP",
      description: "Developed a complete website during internship at Right Companion Pvt. Ltd.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2400&auto=format&fit=crop",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      features: [
        "Responsive design",
        "Interactive UI elements",
        "Backend functionality with PHP",
        "Cross-browser compatibility",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "During my internship at Right Companion Pvt. Ltd. (Aug 2020 - Sep 2020), I created and designed a complete website using HTML, CSS, JavaScript, and PHP. The project involved implementing responsive design principles, creating interactive UI elements, and developing backend functionality with PHP.",
    },
    {
      id: 2,
      title: "Full Stack Development Training",
      shortDescription: "Completed comprehensive training at Oceana Tech Mohali",
      description: "Learned modern web development technologies and best practices",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2400&auto=format&fit=crop",
      tags: ["Full Stack", "HTML", "CSS", "JavaScript", "Cloud"],
      features: [
        "Frontend development with HTML, CSS, JavaScript",
        "Backend development",
        "Database integration",
        "Cloud deployment",
        "Version control with Git",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "Completed Full Stack Development Training at Oceana Tech Mohali from July 2021 to August 2021. The comprehensive program covered frontend and backend technologies, database integration, cloud deployment, and modern development workflows. Gained hands-on experience through practical projects and collaborative development.",
    },
    {
      id: 3,
      title: "Cloud Development Project",
      shortDescription: "Developed applications using cloud technologies",
      description: "Created cloud-based solutions with HTML, CSS, JavaScript",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop",
      tags: ["Cloud", "HTML", "CSS", "JavaScript"],
      features: [
        "Cloud infrastructure setup",
        "Serverless architecture",
        "API integration",
        "Responsive design",
        "Performance optimization",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "Developed cloud-based applications using HTML, CSS, and JavaScript. Implemented serverless architecture for scalability and cost efficiency. Integrated various APIs to enhance functionality and user experience. Focused on creating responsive designs that work across all devices while maintaining optimal performance.",
    },
    {
      id: 4,
      title: "Android App Development",
      shortDescription: "Created mobile applications for Android platform",
      description: "Developed Android applications with modern features and UI",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2400&auto=format&fit=crop",
      tags: ["Android", "Java", "Mobile", "UI/UX"],
      features: [
        "Intuitive user interfaces",
        "Performance optimization",
        "Data persistence",
        "API integration",
        "Material Design principles",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "Developed Android applications with a focus on user experience and performance. Implemented Material Design principles to create intuitive and visually appealing interfaces. Integrated various APIs for enhanced functionality and utilized efficient data persistence techniques. Optimized applications for different screen sizes and device capabilities.",
    },
    {
      id: 5,
      title: "Linux System Administration",
      shortDescription: "Configured and managed Linux environments",
      description: "Implemented Linux solutions for various system requirements",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2400&auto=format&fit=crop",
      tags: ["Linux", "System Admin", "Bash", "Networking"],
      features: [
        "Server configuration",
        "Security implementation",
        "Bash scripting",
        "Network setup",
        "Performance tuning",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "Configured and managed Linux environments for various applications and services. Implemented security best practices to protect systems from vulnerabilities. Created Bash scripts to automate routine tasks and system maintenance. Set up and optimized network configurations for optimal performance and reliability.",
    },
    {
      id: 6,
      title: "Programming in C/C++",
      shortDescription: "Developed applications using C and C++ programming languages",
      description: "Created efficient software solutions with C/C++",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2400&auto=format&fit=crop",
      tags: ["C", "C++", "Data Structures", "Algorithms"],
      features: [
        "Efficient algorithm implementation",
        "Data structure optimization",
        "Memory management",
        "Performance tuning",
        "Problem-solving",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "Developed various applications and systems using C and C++ programming languages. Implemented efficient algorithms and optimized data structures for performance-critical applications. Applied proper memory management techniques to prevent leaks and ensure stability. Solved complex problems through systematic analysis and creative solutions.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.demoLink, "_blank")
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              />
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
