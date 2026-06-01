"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Frontend Developer at Meta",
        avatar: "",
        content:
            "PrepWise AI completely transformed my interview prep. The AI-generated questions were spot-on with what I encountered in real interviews.",
        rating: 5,
    },
    {
        name: "Marcus Johnson",
        role: "Senior Engineer at Google",
        avatar: "",
        content:
            "The analytics dashboard helped me identify my weak areas. I improved my problem-solving skills by 40% in just 2 months.",
        rating: 5,
    },
    {
        name: "Emily Rodriguez",
        role: "Full Stack Developer",
        avatar: "",
        content:
            "Best investment in my career. The AI code explanations are incredibly detailed and helped me understand complex algorithms.",
        rating: 5,
    },
    {
        name: "David Kim",
        role: "Software Engineer at Amazon",
        avatar: "",
        content:
            "The productivity workspace keeps all my learning organized. It's like having a personal coding coach available 24/7.",
        rating: 5,
    },
    {
        name: "Jessica Taylor",
        role: "Tech Lead at Stripe",
        avatar: "",
        content:
            "Our team uses PrepWise AI for onboarding new developers. The learning paths are incredibly well-structured.",
        rating: 5,
    },
    {
        name: "Alex Patel",
        role: "Junior Developer",
        avatar: "",
        content:
            "As someone new to coding, the AI assistant helped me understand concepts I was struggling with for months.",
        rating: 5,
    },
]

export function TestimonialsSection() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4"
                    >
                        Testimonials
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-balance"
                    >
                        Loved by developers worldwide
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg"
                    >
                        See what our community has to say about their experience
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-card/50 backdrop-blur-sm border-border">
                                <CardContent className="p-6">
                                    {/* Rating */}
                                    <div className="flex gap-1 mb-4">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 text-yellow-500 fill-current"
                                            />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <p className="text-sm leading-relaxed mb-6 text-muted-foreground">
                                        &ldquo;{testimonial.content}&rdquo;
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-10 w-10">
                                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                            <AvatarFallback className="bg-primary/10 text-primary">
                                                {testimonial.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-medium text-sm">{testimonial.name}</div>
                                            <div className="text-xs text-muted-foreground">
                                                {testimonial.role}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
