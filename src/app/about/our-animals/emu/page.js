"use client";
import "../../About.css";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Animal() {
    const {language} = useLanguage();
    return (
        <main>
            <section className="about-header our-animals-header">
                <h2>{language === "English" ? "Emu" : "Emu"}</h2>
                <p>{language === "English" ? "Dromaius novaehollandiae" : "Dromaius novaehollandiae"}</p>
            </section>
            <section className="about-body animal-body">
                <div className="at-a-glance">
                    <p><i className="fa-solid fa-location-dot" /> Geographic Range: Australia, except for Tasmania</p>
                    <p className="least-concern"><i /> Conservation Status: Least Concern</p>
                </div>
                <div className="animal-description">
                    <p>Emu are the second largest species of flightless birds. Males can reach heights of nearly 6 feet. Emu are incredibly fast and have a top speed of 31 mph, faster than kangaroos! Emu have a trick of swallowing rocks in order to help them break down their diet of fruit, flowers, insects, and many other things. Emu are also the only species of bird with calf muscles, making for a powerful kick. These large birds are also amazing fathers, with male emu incubating and raising their young for up to two years. Meanwhile, mom wanders off into the Australian outback never to be seen again! Emu feathers are uniquely designed to direct rain away from their body. Emu are musicians with females producing loud booming calls to entice males during breeding season. Emu are even able to mimic certain sounds such as clicks, alarms, and other animals. These outstanding animals will live 35 years under human care. Our emu’s are very curious and love to assist keeper staff with any task. Whether it be cleaning waters, building a new exhibit, or just recording a video - our emus are right there alongside keepers, making sure they are never lonely and always have a feathered friend close by incase they need a hand - or wing</p>
                </div>
            </section>
        </main>
    );
};