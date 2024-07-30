"use client";
import "../../About.css";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Animal() {
    const {language} = useLanguage();
    return (
        <main>
            <section className="about-header our-animals-header">
                <h2>{language === "English" ? "Bactrian Camel" : "Bactrian Camel"}</h2>
                <p>{language === "English" ? "Camelus bactrianus" : "Camelus bactrianus"}</p>
            </section>
            <section className="about-body animal-body">
                <div className="at-a-glance">
                    <p><i className="fa-solid fa-location-dot" /> Geographic Range: Primarily concentrated in the Mongolian steppes and Gobi Desert</p>
                    <p className="critically-endangered"><i /> Conservation Status: Critically Endangered</p>
                </div>
                <div className="animal-description">
                    <p>Bactrian camels are massive with two iconic humps. Males, like Oliver, can grow to sizes of 10 feet and weigh up to 2,000. Camel humps are utilized to store fat reserves, needed for extreme winters in their native habitat. Bactrian camels have the extraordinary ability to go weeks (sometimes months) without water! When camels do have availability to water they can drink nearly 35 gallons at one time. During winter months camels will sport a thick wooly coat to protect them from intense snow, all while shedding it off during summer for brutal summers. Their double row of thick eyelashes will also keep sand or snow out of their eyes. Bactrian camels are well adapted to a life in an unforgiving desert with 22° winters and 122° summers. Life spans of Bactrian camels in captivity is approximately 40 years old. Oliver turned three years old this summer, so we will have many years of his gorgeous mullet and camel kisses here at Fragile Planet! Oliver was raised by keeper staff here at the park, and people are his favorite! He is a local celebrity and ensures every guest leaves with a smile on their face and a cute selfie!</p>
                </div>
            </section>
        </main>
    );
};