"use client";
import "../../About.css";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Animal() {
    const {language} = useLanguage();
    return (
        <main>
            <section className="about-header our-animals-header">
                <h2>{language === "English" ? "Ostrich" : "Ostrich"}</h2>
                <p>{language === "English" ? "Struthio camelus" : "Struthio camelus"}</p>
            </section>
            <section className="about-body animal-body">
                <div className="at-a-glance">
                    <p><i className="fa-solid fa-location-dot" /> Geographic Region: Sub-Saharan Africa</p>
                    <p className="least-concern"><i /> Conservation Status: Least Concern</p>
                </div>
                <div className="animal-description">
                    <p>Ostrich will be the largest species of flightless bird reaching heights of 9 feet and weighing a whopping 300 lbs. Ostriches may not fly but they make for this with incredible speeds, with a top speed of 43 mph. Their long legs also allow them to cover 10 feet in a single stride, ensuring they cover a large area quickly. These long legs also pack a pretty hefty kick - strong enough to kill a lion. Ostrich will use their short wings for balancing, stretching their wings out while on the run. Ostriches are native to the intense savannas and grasslands of Africa. This means ostriches are adapted to live in dry, sandy, and intense seasons of weather. While ostriches may look intimidating- their diet is nothing to cause fright, consisting mainly of leafy greens, roots, flowering plants, succulents, and the occasional fallen fruit or frog. Ostrich will live in groups of 12 individuals called a herd. The herd will have an iconic black and white dominant male, with all other members being gray and white females, all waiting to impress the male. Ostrich also have a fun party trick similar to the emu - eating rocks and pebbles to assist their gizzard in processing their foods. Ostrich can live to be 70 years old in captivity. Our ostrich girls are the first to greet guests at our wagon and love to escort the wagon throughout the safari park!</p>
                </div>
            </section>
        </main>
    );
};