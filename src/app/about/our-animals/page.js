"use client"
import "../About.css";
import animal1 from "../../(assets)/animal-1.png";
import animal2 from "../../(assets)/animal-2.png";
import animal3 from "../../(assets)/animal-3.png";
import animal4 from "../../(assets)/animal-4.png";
import animal5 from "../../(assets)/animal-5.png";
import animal6 from "../../(assets)/animal-6.png";
import animal7 from "../../(assets)/animal-7.png";
import animal8 from "../../(assets)/animal-8.png";
import animal9 from "../../(assets)/animal-9.png";
import animal10 from "../../(assets)/animal-10.png";
import animal11 from "../../(assets)/animal-11.png";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

export default function AnimalsAndPlants() {
    const {language} = useLanguage()
    return (
        <main className="our-animals">
            <section className="about-header our-animals-header">
                <h2>{language === "English" ? "Our Animals" : "Nuestros Animales"}</h2>
            </section>
            <section className="about-body">
                <div className="about-content">
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={animal1} />
                        <div className="animal-info">
                            <p className="animal-name">Watusi</p>
                            <p className="animal-type">{language === "English" ? "Mammal" : "Mamifero"}</p>
                        </div>
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={animal2} />
                        <div className="animal-info">
                            <p className="animal-name">American Bison</p>
                            <p className="animal-type">{language === "English" ? "Mammal" : "Mamifero"}</p>
                        </div>
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={animal3} />
                        <div className="animal-info">
                            <p className="animal-name">Bactrian</p>
                            <p className="animal-type">{language === "English" ? "Mammal" : "Mamifero"}</p>
                        </div>
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={animal5} />
                        <div className="animal-info">
                            <p className="animal-name">Donkey</p>
                            <p className="animal-type">{language === "English" ? "Mammal" : "Mamifero"}</p>
                        </div>
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={animal6} />
                        <div className="animal-info">
                            <p className="animal-name">Emu</p>
                            <p className="animal-type">{language === "English" ? "Bird" : "Mamifero"}</p>
                        </div>
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={animal8} />
                        <div className="animal-info">
                            <p className="animal-name">Ostrich</p>
                            <p className="animal-type">{language === "English" ? "Bird" : "Ave"}</p>
                        </div>
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={animal10} />
                        <div className="animal-info">
                            <p className="animal-name">Peahen</p>
                            <p className="animal-type">{language === "English" ? "Bird" : "Ave"}</p>
                        </div>
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={animal11} />
                        <div className="animal-info">
                            <p className="animal-name">Watusi</p>
                            <p className="animal-type">{language === "English" ? "Mammal" : "Mamifero"}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};