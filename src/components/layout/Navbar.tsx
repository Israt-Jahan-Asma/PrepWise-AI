"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "../modeToggle";

const publicNavItems = [
    { title: "Home", href: "/" },
    { title: "Features", href: "#features" },
    { title: "Explore", href: "/explore" },
    { title: "Pricing", href: "#pricing" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
]
  

export default function Navbar() {
    return (
        <nav className="border-b sticky top-0 z-50 bg-background/80 backdrop-blur">
            <div className="container mx-auto flex items-center justify-between h-16 px-4">

                <Link href="/" className="text-2xl font-bold">
                    PrepWise AI
                </Link>

                <div className="hidden md:flex items-left gap-6">
                    {publicNavItems.map((link) => (
                        <Link key={link.title} href={link.href}>
                            {link.title}
                        </Link>
                    ))}

                   
                </div>
                <div className="hidden md:flex items-center gap-6">
                    
                    <ModeToggle />
                </div>

                <div className="md:hidden flex items-center gap-2">
                    <ModeToggle />

                    <Sheet>
                        <SheetTrigger>
                            <Menu />
                        </SheetTrigger>

                        <SheetContent side="right">
                            <div className="flex flex-col gap-6 mt-10">
                                {publicNavItems.map((link) => (
                                    <Link key={link.title} href={link.href}>
                                        {link.title}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}