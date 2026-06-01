"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
    {
        name: "Free",
        price: "$0",
        period: "forever",
        description: "Perfect for getting started",
        features: [
            "5 AI generations per day",
            "Basic dashboard access",
            "3 learning templates",
            "Community support",
            "Progress tracking",
        ],
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Pro",
        price: "$19",
        period: "per month",
        description: "Best for serious learners",
        features: [
            "Unlimited AI generations",
            "Full dashboard access",
            "All learning templates",
            "Priority support",
            "Advanced analytics",
            "AI code explanations",
            "Custom learning paths",
        ],
        cta: "Start Pro Trial",
        popular: true,
    },
    {
        name: "Team",
        price: "$49",
        period: "per month",
        description: "For teams and organizations",
        features: [
            "Everything in Pro",
            "Up to 10 team members",
            "Team analytics dashboard",
            "Admin controls",
            "SSO authentication",
            "Custom branding",
            "Dedicated support",
            "API access",
        ],
        cta: "Contact Sales",
        popular: false,
    },
]

export function PricingSection() {
    return (
        <section id="pricing" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4"
                    >
                        Pricing
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-balance"
                    >
                        Simple, transparent pricing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg"
                    >
                        Choose the plan that fits your learning journey
                    </motion.p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card
                                className={`h-full flex flex-col relative ${plan.popular
                                        ? "border-primary shadow-lg shadow-primary/10"
                                        : "border-border"
                                    }`}
                            >
                                {plan.popular && (
                                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-4">
                                        Most Popular
                                    </Badge>
                                )}
                                <CardHeader className="text-center pb-4">
                                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold">{plan.price}</span>
                                        <span className="text-muted-foreground">/{plan.period}</span>
                                    </div>
                                    <p className="text-muted-foreground text-sm mt-2">
                                        {plan.description}
                                    </p>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <ul className="space-y-3">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        className="w-full"
                                        variant={plan.popular ? "default" : "outline"}
                                        asChild
                                    >
                                        <Link href="/register">{plan.cta}</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
