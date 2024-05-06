import Image from "next/image";
import Hero from "./ui/hero";
import Features from "./ui/features";
import LogoCloud from "./ui/logoCloud";

export default function Home() {
    return (
        <div className="snap-y snap-proximity">
            <Hero />
            <Features />
            <LogoCloud />
        </div>
    );
}
