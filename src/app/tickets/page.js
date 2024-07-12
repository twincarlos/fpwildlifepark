"use client";
import "../(components)/(Home)/Home.css";
import TicketsHeader from "./(components)/TicketsHeader";
import { HomeComponent2 } from "../(components)/(Home)/(components)/HomeComponent2/HomeComponent2";
import { useLanguage } from "../context/LanguageContext";

export default function Tours() {
    const {language} = useLanguage()
    return (
        <main>
            <TicketsHeader useLanguage={useLanguage} />
            <HomeComponent2
                tour1Price="$15"
                tour1Description={
                    <>
                        <p className="text-align-justify">{language === "English" ? "Join us for a wild ride on our Safari Wagon Tour! Get up close and personal with our incredible animal ambassadors as you journey through our Safari Park. This family-friendly tour is perfect for all ages and offers a unique opportunity to learn about and interact with a variety of animals." : ""}</p>
                        <p>{language === "English" ? "Your Safari Wagon Tour includes:" : ""}</p>
                        <p>{language === "English" ? "- A guided Safari Wagon Tour" : ""}</p>
                        <p>{language === "English" ? "- Visits to our Kangaroo and Wallaby exhibits" : ""}</p>
                        <p>{language === "English" ? "- Access to our charming Petting Zoo" : ""}</p>
                        <p>{language === "English" ? "General Admission: $15" : ""}</p>
                        <p>{language === "English" ? "Experience the thrill of the wild and create lasting memories with your loved ones. Book your Safari Wagon Tour today and let the adventure begin!" : ""}</p>
                    </>
                }
                tour2Price="$200"
                tour2Description={
                    <>
                        <p className="text-align-justify">{language === "English" ? "For an exclusive and personalized experience, our VIP RTV Tour offers the ultimate adventure. Spend two hours exploring our Safari Park on a private RTV ride, guided by our expert staff. You'll see magnificent animals up close, enjoy special activities not available to the public, and receive complimentary animal food for feeding." : ""}</p>
                        <p>{language === "English" ? "Your VIP RTV Tour includes:" : ""}</p>
                        <p>{language === "English" ? "- A guided Safari Wagon Tour" : ""}</p>
                        <p>{language === "English" ? "- Visits to our Kangaroo and Wallaby Walkabout" : ""}</p>
                        <p>{language === "English" ? "- Access to our Petting Zoo" : ""}</p>
                        <p>{language === "English" ? "- Rhino Iguana Feeding experience" : ""}</p>
                        <p>{language === "English" ? "Private Tour: $200 (for up to 3 guests)" : ""}</p>
                        <p>{language === "English" ? "This tour is designed for small groups of up to three guests, ensuring a personal and unforgettable experience." : ""}</p>
                    </>
                }
                tour2Link="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/555461/?full-items=yes&flow=no"
                tour3Price="$500"
                tour3Link="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/555462/?full-items=yes&flow=no"
                tour3Description={
                    <>
                        <p className="text-align-justify">{language === "English" ? "Experience the wild in an exclusive setting with our Private Safari Wagon Tour for up to 40 people. Explore the Safari Park with of our extraordinary animal ambassadors and enjoy intimate, educational encounters. Perfect for large families, friends, or special occasions, this tour offers a unique, private, and unforgettable connection with nature." : ""}</p>
                        <p>{language === "English" ? "Your Safari Wagon Private Tour includes:" : ""}</p>
                        <p>{language === "English" ? "- A guided Safari Wagon Tour" : ""}</p>
                        <p>{language === "English" ? "- Visits to our Kangaroo and Wallaby Walkabout" : ""}</p>
                        <p>{language === "English" ? "- Access to our Petting Zoo" : ""}</p>
                        <p>{language === "English" ? "- Rhino Iguana Feeding experience" : ""}</p>
                        <p>{language === "English" ? "Private Tour: $500 (for up to 50 guests)" : ""}</p>
                        <p>{language === "English" ? "Experience animals like never before without barriers. Book your Safari Wagon Private Tour today and let the adventure begin!" : ""}</p>
                    </>
                }
                tourDepartureDetails={true}
                tour4Link="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/555956/?full-items=yes&flow=no"
                tour4Description={
                    <>
                        <p className="text-align-justify">{language === "English" ? "Experience the excitement of Tipsy Safari Night, an exclusive adults-only adventure! Enjoy wine tastings, intimate animal encounters, and an educational amphibian lab tour. This special evening features adults-only safari wagon rides, perfect for couples, groups of friends, dates, or ladies' nights out." : ""}</p>
                        <p>{language === "English" ? "Your Tipsy Safari Night tour includes:" : ""}</p>
                        <p>{language === "English" ? "- Safari Wagon Sunset Tour" : ""}</p>
                        <p>{language === "English" ? "- Kangaroo / Wallaby" : ""}</p>
                        <p>{language === "English" ? "- Petting Zoo" : ""}</p>
                        <p>{language === "English" ? "- Free 4 Station Wine Tasters" : ""}</p>
                        <p>{language === "English" ? "- Louisiana Food Truck Samples" : ""}</p>
                        <p>{language === "English" ? "General Admission: $35" : ""}</p>
                        <p>{language === "English" ? "Immerse yourself in a night of fun, learning, and indulgence. Book your Tipsy Safari Night tickets and make memories that will last a lifetime!" : ""}</p>
                    </>
                }
                tour4Price="$35"
            />
        </main>
    );
};
