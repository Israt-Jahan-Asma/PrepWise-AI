import Link from "next/link"
import { Sparkles } from "lucide-react"
import { FiGithub, FiTwitter, FiLinkedin, FiYoutube } from "react-icons/fi";
const footerLinks = {
    product: [
        { title: "Features", href: "#features" },
        { title: "Pricing", href: "#pricing" },
        { title: "Templates", href: "/explore" },
        { title: "API", href: "/api" },
    ],
    company: [
        { title: "About", href: "/about" },
        { title: "Blog", href: "/blog" },
        { title: "Careers", href: "/careers" },
        { title: "Contact", href: "/contact" },
    ],
    resources: [
        { title: "Documentation", href: "/docs" },
        { title: "Help Center", href: "/help" },
        { title: "Community", href: "/community" },
        { title: "Changelog", href: "/changelog" },
    ],
    legal: [
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" },
        { title: "Cookie Policy", href: "/cookies" },
    ],
}

const socialLinks = [
    { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FiGithub, href: "https://github.com", label: "GitHub" },
    { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FiYoutube, href: "https://youtube.com", label: "YouTube" },
]

export function Footer() {
    return (
        <footer className="border-t border-border bg-card/50">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                    {/* Brand */}
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <span className="font-bold text-xl">PrepWise AI</span>
                        </Link>
                        <p className="text-muted-foreground text-sm mb-6 max-w-xs">
                            AI-powered developer productivity platform. Practice smarter, track
                            progress, and level up your technical skills.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                                >
                                    <social.icon className="w-4 h-4" />
                                    <span className="sr-only">{social.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} PrepWise AI. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Made with care for developers everywhere
                    </p>
                </div>
            </div>
        </footer>
    )
}
