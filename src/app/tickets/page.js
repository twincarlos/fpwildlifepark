import "../(components)/(Home)/Home.css";
import TicketsHeader from "./(components)/TicketsHeader";
import { HomeComponent2 } from "../(components)/(Home)/(components)/HomeComponent2/HomeComponent2";

export default function Tours() {
    return (
        <main>
            <TicketsHeader />
            <HomeComponent2
                tour1Price="$15"
                tour1Description={
                    <>
                        <p className="text-align-justify">{"Join us for a wild ride on our Safari Wagon Tour! Get up close and personal with our incredible animal ambassadors as you journey through our Safari Park. This family-friendly tour is perfect for all ages and offers a unique opportunity to learn about and interact with a variety of animals."}</p>
                        <p>{"Your Safari Wagon Tour includes:"}</p>
                        <p>{"- A guided Safari Wagon Tour"}</p>
                        <p>{"- Visits to our Kangaroo and Wallaby exhibits"}</p>
                        <p>{"- Access to our charming Petting Zoo"}</p>
                        <p>{"General Admission: $15"}</p>
                        <p>{"Experience the thrill of the wild and create lasting memories with your loved ones. Book your Safari Wagon Tour today and let the adventure begin!"}</p>
                    </>
                }
                tour2Price="$200"
                tour2Description={
                    <>
                        <p className="text-align-justify">{"For an exclusive and personalized experience, our VIP RTV Tour offers the ultimate adventure. Spend two hours exploring our Safari Park on a private RTV ride, guided by our expert staff. You'll see magnificent animals up close, enjoy special activities not available to the public, and receive complimentary animal food for feeding."}</p>
                        <p>{"Your VIP RTV Tour includes:"}</p>
                        <p>{"- A guided Safari Wagon Tour"}</p>
                        <p>{"- Visits to our Kangaroo and Wallaby Walkabout"}</p>
                        <p>{"- Access to our Petting Zoo"}</p>
                        <p>{"- Rhino Iguana Feeding experience"}</p>
                        <p>{"Private Tour: $200 (for up to 3 guests)"}</p>
                        <p>{"This tour is designed for small groups of up to three guests, ensuring a personal and unforgettable experience."}</p>
                    </>
                }
                tour2Link="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/555461/?full-items=yes&flow=no"
                tour3Price="$500"
                tour3Description={
                    <>
                        <p className="text-align-justify">{"Experience the wild in an exclusive setting with our Private Safari Wagon Tour for up to 40 people. Explore the Safari Park with of our extraordinary animal ambassadors and enjoy intimate, educational encounters. Perfect for large families, friends, or special occasions, this tour offers a unique, private, and unforgettable connection with nature."}</p>
                        <p>Your Safari Wagon Private Tour includes:</p>
                        <p>- A guided Safari Wagon Tour</p>
                        <p>- Visits to our Kangaroo and Wallaby Walkabout</p>
                        <p>- Access to our Petting Zoo</p>
                        <p>- Rhino Iguana Feeding experience</p>
                        <p>Private Tour: $500 (for up to 50 guests)</p>
                        <p>Experience animals like never before without barriers. Book your Safari Wagon Private Tour today and let the adventure begin!</p>
                    </>
                }
                tourDepartureDetails={true}
                tour4Link="https://fareharbor.com/embeds/book/fragileplanetwildlifepark/items/555956/?full-items=yes&flow=no"
                tour4Description={
                    <>
                        <p className="text-align-justify">{"Experience the excitement of Tipsy Safari Night, an exclusive adults-only adventure! Enjoy wine tastings, intimate animal encounters, and an educational amphibian lab tour. This special evening features adults-only safari wagon rides, perfect for couples, groups of friends, dates, or ladies' nights out."}</p>
                        <p>Your Tipsy Safari Night tour includes:</p>
                        <p>- Safari Wagon Sunset Tour</p>
                        <p>- Kangaroo / Wallaby</p>
                        <p>- Petting Zoo</p>
                        <p>- Free 4 Station Wine Tasters</p>
                        <p>- Louisiana Food Truck Samples</p>
                        <p>General Admission: $35</p>
                        <p>Immerse yourself in a night of fun, learning, and indulgence. Book your Tipsy Safari Night tickets and make memories that will last a lifetime!</p>
                    </>
                }
                tour4Price="$35"
            />
        </main>
    );
};
