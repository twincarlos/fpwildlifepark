"use client"
import "../(components)/(Home)/Home.css";
import ToursHeader from "./(components)/ToursHeader";
import { HomeComponent2 } from "../(components)/(Home)/(components)/HomeComponent2/HomeComponent2";
import { useLanguage } from "../context/LanguageContext";

export default function Tours() {
    const {language} = useLanguage()
    return (
        <main>
            <ToursHeader language={language} />
            <HomeComponent2
                tour1Price="$15"
                tour1Description={
                    <>
                        <p className="text-align-justify">{language === "English" ? "Join us for a wild ride on our Safari Wagon Tour! Get up close and personal with our incredible animal ambassadors as you journey through our Safari Park. This family-friendly tour is perfect for all ages and offers a unique opportunity to learn about and interact with a variety of animals." : "Acompáñenos en un viaje salvaje en nuestro Safari Wagon Tour. Conozca de cerca a nuestros increíbles animales embajadores mientras recorre nuestro Safari Park. Este tour familiar es perfecto para todas las edades y ofrece una oportunidad única para aprender e interactuar con una gran variedad de animales."}</p>
                    </>
                }
                tour1Link="/tickets"
                tour2Price="$200"
                tour2Description={
                    <>
                        <p className="text-align-justify">{language === "English" ? "For an exclusive and personalized experience, our VIP RTV Tour offers the ultimate adventure. Spend two hours exploring our Safari Park on a private RTV ride, guided by our expert staff. You'll see magnificent animals up close, enjoy special activities not available to the public, and receive complimentary animal food for feeding." : "Si desea vivir una experiencia exclusiva y personalizada, nuestro Tour VIP en RTV le ofrece la aventura definitiva. Pase dos horas explorando nuestro Safari Park en un paseo privado en RTV, guiado por nuestro personal experto. Verá magníficos animales de cerca, disfrutará de actividades especiales no disponibles para el público y recibirá comida de animales de cortesía para alimentarlos."}</p>
                    </>
                }
                tour2Link="/tickets"
                tour3Price="$500"
                tour3Description={
                    <>
                        <p className="text-align-justify">{language === "English" ? "Experience the wild in an exclusive setting with our Private Safari Wagon Tour for up to 40 people. Explore the Safari Park with of our extraordinary animal ambassadors and enjoy intimate, educational encounters. Perfect for large families, friends, or special occasions, this tour offers a unique, private, and unforgettable connection with nature." : "Experimente la naturaleza salvaje en un entorno exclusivo con nuestra Excursión Privada en Vagón Safari para un máximo de 40 personas. Explore el Safari Park con nuestros extraordinarios embajadores animales y disfrute de encuentros íntimos y educativos. Perfecto para familias numerosas, amigos u ocasiones especiales, este tour ofrece una conexión única, privada e inolvidable con la naturaleza."}</p>
                    </>
                }
                tour3Link="/tickets"
                tourDepartureDetails={true}
                tour4Description={
                    <>
                        <p className="text-align-justify">{language === "English" ? "Experience the excitement of Tipsy Safari Night, an exclusive adults-only adventure! Enjoy wine tastings, intimate animal encounters, and an educational amphibian lab tour. This special evening features adults-only safari wagon rides, perfect for couples, groups of friends, dates, or ladies' nights out." : "Viva la emoción de Tipsy Safari Night, una aventura exclusiva sólo para adultos. Disfrute de catas de vino, encuentros íntimos con animales y una visita educativa al laboratorio de anfibios. Esta velada especial incluye paseos en carromato safari solo para adultos, perfectos para parejas, grupos de amigos, citas o noches de chicas."}</p>
                    </>
                }
                tour4Link="/tickets"
                tour4Price="$35"
            />
        </main>
    );
};
