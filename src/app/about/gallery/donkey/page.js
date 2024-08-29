"use client";
import "../../About.css";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Animal() {
    const {language} = useLanguage();
    return (
        <main>
            <section className="about-header our-animals-header">
                <h2>{language === "English" ? "Donkey" : "Donkey"}</h2>
                <p>{language === "English" ? "Equus asinus" : "Equus asinus"}</p>
            </section>
            <section className="about-body animal-body">
                <div className="at-a-glance">
                    <p><i className="fa-solid fa-location-dot" /> Geographic range: True wild populations are found in Africa and the Arabian peninsula</p>
                    <p className="not-extinct"><i /> Conservation Status: Not extinct</p>
                </div>
                <div className="animal-description">
                    <p>Donkeys have played a critical role in human lives for thousands of years now. Donkeys were first domesticated 6,000 years ago for milk and meat in North Africa. Now, donkeys serve many purposes from companionship, protection, and riding. Wild donkeys tend to be larger than their domesticated counterparts. Wild herds will consist of one dominant male, a jack, and several females, or jennies. Submissive male donkeys will also be allowed to live in the herd. However, donkeys do not seem to form strong social bonds with one another as wild herds will often break up and reform with new members quite frequently. Donkey’s have been found to bond with other species of animals and will protect them from danger and send out warning calls, much like they would with their own herd of donkeys. If a donkey feels they are in danger, rather than running away, they will stand their ground, refusing to move, allowing them time to think about their game plan. Donkeys are grazers and will spend the majority of their days looking for the best vegetation around. A single donkey can eat as much as 6,000 pounds of food per year, thus making feral donkey populations a huge issue, that will take food from native species. However, conservation efforts are still in place to save wild donkey populations that are being threatened by deforestation and habitat loss. Donkey can be seen spending his days with our zebras, Kenya and Minzi.</p>
                </div>
            </section>
        </main>
    );
};