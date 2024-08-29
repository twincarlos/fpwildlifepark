"use client"
import "../About.css";
import pic1 from "@/app/(assets)/pic1.png";
import pic2 from "@/app/(assets)/pic2.png";
import pic3 from "@/app/(assets)/pic3.png";
import pic4 from "@/app/(assets)/pic4.png";
import pic5 from "@/app/(assets)/pic5.png";
import pic6 from "@/app/(assets)/pic6.png";
import pic7 from "@/app/(assets)/pic7.png";
import pic8 from "@/app/(assets)/pic8.png";
import pic9 from "@/app/(assets)/pic9.png";
import pic10 from "@/app/(assets)/pic10.png";
import pic11 from "@/app/(assets)/pic11.png";
import pic12 from "@/app/(assets)/pic12.png";
import pic13 from "@/app/(assets)/pic13.png";
import pic14 from "@/app/(assets)/pic14.png";
import pic15 from "@/app/(assets)/pic15.png";
import pic16 from "@/app/(assets)/pic16.png";
import pic17 from "@/app/(assets)/pic17.png";
import pic18 from "@/app/(assets)/pic18.png";
import pic19 from "@/app/(assets)/pic19.png";
import pic20 from "@/app/(assets)/pic20.png";
import pic21 from "@/app/(assets)/pic21.png";
import pic22 from "@/app/(assets)/pic22.png";
import pic23 from "@/app/(assets)/pic23.png";
import pic24 from "@/app/(assets)/pic24.png";
import pic25 from "@/app/(assets)/pic25.png";
import pic26 from "@/app/(assets)/pic26.png";
import pic27 from "@/app/(assets)/pic27.png";
import pic28 from "@/app/(assets)/pic28.png";

import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

export default function AnimalsAndPlants() {
    const {language} = useLanguage()
    return (
        <main className="our-animals">
            <section className="about-header our-animals-header">
                <h2>{language === "English" ? "Gallery" : "Galeria"}</h2>
            </section>
            <section className="about-body">
                <div className="about-content">
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                    <div className="animal-container">
                        <Image className="animal-img" alt="animal" src={pic1} />
                    </div>
                </div>
            </section>
        </main>
    );
};