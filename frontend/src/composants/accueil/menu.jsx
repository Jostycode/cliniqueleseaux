import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/logo-transparent2.png";
import facebook from "../../assets/facebook.png";
import gmail from "../../assets/gmail.png";
import tiktok from "../../assets/tiktok.png";
import whatsapp from "../../assets/whatsapp.png";
import menu from "../../assets/menu.png";
import home from "../../assets/home-icon.png"
import service from "../../assets/service-icon.png"
import about from "../../assets/about-icon.png"
import contact from "../../assets/contact-icon.png"


const navigationItems = [
    { name: 'Accueil', href: '/', icon: home },
    { name: 'Services', href: '/service', icon: service },
    { name: 'Apropos', href: '/apropos', icon: about },
    { name: 'Hospitalisation', href: '/hospitalisation', icon: contact },
    { name: 'Contact', href: '/contact', icon: contact },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbarclinique({ pos, color1 }) {


    const handleSendEmail = () => {
        const subject = "Demande de réservation";
        const body = "Bonjour, je souhaite réserver un service.";
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=cliniqueleseaux@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailLink, "_blank");
    };

    const location = useLocation();
    const bgcolor = color1 || "white"
    const color = `sticky top-0 z-50 relative bg-${bgcolor}`

    return (
        <Disclosure as="nav" className={color}
        >
            <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-8 menu">
                <div className="relative flex h-16 items-center justify-end">
                    {/* Bouton menu mobile */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ecart">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-4 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <img aria-hidden="true" src={menu} className="block size-9 bg-sky-600" />
                        </DisclosureButton>
                    </div>

                    {/* Logo et menu */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between ecart ">
                        <Link className="flex shrink-0 items-center" to="/">
                            <img
                                alt='Clinique medicale "LES EAUX"'
                                src={logo}
                                className="h-15 w-auto"
                            />
                            <div className='pt-3 text-decoration-none '>
                                <h7 className=" text-sky-600">Clinique médicale </h7><br />
                                <h7 className="ps-1 text-danger">"LES EAUX"</h7>
                            </div>
                        </Link>

                        {/* Menu desktop */}
                        <div className="hidden sm:ml-6 sm:block justify-end ecartleft mt-3">
                            <div className="flex space-x-4">
                                {navigationItems.map((item) => {
                                    const isActive = location.pathname === item.href;

                                    return (
                                        <>
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                aria-current={isActive ? 'page' : undefined}
                                                className={classNames(
                                                    isActive
                                                        ? ' text-danger'
                                                        : 'text-sky-600 hover:text-success',
                                                    'flex items-center gap-2 rounded-md px-3 text-decoration-none py-2 text-sm font-medium ecart transition-all duration-200'
                                                )}
                                            >
                                                {/* <img
                                                    src={item.icon}
                                                    alt={`${item.name} icon`}
                                                    className="w-4 h-4 object-contain"
                                                /> */}
                                                <span>{item.name}</span>
                                            </Link>
                                        </>
                                    )
                                })}
                                <div style={{ display: 'flex' }}>
                                    <a href=""><img src={facebook} style={{ height: "25px", paddingLeft: '4px' }} alt="" /></a>
                                    <a href="" onClick={handleSendEmail}><img src={gmail} style={{ height: "25px", paddingLeft: '4px' }} alt="" /></a>
                                    <a href=""><img src={whatsapp} style={{ height: "25px", paddingLeft: '4px' }} alt="" /></a>
                                    <a href=""><img src={tiktok} style={{ height: "25px", paddingLeft: '4px' }} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu mobile */}
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-4 pb-3">
                    {navigationItems.map((item) => {
                        const isActive = location.pathname === item.href;

                        return (
                            <DisclosureButton
                                key={item.name}
                                as={Link}
                                to={item.href}
                                aria-current={isActive ? 'page' : undefined}
                                className={classNames(
                                    isActive ? 'text-danger' : 'text-sky-600 hover:text-green',
                                    'block rounded-md px-3 py-2 text-base font-medium text-decoration-none',
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        )
                    })}
                    <div style={{ display: 'flex' }}>
                        <a href=""><img src={facebook} style={{ height: "25px", paddingLeft: '4px' }} alt="" /></a>
                        <a href="" onClick={handleSendEmail}><img src={gmail} style={{ height: "25px", paddingLeft: '4px' }} alt="" /></a>
                        <a href=""><img src={whatsapp} style={{ height: "25px", paddingLeft: '4px' }} alt="" /></a>
                        <a href=""><img src={tiktok} style={{ height: "25px", paddingLeft: '4px' }} alt="" /></a>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
