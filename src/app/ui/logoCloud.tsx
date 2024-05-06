export default function LogoCloud() {
    const logos = [
        { path: "partners-logos/riphah.png", alt: "Logo of Riphah International University" },
        { path: "partners-logos/bahria-town.png", alt: "Logo of Bahria Town" },
        { path: "partners-logos/punjab-university.png", alt: "Logo of Punjab University" },
        { path: "partners-logos/saleem-memorial-hospital.png", alt: "Logo of Saleem Memorial Hospital" },
        { path: "partners-logos/indus-hospital.png", alt: "Logo of Indus Hospital" },
        { path: "partners-logos/naseem-ijaz-hospital.png", alt: "Logo of Naseem Ijaz Hospital" },
        { path: "partners-logos/pak-turk-school.png", alt: "Logo of Pak-Turk School" },
        { path: "partners-logos/nrtc.png", alt: "Logo of NRTC" },
        { path: "partners-logos/expo-centre.png", alt: "Logo of Expo Centre" },
        { path: "partners-logos/medipak.png", alt: "Logo of Medipak" },
        { path: "partners-logos/ghq.png", alt: "Logo of GHQ" },
        { path: "partners-logos/kfc.png", alt: "Logo of KFC" },
        { path: "partners-logos/cpsp.png", alt: "Logo of CPSP" },
    ];

    return (
        <div className="bg-white py-24 sm:py-32 select-none">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Trusted by the Pakistan's most established brands
                </h2>
            <div className="mx-auto mt-10 flex flex-wrap max-w-lg items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
                {
                    logos.map(({ path, alt }, index) => {
                        return <img
                            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 flex-[1_0_10%] hover:-translate-y-3 transition ease-in-out duration-500"
                            src={ path }
                            alt={ alt }
                            width={320}
                            height={320}
                        />
                    })
                }
            </div>
            </div>
        </div>
    );
}