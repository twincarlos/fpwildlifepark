"use client";
import "../(components)/(Home)/Home.css";
import TicketsHeader from "./(components)/TicketsHeader";
import { HomeComponent2 } from "../(components)/(Home)/(components)/HomeComponent2/HomeComponent2";
import { useLanguage } from "../context/LanguageContext";

export default function Tours() {
    const {language} = useLanguage()
    return (
        <main className="tickets">
            <TicketsHeader language={language} />
            <HomeComponent2
                language={language}
                tour1Price="$15"
                tour1Description={
                    <>
                        <p className="text-align-justify">{language === "English" ? "Join us for a wild ride on our Safari Wagon Tour! Get up close and personal with our incredible animal ambassadors as you journey through our Safari Park. This family-friendly tour is perfect for all ages and offers a unique opportunity to learn about and interact with a variety of animals." : "Acompáñenos en un viaje salvaje en nuestro Safari Wagon Tour. Conozca de cerca a nuestros increíbles animales embajadores mientras recorre nuestro Safari Park. Este tour familiar es perfecto para todas las edades y ofrece una oportunidad única para aprender e interactuar con una gran variedad de animales."}</p>
                        <p>{language === "English" ? "Your Safari Wagon Tour includes:" : "Tu Safari Wagon Tour incluye:"}</p>
                        <p>{language === "English" ? "- A guided Safari Wagon Tour" : "- Un Safari Wagon Tour guiado"}</p>
                        <p>{language === "English" ? "- Visits to our Kangaroo and Wallaby exhibits" : "- Visitas a nuestro Kangaroo y Wallaby exhibits"}</p>
                        <p>{language === "English" ? "- Access to our charming Petting Zoo" : "Acceso a nuestro encantador Petting Zoo"}</p>
                        <p>{language === "English" ? "General Admission: $15" : "Admision General: $15"}</p>
                        <p>{language === "English" ? "Experience the thrill of the wild and create lasting memories with your loved ones. Book your Safari Wagon Tour today and let the adventure begin!" : "Experimente la emoción de lo salvaje y cree recuerdos imborrables con sus seres queridos. Reserve hoy mismo su Safari Wagon Tour y ¡que empiece la aventura!"}</p>
                    </>
                }
                tour5Price="$45"
                tour5Description={
                    <>
                        <p>{language === "English" ? "ADULTS ONLY (21+)" : "SOLO ADULTOS (21+)"}</p>
                        <p className="text-align-justify">{language === "English" ? "This event is a great way to have fun with other adults and meet animals from around the world including sloths, kangaroos, safari animals and more! Proceeds from the event go directly to support a non profit jungle hospital for sloths in Costa Rica!" : "Este evento es una forma estupenda de divertirse con otros adultos y conocer animales de todo el mundo, como perezosos, canguros, animales de safari y muchos más. Los beneficios del evento se destinarán directamente a un hospital de la selva sin ánimo de lucro para perezosos en Costa Rica."}</p>
                        <p>{language === "English" ? "This includes admission to the:" : "Esto incluye acceso a:"}</p>
                        <p>{language === "English" ? "- Wine Tastings" : "- Degustacion de Vinos"}</p>
                        <p>{language === "English" ? "- Sloth Encounters and Photo Opportunity" : "- Encuentros con perezosos y oportunidad para tomar fotos"}</p>
                        <p>{language === "English" ? "- Mini Safari Wagon Ride" : "- Atraccion de Mini Safari Wagon"}</p>
                        <p>{language === "English" ? "- Animal Encounters and Feedings" : "- Encuentros con animales y alimentación"}</p>
                        <p>{language === "English" ? "- Mixer and Small Plates from Fat Pelican Food Truck" : "- Mezclador y pequeños platos de Fat Pelican Food Truck"}</p>
                    </>
                }
                tour5Link="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/555960/?full-items=yes&flow=no"
                tour2Price="$200"
                tour2Description={
                    <>
                        <p className="text-align-justify">{language === "English" ? "For an exclusive and personalized experience, our VIP RTV Tour offers the ultimate adventure. Spend two hours exploring our Safari Park on a private RTV ride, guided by our expert staff. You'll see magnificent animals up close, enjoy special activities not available to the public, and receive complimentary animal food for feeding." : "Si desea vivir una experiencia exclusiva y personalizada, nuestro Tour VIP en RTV le ofrece la aventura definitiva. Pase dos horas explorando nuestro Safari Park en un paseo privado en RTV, guiado por nuestro personal experto. Verá magníficos animales de cerca, disfrutará de actividades especiales no disponibles para el público y recibirá comida de animales de cortesía para alimentarlos."}</p>
                        <p>{language === "English" ? "Your VIP RTV Tour includes:" : "Tu VIP RTV Tour incluye:"}</p>
                        <p>{language === "English" ? "- A guided Safari Wagon Tour" : "- Un Safari Wagon Tour guiado"}</p>
                        <p>{language === "English" ? "- Visits to our Kangaroo and Wallaby Walkabout" : "- Visitas a nuestros Kangaroo y Wallaby Walkabout"}</p>
                        <p>{language === "English" ? "- Access to our Petting Zoo" : "- Acceso a nuestro Petting Zoo"}</p>
                        <p>{language === "English" ? "- Rhino Iguana Feeding experience" : "- Experiencia de Rhino Iguana Feeding"}</p>
                        <p>{language === "English" ? "Private Tour: $200 (for up to 3 guests)" : "Tour Privado: $200 (hasta 3 invitados)"}</p>
                        <p>{language === "English" ? "This tour is designed for small groups of up to three guests, ensuring a personal and unforgettable experience." : "Esta excursión está diseñada para grupos reducidos de hasta tres personas, lo que garantiza una experiencia personal e inolvidable."}</p>
                    </>
                }
                tour2Link="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/555461/?full-items=yes&flow=no"
                tour3Price="$500"
                tour3Link="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/555462/?full-items=yes&flow=no"
                tour3Description={
                    <>
                        <p className="text-align-justify">{language === "English" ? "Experience the wild in an exclusive setting with our Private Safari Wagon Tour for up to 40 people. Explore the Safari Park with of our extraordinary animal ambassadors and enjoy intimate, educational encounters. Perfect for large families, friends, or special occasions, this tour offers a unique, private, and unforgettable connection with nature." : "Experimente la naturaleza salvaje en un entorno exclusivo con nuestra Excursión Privada en Vagón Safari para un máximo de 40 personas. Explore el Safari Park con nuestros extraordinarios embajadores animales y disfrute de encuentros íntimos y educativos. Perfecto para familias numerosas, amigos u ocasiones especiales, este tour ofrece una conexión única, privada e inolvidable con la naturaleza."}</p>
                        <p>{language === "English" ? "Your Safari Wagon Private Tour includes:" : "Tu Safari Wagon Tour Privado incluye:"}</p>
                        <p>{language === "English" ? "- A guided Safari Wagon Tour" : "- Un Safari Wagon Tour guiado"}</p>
                        <p>{language === "English" ? "- Visits to our Kangaroo and Wallaby Walkabout" : "- Visitas a nuestro Kangaroo y Wallaby Walkabout"}</p>
                        <p>{language === "English" ? "- Access to our Petting Zoo" : "- Acceso a nuestro Petting Zoo"}</p>
                        <p>{language === "English" ? "- Rhino Iguana Feeding experience" : "- Experiencia de Rhino Iguana Feeding"}</p>
                        <p>{language === "English" ? "Private Tour: $500 (for up to 50 guests)" : "Tour Privado: $500 (hasta 50 invitados)"}</p>
                        <p>{language === "English" ? "Experience animals like never before without barriers. Book your Safari Wagon Private Tour today and let the adventure begin!" : "Experimente los animales como nunca antes, sin barreras. Reserve hoy mismo su Safari Wagon Private Tour y ¡que empiece la aventura!"}</p>
                    </>
                }
                tourDepartureDetails={true}
                tour4Link="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/555956/?full-items=yes&flow=no"
                tour4Description={
                    <>
                        <p>{language === "English" ? "ADULTS ONLY (21+)" : "SOLO ADULTOS (21+)"}</p>
                        <p className="text-align-justify">{language === "English" ? "Experience the excitement of Tipsy Safari Night, an exclusive adults-only adventure! Enjoy wine tastings, intimate animal encounters, and an educational amphibian lab tour. This special evening features adults-only safari wagon rides, perfect for couples, groups of friends, dates, or ladies' nights out." : "Viva la emoción de Tipsy Safari Night, una aventura exclusiva sólo para adultos. Disfrute de catas de vino, encuentros íntimos con animales y una visita educativa al laboratorio de anfibios. Esta velada especial incluye paseos en carromato safari solo para adultos, perfectos para parejas, grupos de amigos, citas o noches de chicas."}</p>
                        <p>{language === "English" ? "Your Tipsy Safari Night tour includes:" : "Tu Tipsy Safari Night tour incluye:"}</p>
                        <p>{language === "English" ? "- Safari Wagon Sunset Tour" : "- Safari Wagon Sunset Tour"}</p>
                        <p>{language === "English" ? "- Kangaroo / Wallaby" : "- Kangaroo / Wallaby"}</p>
                        <p>{language === "English" ? "- Petting Zoo" : "- Petting Zoo"}</p>
                        <p>{language === "English" ? "- Free 4 Station Wine Tasters" : "- 4 Station Wine Tasters Gratis"}</p>
                        <p>{language === "English" ? "- Louisiana Food Truck Samples" : "- Louisiana Food Truck Samples"}</p>
                        <p>{language === "English" ? "General Admission: $35" : "Acceso General: $35"}</p>
                        <p>{language === "English" ? "Immerse yourself in a night of fun, learning, and indulgence. Book your Tipsy Safari Night tickets and make memories that will last a lifetime!" : "Sumérjase en una noche de diversión, aprendizaje y placer. Reserve sus entradas para la Tipsy Safari Night y cree recuerdos para toda la vida."}</p>
                    </>
                }
                tour4Price="$35"
            />
        </main>
    );
};
