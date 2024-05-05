import Image from "next/image";
import Hero from "./ui/hero";
import Features from "./ui/features";

export default function Home() {
    return (
        <div className="snap-y snap-proximity select-none">
            <Hero />
            <Features />
        </div>
    );
}
