"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
    Sparkles,
    LayoutDashboard,
    BarChart3,
    Code2,
    MessageSquare,
    Zap,
} from "lucide-react"

const features = [
    {
        icon: Sparkles,
        title: "AI Question Generator",
        description:
            "Generate customized practice questions based on technology, difficulty, and topic with intelligent AI.",
    },
    {
        icon: LayoutDashboard,
        title: "Smart Learning Dashboard",
        description:
            "Track your progress, manage sessions, and visualize your learning journey in one place.",
    },
    {
        icon: BarChart3,
        title: "Analytics Tracking",
        description:
            "Deep insights into your performance with detailed charts and progress metrics.",
    },
    {
        icon: Code2,
        title: "AI Code Explanation",
        description:
            "Get instant, clear explanations for complex code snippets and algorithms.",
    },
    {
        icon: MessageSquare,
        title: "AI Feedback Assistant",
        description:
            "Receive personalized feedback on your solutions and interview responses.",
    },
    {
        icon: Zap,
        title: "Productivity Workspace",
        description:
            "Organize your learning with smart sessions, notes, and collaboration tools.",
    },
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
}

export function FeaturesSection() {
    return (
        <section id="features" className="py-24 relative">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4"
                    >
                        Features
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-balance"
                    >
                        Everything you need to level up
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg"
                    >
                        Powerful AI-driven tools designed to accelerate your learning and
                        improve your technical skills
                    </motion.p>
                </div>

                {/* Features Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature) => (
                        <motion.div key={feature.title} variants={item}>
                            <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors group">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
