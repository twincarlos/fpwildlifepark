"use client"
import "../About.css";
import { useLanguage } from "@/app/context/LanguageContext";

export default function OurStory() {
    const {language} = useLanguage()
    return (
        <main>
            <section className="about-header our-story-header">
                <h2>{language === "English" ? "Saving Animals Together" : "Rescatando Animales Juntos"}</h2>
            </section>
            <section className="about-body">
                <div className="about-content">
                    <p>
                        <strong>{language === "English" ? "Fragile Planet Wildlife Park" : "Fragile Planet Wildlife Park"}</strong>{language === "English" ? ", LLC was established in 2021 in Los Fresnos, Texas. Opening its doors in the summer of 2021 with a diverse collection of animals, the park has grown rapidly, offering unforgettable experiences to its guests. From its inception, Fragile Planet has been dedicated to providing educational, up-close encounters with wildlife, emphasizing the importance of conservation and animal welfare. The park continually expands its collection and educational programs, aiming to become a leading ecotourism and zoological attraction in the Rio Grande Valley (RGV)." : "LLC se fundó en 2021 en Los Fresnos, Texas. Abriendo sus puertas en el verano de 2021 con una diversa colección de animales, el parque ha crecido rápidamente, ofreciendo experiencias inolvidables a sus huéspedes. Desde sus inicios, Fragile Planet se ha dedicado a proporcionar encuentros educativos y cercanos con la vida salvaje, haciendo hincapié en la importancia de la conservación y el bienestar animal. El parque amplía continuamente su colección y sus programas educativos, con el objetivo de convertirse en una de las principales atracciones ecoturísticas y zoológicas del Valle del Río Grande (RGV)."}
                    </p>
                    <p>
                        <strong>{language === "English" ? "Early Beginnings" : "Tempranos Comienzos"}</strong>
                    </p>
                    <p>
                        {language === "English" ? "The organization was founded by Tyler Thomas, Gabriel Ligon, and Nick Stacey all of which share an extreme passion for wildlife and conservation. Combined, the group brings a total of over 40 combined years of animal care and management experience including zoological management, government relations, captive breeding, and more. The “guys” rely on a group of exceptional employees to make the project function properly and love the unique set of challenges that the industry has to offer on a daily basis." : "La organización fue fundada por Tyler Thomas, Gabriel Ligon y Nick Stacey, todos los cuales comparten una pasión extrema por la vida salvaje y la conservación. Combinados, el grupo aporta un total de más de 40 años combinados de experiencia en el cuidado y la gestión de animales, incluida la gestión zoológica, las relaciones gubernamentales, la cría en cautividad y mucho más. Los \"chicos\" confían en un grupo de empleados excepcionales para que el proyecto funcione correctamente y adoran el conjunto único de retos que la industria ofrece a diario."}
                    </p>
                    <p>
                        <strong>{language === "English" ? "Growth and Expansion" : "Crecimiento y Expansion"}</strong>
                    </p>
                    <p>
                        {language === "English" ? "Fragile Planet Wildlife Park actively participates in local and global conservation efforts. The parks leadership sit in positions on esteemed non profit organizations such as Kids Saving the Rainforest. This NGO has been providing care and support to rainforest and marine animals for the last 25 years, in Manuel Antonio, Costa Rica. A future goal is to begin construction on a state of the art wildlife hospital that can assist the unique animals of the RGV." : "Fragile Planet Wildlife Park participa activamente en iniciativas de conservación locales y mundiales. Los directivos del parque forman parte de prestigiosas organizaciones sin ánimo de lucro, como Kids Saving the Rainforest. Esta ONG lleva 25 años prestando cuidados y apoyo a animales marinos y de la selva tropical en Manuel Antonio (Costa Rica). Un objetivo futuro es iniciar la construcción de un hospital de animales salvajes de última generación que pueda atender a los singulares animales de la RGV."}
                    </p>
                    <p>
                        <strong>{language === "English" ? "Conservation and Community Engagement" : "Conservación y compromiso comunitario"}</strong>
                    </p>
                    <p>
                        {language === "English" ? "Fragile Planet Wildlife Park actively participates in local and global conservation efforts. By partnering with various organizations, the park works to protect endangered species, restore habitats, and support research initiatives aimed at preserving biodiversity. The park also engages with the local community through educational workshops, conservation campaigns, and special events, fostering a culture of environmental stewardship." : "Fragile Planet Wildlife Park participa activamente en los esfuerzos de conservación locales y mundiales. En colaboración con varias organizaciones, el parque trabaja para proteger especies en peligro, restaurar hábitats y apoyar iniciativas de investigación destinadas a preservar la biodiversidad. El parque también colabora con la comunidad local mediante talleres educativos, campañas de conservación y actos especiales, fomentando una cultura de protección del medio ambiente."}
                    </p>
                    <p>
                        <strong>{language === "English" ? "Future Goals" : "Metas a Futuro"}</strong>
                    </p>
                    <p>
                        {language === "English" ? "Looking ahead, Fragile Planet aims to become the pinnacle of ecotourism and zoological attractions in the Rio Grande Valley (RGV). The park plans to continue expanding its animal collections and educational programs, solidifying its position as a leader in wildlife conservation and education." : "De cara al futuro, Fragile Planet aspira a convertirse en la cúspide del ecoturismo y las atracciones zoológicas del Valle del Río Grande (RGV). El parque tiene previsto seguir ampliando sus colecciones de animales y sus programas educativos, consolidando su posición como líder en la conservación y educación de la fauna salvaje."}
                    </p>
                </div>
            </section>
        </main>
    );
};