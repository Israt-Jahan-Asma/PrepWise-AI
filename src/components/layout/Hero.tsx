import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="min-h-[85vh] flex items-center justify-center">

            <div className="container mx-auto px-4 text-center">

                <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl mx-auto">
                    AI-Powered Developer Productivity Platform
                </h1>

                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Practice smarter, improve technical skills, and
                    accelerate your developer growth using intelligent AI workflows.
                </p>

                <div className="mt-8 flex items-center justify-center gap-4">
                    <Button size="lg">
                        Get Started
                    </Button>

                    <Button variant="outline" size="lg">
                        Explore Features
                    </Button>
                </div>

            </div>
        </section>
    );
}