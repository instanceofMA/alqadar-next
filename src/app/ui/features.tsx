export default function Features() {
    const features = [
        {
            highlight: "Civil",
            title: "House Construction, Renovation, and Repair",
            description: <>From inception to completion, Al-Qadar takes pride in crafting homes that resonate with your vision. Our construction services cater to a diverse range of properties, ensuring <span className="text-orange-600">attention to detail</span>, <span className="text-orange-600">quality materials</span>, and <span className="text-orange-600">skilled craftsmanship</span>. Whether it's building a new home or reviving an existing one, our team delivers excellence at every step.</>,
            cta: "Talk to Us",
            ctaHref: "mailto:smt@alqadar.org",
            image: "construction.webp",
            review: "Al-Qadar excels in house construction, renovation, and repair, delivering impeccable craftsmanship and exceptional service with every project they undertake.",
            reviewer: { name: "Muhammad Usman", dp: "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80", designation: "Project Manager @ CPSP" }
        },
        {
            highlight: "Electrical",
            title: "Our Extensive Range of Generators and UPS Solutions",
            description: <>Power your life with reliability through our extensive range of generators and UPS systems. We offer supply, repair, and maintenance services for generators of all sizes. Our UPS solutions, ranging <span className="text-orange-600">from 0.5 kVA to 1000 kVA</span>, provide uninterrupted power support for buildings, offices, and industries. Count on us for troubleshooting, overhauling, and cutting-edge technology.</>,
            cta: "Talk to Us",
            ctaHref: "mailto:smt@alqadar.org",
            image: "generators.webp",
            review: "Al-Qadar stands out in providing top-quality electricity generators and UPS units, offering reliability and excellence in every product and service.",
            reviewer: { name: "Akbar Ali", dp: "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80", designation: "HOD @ Riphah University" }
        },
        {
            highlight: "Mechanical",
            title: "Top-Notch Mechanical Fabrication",
            description: <>Elevate your spaces with our top-notch mechanical fabrication services. From <span className="text-orange-600">gates and windows to grills and racks</span>, our skilled team creates functional and aesthetically pleasing structures. We specialize in the erection and installation of <span className="text-orange-600">steel structure canopies and battery banks</span>, ensuring durability and precision.</>,
            cta: "Talk to Us",
            ctaHref: "mailto:smt@alqadar.org",
            image: "mechanical.webp",
            review: "Al-Qadar is unmatched in mechanical fabrication, delivering top-notch quality and precision in every project, setting the standard for excellence.",
            reviewer: { name: "Ali Subhan", dp: "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80", designation: "Project Manager @ DHA Rawalpindi" }
        },
        {
            highlight: "Merchandise",
            title: "Promotional materials and Engraving Services",
            description: <>Make a lasting impression with our wide range of promotional materials. From <span className="text-orange-600">glassware and cups to calendars and stationery</span>, we offer customizable options that reflect your brand identity. Our <span className="text-orange-600">glass/marble printing and metal laser engraving</span> services add a touch of sophistication to your promotional efforts.</>,
            cta: "Talk to Us",
            ctaHref: "mailto:smt@alqadar.org",
            image: "promotional.webp",
            review: "Al-Qadar excels in providing promotional materials like branded pens and cups, offering premium quality products and exceptional customer service.",
            reviewer: { name: "Ali Subhan", dp: "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80", designation: "Project Manager @ DHA Rawalpindi" }
        },
    ];

    return <div>
        { features.map(({ highlight, title, description, cta, ctaHref, image, review, reviewer }, index) => {
            return <section id={`feature-${index}`} key={index}>
                <div className="overflow-hidden bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="group mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
                            <div className="lg:pr-4 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <h2 className="text-base font-semibold leading-7 text-orange-600">{highlight}</h2>
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
                                    <div className="mt-8">
                                        <a href={ctaHref} className="inline-flex rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">{cta}</a>
                                    </div>
                                    <figure className="mt-16 border-l border-orange-200 pl-8 text-gray-600 group-hover:-translate-y-10 transition ease-in-out duration-500 delay-800">
                                        <blockquote className="text-base leading-7"><p>“{review}”</p></blockquote>
                                        <figcaption className="mt-6 flex gap-x-4 text-sm leading-6">
                                            <img src={reviewer.dp} alt="" className="h-6 w-6 flex-initial rounded-full" />
                                            <div>
                                                <span className="font-semibold text-gray-900">{reviewer.name}</span> &ndash; {reviewer.designation}
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <img src={image} alt="Product screenshot" className="hover:-translate-x-20 transition ease-in-out duration-500 w-[48rem] h-[35rem] max-w-none rounded-xl shadow-xl ring-1 ring-orange-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0" width="2432" height="1442" />
                        </div>
                    </div>
                </div>
            </section>;
        }) }
    </div>
}