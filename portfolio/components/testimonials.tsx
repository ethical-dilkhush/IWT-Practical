"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Testimonials() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const testimonials = [
    {
      id: 1,
      name: "Oceana Tech",
      position: "Full Stack Development Training",
      content:
        "Dilkhush completed Full Stack Development Training at our institute from July 2021 to August 2021. He demonstrated excellent skills in HTML, CSS, JavaScript, and cloud development.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2400&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Right Companion Pvt. Ltd.",
      position: "Web Development Internship",
      content:
        "During his internship with us from August to September 2020, Dilkhush showed great aptitude for web development. He created and designed websites using HTML, CSS, JavaScript, and PHP with impressive attention to detail.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "GNA University",
      position: "Bachelor of Science (Information Technology)",
      content:
        "Dilkhush Kumar was an exceptional student who demonstrated leadership in various projects and technical management skills. He secured 3rd position in Hackathon at PCBT, showing his problem-solving abilities.",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2400&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "JNV Saharsa Bihar",
      position: "Higher Secondary Education",
      content:
        "Dilkhush was an active student who excelled in Physics, Chemistry, Math, English, and Hindi. He also organized various events, showing his leadership capabilities from an early age.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2400&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "NCC Certificate",
      position: "Grade A Certification",
      content:
        "Dilkhush Kumar earned the NCC Certificate Grade A, demonstrating discipline, leadership, and commitment to service. His participation in NCC activities showcased his dedication and team spirit.",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2400&auto=format&fit=crop",
    },
  ]

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-5 w-5 fill-primary text-primary" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-primary text-primary" />)
    }

    return <div className="flex">{stars}</div>
  }

  return (
    <section id="testimonials" className="py-20">
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
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Recognition</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground flex-grow mb-4">"{testimonial.content}"</p>
                      <div className="mt-auto">{renderStars(testimonial.rating)}</div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static translate-y-0 mr-2" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
