"use client"
import "./Home.css";
import { HomeComponent1 } from "./(components)/HomeComponent1/HomeComponent1";
import { HomeComponent2 } from "./(components)/HomeComponent2/HomeComponent2";
import { HomeComponent3 } from "./(components)/HomeComponent3/HomeComponent3";
import { HomeComponent4 } from "./(components)/HomeComponent4/HomeComponent4";
import { HomeComponent5 } from "./(components)/HomeComponent5/HomeComponent5";
import { useLanguage } from "@/app/context/LanguageContext";

export function Home() {
    const {language} = useLanguage()
    return (
        <main>
            <HomeComponent1 language={language} />
            <HomeComponent2 language={language}
                tour1Description={
                    <>
                        <p>{language === "English" ? "Join us for a wild ride on our Safari Wagon Tour! Get up close and personal with our incredible animal ambassadors as you journey through our Safari Park. This family-friendly tour is perfect for all ages and offers a unique opportunity to learn about and interact with a variety of animals." : "Acompáñenos en un viaje salvaje en nuestro Safari Wagon Tour. Conozca de cerca a nuestros increíbles animales embajadores mientras recorre nuestro Safari Park. Este tour familiar es perfecto para todas las edades y ofrece una oportunidad única para aprender e interactuar con una gran variedad de animales."}</p>
                    </>
                }
                tour4Description={
                    <>
                        <p>{language === "English" ? "Join us for an unforgettable evening at Safari Wine Tasting Events, where you can choose between two unique experiences: Sips With Sloths and Tipsy Safari Night. Both events offer the perfect blend of wine tastings, and animal encounters, making them ideal for adults looking to enjoy a fun and educational night out." : "Viva la emoción de Tipsy Safari Night, una aventura exclusiva sólo para adultos. Disfrute de catas de vino, encuentros íntimos con animales y una visita educativa al laboratorio de anfibios. Esta velada especial incluye paseos en carromato safari solo para adultos, perfectos para parejas, grupos de amigos, citas o noches de chicas."}</p>
                    </>
                }
                tour4Link="/tickets/safari-wine-tasting-events"
            />
            <HomeComponent3 language={language} />
            <HomeComponent4 language={language} />
            <HomeComponent5 language={language} />
        </main>
    );
};
