"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Play } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow delay-1000" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/50 to-background" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>AI-Powered Learning Platform</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        <span className="text-balance">
                            AI-Powered Developer{" "}
                            <span className="text-primary">Growth Platform</span>
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
                    >
                        Practice smarter, track progress, and improve technical skills with
                        intelligent AI workflows. The modern way to prepare for technical
                        interviews and level up your coding skills.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button size="lg" className="h-12 px-8 text-base" asChild>
                            <Link href="/register">
                                Start Learning Free
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                            <Link href="#features">
                                <Play className="w-4 h-4 mr-2" />
                                Watch Demo
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Dashboard Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="mt-16 relative"
                    >
                        <div className="relative rounded-xl border border-border bg-card/50 backdrop-blur-sm p-2 shadow-2xl">
                            <div className="rounded-lg bg-background overflow-hidden">
                                {/* Mock Dashboard */}
                                <div className="bg-card border-b border-border p-4 flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-destructive/60" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/60" />
                                    </div>
                                    <div className="flex-1 flex justify-center">
                                        <div className="px-4 py-1 rounded-md bg-muted text-xs text-muted-foreground">
                                            prepwise.ai/dashboard
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="p-4 rounded-lg bg-muted/50 border border-border">
                                        <div className="text-xs text-muted-foreground mb-1">AI Sessions</div>
                                        <div className="text-2xl font-bold text-primary">1,247</div>
                                        <div className="text-xs text-green-500 mt-1">+12% this week</div>
                                    </div>
                                    <div className="p-4 rounded-lg bg-muted/50 border border-border">
                                        <div className="text-xs text-muted-foreground mb-1">Questions Solved</div>
                                        <div className="text-2xl font-bold">3,892</div>
                                        <div className="text-xs text-green-500 mt-1">+8% this week</div>
                                    </div>
                                    <div className="p-4 rounded-lg bg-muted/50 border border-border">
                                        <div className="text-xs text-muted-foreground mb-1">Skill Score</div>
                                        <div className="text-2xl font-bold text-accent">87/100</div>
                                        <div className="text-xs text-green-500 mt-1">+5 points</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Floating glow effect */}
                        <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
