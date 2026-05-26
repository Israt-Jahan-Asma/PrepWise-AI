"use client"

import { motion } from "framer-motion"
import { UserPlus, Route, Target, LineChart, Sparkles } from "lucide-react"

const steps = [
    {
        icon: UserPlus,
        title: "Create Account",
        description: "Sign up in seconds with email or Google authentication",
    },
    {
        icon: Route,
        title: "Select Learning Path",
        description: "Choose your technology stack and skill level to personalize content",
    },
    {
        icon: Target,
        title: "Practice & Generate",
        description: "Use AI to generate questions, explanations, and practice sessions",
    },
    {
        icon: LineChart,
        title: "Track Analytics",
        description: "Monitor your progress with detailed insights and performance metrics",
    },
    {
        icon: Sparkles,
        title: "Improve with AI",
        description: "Get personalized feedback and recommendations to accelerate growth",
    },
]

export function HowItWorksSection() {
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
                        How It Works
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-balance"
                    >
                        Start learning in 5 simple steps
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg"
                    >
                        Our streamlined workflow gets you practicing and improving faster
                    </motion.p>
                </div>

                {/* Steps */}
                <div className="relative">

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative flex flex-col items-center text-center"
                            >


                                {/* Icon Circle */}
                                <div className="w-20 h-20 rounded-full bg-card border-2 border-border flex items-center justify-center mb-4 relative z-10">
                                    <step.icon className="w-8 h-8 text-primary" />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
