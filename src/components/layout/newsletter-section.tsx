"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Loader2, Mail } from "lucide-react"

export function NewsletterSection() {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) {
            toast.error("Please enter your email address")
            return
        }

        setIsLoading(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsLoading(false)
        setEmail("")
        toast.success("Thanks for subscribing! Check your inbox for confirmation.")
    }

    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <Mail className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        Stay in the loop
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Get the latest updates on new features, learning tips, and exclusive
                        content delivered to your inbox.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 h-12"
                            disabled={isLoading}
                        />
                        <Button type="submit" size="lg" className="h-12" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Subscribing...
                                </>
                            ) : (
                                "Subscribe"
                            )}
                        </Button>
                    </form>

                    <p className="text-xs text-muted-foreground mt-4">
                        No spam, unsubscribe at any time.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
