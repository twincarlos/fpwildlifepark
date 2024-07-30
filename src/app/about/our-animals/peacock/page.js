"use client";
import "../../About.css";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Animal() {
    const {language} = useLanguage();
    return (
        <main>
            <section className="about-header our-animals-header">
                <h2>{language === "English" ? "Peahen" : "Peahen"}</h2>
                <p>{language === "English" ? "Pavo cristatus" : "Pavo cristatus"}</p>
            </section>
            <section className="about-body animal-body">
                <div className="at-a-glance">
                    <p><i className="fa-solid fa-location-dot" /> Geographic Region: Sri Lanka and India</p>
                    <p className="least-concern"><i /> Conservation Status: Least Concern</p>
                </div>
                <div className="animal-description">
                    <p>The beloved peacock is a striking species with lots of history. This species have males and females that look like polar opposites. Males sport the iconic image of bright blue feathers and a long feather train of vibrant greens, yellows, blues, and purples. Meanwhile peahens will be a dusty brown or gray in color. Males sport these gorgeous looks to impress their lovely ladies, while also serving as protection from predators. The kaleidoscope of colors will give false warnings to predators and disorient them immensely. All young will look the same when hatching, with males developing their color at around 3 months. They will grow their longest train of feathers and reach peak vibrancy at 6 years of age. Peacocks are so beautiful that they are the national bird of India. Peacocks can also come in a beautiful white color, much like our own male, Blanco. Blanco’s color is due to leucism which results in the loss of pigment from feathers. Thus resulting in his jaw-dropping veil of pristine, white feathers. While many may think that peacocks are unable to fly due to their large tails, they are wrong. Peacocks are able to fly short distances extremely well, either to escape predators or to reach the highest point in a tree. Our peacocks love to spend their days in our wallaby exhibit, cleaning up any fallen food or picking at insects.</p>
                </div>
            </section>
        </main>
    );
};