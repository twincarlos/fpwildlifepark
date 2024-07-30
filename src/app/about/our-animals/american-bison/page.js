"use client";
import "../../About.css";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Animal() {
    const {language} = useLanguage();
    return (
        <main>
            <section className="about-header our-animals-header">
                <h2>{language === "English" ? "American Bison" : "American Bison"}</h2>
                <p>{language === "English" ? "Bison Bison Bison" : "Bison Bison Bison"}</p>
            </section>
            <section className="about-body animal-body">
                <div className="at-a-glance">
                    <p><i className="fa-solid fa-location-dot" /> Geographic Range: Great Plains of North America</p>
                    <p className="not-extinct"><i /> Conservation Status: Not extinct</p>
                </div>
                <div className="animal-description">
                    <p>Bison are the iconic image of America, even being our national animal. Millions of bison have roamed our lands for thousands of years, but unfortunately had a rough patch over the last couple hundred years. By the late 1800s there were only a few hundred bison left throughout the United States. Thankfully, a handful of individuals, states and conservation agencies began prioritizing saving this wonderful species. Thanks to these efforts, there are now several hundred herds of these iconic giants roaming protected areas in the U.S. and Canada. Bison are the largest mammal in North America. Males can weigh nearly 2,000 pounds and be 6 feet tall. Females are smaller at 1,000 pounds. Both will sport a large hump of fat on their back. This will be utilized during harsh winters to plow through snow to get to the freshest grasses underneath. This additional fat storage will be used in cases of extreme winters where access to food may be scarce. Bison also sport a thick wooly hide to protect themselves from the ngeativer temperatures they will face during peak winter. Baby bison will be born a bright rusty red color, earning themselves the name “red dog”. Bison are protective of their herds and especially young, charging predators at an impressive 35 mph. Bison love to wallow in dirt and mud to deter flies and help them shed their winter coats. Our bison can be seen scratching on palm trees and wallowing in dirt throughout most of the day. Sometimes our bison can also be seen alongside our water buffalo in their pond!</p>
                </div>
            </section>
        </main>
    );
};