import Image from "next/image"
import Link from "next/link";

export default function Hero() {
    const headline = <>Your partner in <span className='bg-gradient-to-r from-blue-300 to-orange-600 bg-clip-text text-transparent'>excellence</span></>;
    const text = "Cutting edge solutions in IT, Electrical, and Solar sectors.";
    const callToAction = {
        text: "Get in touch",
        href: "mailto:smt@alqadar.org"
    };

    return (
        <div className="relative isolate overflow-hidden pt-14 snap-start snap-always select-none">
            <Image src="/hero-bg.png" width="2830" height="2830" quality="80" priority={true} alt="background image, a lot of buildings" className="absolute inset-0 -z-20 h-full w-full object-cover brightness-[0.15]" />
            {/* <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2830&amp;q=80&amp;blend=111827&amp;sat=-100&amp;exp=15&amp;blend-mode=multiply" width="2830" height="2830" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" /> */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-300 to-orange-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                }} />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">Announcing our next round of funding. <a href="#" className="font-semibold text-white"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">→</span></a></div>
                </div> */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl hover:-translate-y-3 transition ease-in-out duration-500">{headline}</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300 hover:-translate-y-3 transition ease-in-out duration-300">{text}</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                        href={callToAction.href}
                        className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 transition-all ease-in-out duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                        >{callToAction.text}</Link>
                        <Link
                        href="#feature-0"
                        className="text-sm font-semibold leading-6 text-white hover:scale-105 transition ease-in-out duration-500">
                        Learn more <span aria-hidden="true">&darr;</span></Link>
                    </div>
                </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-300 to-orange-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                }}
                >
                </div>
            </div>
        </div>
    )
}