"use client"

import { useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
    { value: 15000, suffix: "+", label: "Developers" },
    { value: 1000000, suffix: "+", label: "AI Generations" },
    { value: 250000, suffix: "+", label: "Practice Sessions" },
    { value: 98, suffix: "%", label: "Success Rate" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (!isInView) return

        const duration = 2000
        const steps = 60
        const increment = value / steps
        let current = 0

        const timer = setInterval(() => {
            current += increment
            if (current >= value) {
                setCount(value)
                clearInterval(timer)
            } else {
                setCount(Math.floor(current))
            }
        }, duration / steps)

        return () => clearInterval(timer)
    }, [isInView, value])

    const formatNumber = (num: number) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + "M"
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + "K"
        }
        return num.toString()
    }

    return (
        <span ref={ref}>
            {formatNumber(count)}
            {suffix}
        </span>
    )
}

export function StatsSection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-muted-foreground font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
