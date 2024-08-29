"use client";
import "../../About.css";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Animal() {
    const {language} = useLanguage();
    return (
        <main>
            <section className="about-header our-animals-header">
                <h2>{language === "English" ? "Watusi" : "Watusi"}</h2>
                <p>{language === "English" ? "Bos taurus taurus watusi" : "Bos taurus taurus watusi"}</p>
            </section>
            <section className="about-body animal-body">
                <div className="at-a-glance">
                    <p><i className="fa-solid fa-location-dot" /> Geographic Range: Africa, primarily Rwanda and Uganda</p>
                    <p className="recovering"><i /> Conservation Status: Recovering</p>
                </div>
                <div className="animal-description">
                    <p>Watusi are large cattle that have striking costs ranging from red and white to black in color. They are known for sporting their impressive long horns that can reach 8 to 10 feet in length. Watusi are ceremonial animals in Africa and rarely killed for their meat. They are rather bought to represent one’s wealth in Africa. The Watusi cattle are named after the Tutsi tribe of Rwanda. Watusi cattle tolerate temperature and weather extremes thanks to their horns, which they use as radiators. Their blood circulates through the horn area, and is cooled and returned to their body. Watusi are a grazing species most often active during the day, with the herd sleeping outwards in a circle every night with young calves in the center for protection. As herd animals, watusi are highly social and follow a hierarchy. Watusi are known for living up to 25 years under human care. Our watusi herd is big lovebugs and are one of the first animals to greet guests on the safari wagon. Prince, our bull, loves to bellow for guests and announce his presence in the park multiple times a day. Meanwhile, sisters Violet and Moopal, pack all the attitude and will push Prince out of the way to get all of the attention on themselves. J.D., our calf, loves to play with all the other babies in the petting zoo and is often seen getting everyone riled up for a game of chase.</p>
                </div>
            </section>
        </main>
    );
};