"use client";
import Link from "next/link";
import { useState } from "react";
import { HamburgerMenu } from "./HamburgerMenu";
import { BigDropdownMenu } from "./BigDropdownMenu";
import { DropdownMenu } from "./DropdownMenu";
import { useLanguage } from "@/app/context/LanguageContext";

export function Links() {
    // const savedLanguage = localStorage.getItem("language")
    const [openMenu, setOpenMenu] = useState(false);
    const { language, setLanguage } = useLanguage();

    return (
        <div className="links">
            <Link className="Large nav-link" href="/tickets"><i className="fa-solid fa-ticket" />{language === "English" ? "Tickets" : "Entradas"}</Link>
            <Link className="Large nav-link" href="/tours"><i className="fa-solid fa-tractor" />{language === "English" ? "Tours" : "Tours"}</Link>
            <Link className="Large nav-link" href="/events"><i className="fa-solid fa-calendar-days" />{language === "English" ? "Events" : "Eventos"}</Link>
            <BigDropdownMenu
                dropdownHeaderIcon={<i className="fa-solid fa-paw" />}
                dropdownHeaderValue={language === "English" ? "About" : "Sobre Nosotros"}
                dropdownOptions={[
                    {
                        value: language === "English" ? "Our Story" : "Nuestra Historia", path: "/about/our-story", icon: <i className="fa-solid fa-hat-cowboy" />, description: language === "English" ? "Discover the journey and mission behind our dedication to conservation and wildlife protection." : "Descubra el viaje y la misión que hay detrás de nuestra dedicación a la conservación y protección de la vida salvaje."
                    },
                    {
                        value: language === "English" ? "Our Team" : "Nuestro Equipo", path: "/about/our-team", icon: <i className="fa-solid fa-users" />, description: language === "English" ? "Meet the passionate and diverse team of experts who bring our vision to life." : "Conozca al apasionado y diverso equipo de expertos que dan vida a nuestra visión."
                    },
                    {
                        value: language === "English" ? "Education" : "Educacion", path: "/about/education", icon: <i className="fa-solid fa-book-open-reader" />, description: language === "English" ? "Explore our educational programs designed to inspire and inform all ages about wildlife conservation and environmental stewardship." : "Explore nuestros programas educativos diseñados para inspirar e informar a todas las edades sobre la conservación de la fauna salvaje y la gestión medioambiental."
                    },
                    {
                        value: language === "English" ? "Our Animals" : "Nuestros Animales", path: "/about/our-animals", icon: <i className="fa-solid fa-cow" />, description: language === "English" ? "Get to know the diverse species of animals and plants that call our park home." : "Conozca las diversas especies de animales y plantas que habitan nuestro parque."
                    }
                ]}
            />
            <BigDropdownMenu
                dropdownHeaderIcon={<i className="fa-solid fa-campground" />}
                dropdownHeaderValue={language === "English" ? "Contact Us" : "Contactanos"}
                dropdownOptions={[
                    {
                        value: language === "English" ? "Let's Connect" : "Conectemos", path: "/contact-us/lets-connect", icon: <i className="fa-regular fa-comments" />, description: language === "English" ? "Stay connected with us through social media, newsletters, and events. Join our community and support our cause." : "Manténgase en contacto con nosotros a través de las redes sociales, boletines y eventos. Únete a nuestra comunidad y apoya nuestra causa."
                    },
                    {
                        value: language === "English" ? "Volunteer Application" : "Aplicacion de Voluntario", path: "/contact-us/volunteer-application", icon: <i className="fa-brands fa-wpforms" />, description: language === "English" ? "Become a part of our mission by volunteering with us. Fill out an application to join our team." : "Forme parte de nuestra misión trabajando como voluntario. Rellena una solicitud para unirte a nuestro equipo."
                    },
                    {
                        value: language === "English" ? "Job Application" : "Aplicacion de Trabajo", path: "/contact-us/job-application", icon: <i className="fa-brands fa-wpforms" />, description: language === "English" ? "Looking for a career in wildlife conservation? Check out our job openings and apply to work with us." : "¿Busca una carrera en la conservación de la vida salvaje? Consulte nuestras ofertas de empleo y solicite trabajar con nosotros."
                    },
                    {
                        value: language === "English" ? "Internship Application" : "Aplicacion de Internship", path: "/contact-us/internship-application", icon: <i className="fa-brands fa-wpforms" />, description: language === "English" ? "Gain hands-on experience and learn from the experts by applying for an internship with us." : "Adquiera experiencia práctica y aprenda de los expertos solicitando unas prácticas con nosotros."
                    }
                ]}
            />
            <DropdownMenu
                // dropdownHeaderValue={savedLanguage ? (savedLanguage === "English" ? "English" : "Español") : "Language"}
                dropdownHeaderValue={language === "English" ? "Language" : "Lenguaje"}
                dropdownOptions={[{
                    value: language === "English" ? "English" : "Ingles",
                    onClick: () => {
                        localStorage.setItem("language", "English");
                        setLanguage("English")
                    }
                },{
                    value: language === "English" ? "Spanish" : "Español",
                    onClick: () => {
                        localStorage.setItem("language", "Spanish");
                        setLanguage("Spanish")
                    }
                }]}
            />
            <i onClick={() => setOpenMenu(!openMenu)} className="menu-icon Small fa-solid fa-bars" />
            {
                openMenu ? <HamburgerMenu setOpenMenu={setOpenMenu} /> : null
            }
        </div>
    );
};
