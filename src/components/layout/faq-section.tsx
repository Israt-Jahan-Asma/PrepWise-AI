"use client"

import { motion } from "framer-motion"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "How does the AI-powered learning work?",
        answer:
            "Our AI analyzes your learning goals, current skill level, and progress to generate personalized practice questions, explanations, and feedback. It adapts to your performance and provides targeted recommendations to help you improve faster.",
    },
    {
        question: "What subscription plans are available?",
        answer:
            "We offer three plans: Free (basic features with limited AI generations), Pro ($19/month for unlimited access and advanced features), and Team ($49/month for organizations with team collaboration tools). All paid plans come with a 14-day free trial.",
    },
    {
        question: "How do I use the dashboard?",
        answer:
            "After signing up, you'll have access to your personal dashboard where you can track progress, view analytics, manage learning sessions, and access AI tools. The dashboard provides a comprehensive view of your learning journey with detailed insights.",
    },
    {
        question: "Is my data secure?",
        answer:
            "Yes, security is our top priority. We use industry-standard encryption for all data in transit and at rest. Your learning data is private and never shared with third parties. We comply with GDPR and other privacy regulations.",
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer:
            "Absolutely! You can cancel your subscription at any time from your account settings. If you cancel, you'll continue to have access until the end of your current billing period. No questions asked.",
    },
    {
        question: "What technologies are covered?",
        answer:
            "We cover a wide range of technologies including React, JavaScript, TypeScript, Node.js, Python, System Design, Data Structures, Algorithms, and more. Our template library is constantly expanding based on user demand.",
    },
]

export function FAQSection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4"
                    >
                        FAQ
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-balance"
                    >
                        Frequently asked questions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg"
                    >
                        Everything you need to know about PrepWise AI
                    </motion.p>
                </div>

                {/* FAQ Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="max-w-3xl mx-auto"
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}
