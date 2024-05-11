"use client";

import { useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
    CubeTransparentIcon,
    Bars3Icon,
    GlobeAltIcon,
    BoltIcon,
    SunIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Header() {
    const services = [
        {
            name: "IT Solutions",
            description: "Workstations, servers, network switches, CCTV, and more.",
            href: "/services/it",
            icon: GlobeAltIcon,
        },
        {
            name: "Electrical Services",
            description: "Power generation, management, wiring, and labelling.",
            href: "/services/electrical",
            icon: BoltIcon,
        },
        {
            name: "Solar Energy Solutions",
            description: "Commercial and domestic solar power generation.",
            href: "/services/solar",
            icon: SunIcon,
        },
        {
            name: "General Order Supplies",
            description:
                "A range of essential products for quality and reliability.",
            href: "/services/supplies",
            icon: SquaresPlusIcon,
        },
        {
            name: "Automation",
            description: "Talk with your machines like it's the future.",
            href: "/services/automation",
            icon: CubeTransparentIcon,
        },
    ];
    
    const callToAction = {
        text: "Get Consultation",
        href: "mailto:smt@alqadar.org"
    };

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="absolute w-full z-10 select-none">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1 hover:-translate-y-3 transition ease-in-out duration-500">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Al-Qadar</span>
                        <img
                            className="h-8 w-auto"
                            src="./logo.webp"
                            alt="Al-Qadar logo"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6 text-gray-300" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-100">
                            Services
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-200" />
                        </Popover.Button>

                        <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {services.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-400/20"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-400/20 group-hover:bg-gray-300">
                                                <item.icon className="h-6 w-6 text-gray-700 group-hover:text-orange-600" />
                                            </div>
                                            <div className="flex-auto">
                                                <a
                                                    href={item.href}
                                                    className="block font-semibold text-black"
                                                >
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-700">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <a
                        href="/projects"
                        className="text-sm font-semibold leading-6 text-gray-100"
                    >
                        Projects
                    </a>
                    <a
                        href="/partners"
                        className="text-sm font-semibold leading-6 text-gray-100"
                    >
                        Partners
                    </a>
                    <a
                        href="/company"
                        className="text-sm font-semibold leading-6 text-gray-100"
                    >
                        Company
                    </a>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href={callToAction.href}
                        className="group flex items-center gap-1 text-sm font-semibold leading-6 text-gray-100 border-orange-600 border-2 bg-gradient-to-r from-orange-600 to-transparent from-50% to-50% bg-[length:200%_100%] bg-right-bottom rounded-md shadow-sm hover:bg-left-bottom transition-all ease-in-out duration-500 px-3.5 py-2.5"
                    >
                        {callToAction.text} <ArrowRightIcon className="inline-block h-4 w-4 text-gray-200 group-hover:-rotate-45 transition-all ease-in-out duration-500" />
                    </a>
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-300 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between hover:-translate-y-3 transition ease-in-out duration-500">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Al-Qadar</span>
                            <img
                                className="h-8 w-auto"
                                src="./logo.webp"
                                alt="Al-Qadar logo"
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-900"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/20">
                                                Services
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open
                                                            ? "rotate-180"
                                                            : "",
                                                        "h-5 w-5 flex-none"
                                                    )}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {services.map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-400/20"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/20"
                                >
                                    Projects
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/20"
                                >
                                    Partners
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/20"
                                >
                                    Company
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="mailto:smt@alqadar.org"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/20"
                                >
                                    {callToAction}
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
