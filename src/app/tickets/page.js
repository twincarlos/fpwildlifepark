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
                        <p className="text-align-justify">{"Join us for a wild ride on our Safari Wagon Tour! Get up close and personal with our incredible animal ambassadors as you journey through their habitats. This family-friendly tour is perfect for all ages and offers a unique opportunity to learn about and interact with a variety of animals."}</p>
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
                        <p className="text-align-justify">{"For those seeking an exclusive and personalized experience, our VIP ATV Tour is the ultimate adventure. Spend two hours exploring our Safari Park on a private ATV ride, guided by our expert staff. You'll get to see our magnificent animals up close, enjoy special activities that are not available to the general public, and receive complimentary animal food for the feeding."}</p>
                        <p>{"Your VIP ATV Tour includes:"}</p>
                        <p>{"- A guided Safari Wagon Sunset Tour"}</p>
                        <p>{"- Visits to our Kangaroo and Wallaby exhibits"}</p>
                        <p>{"- Access to our Petting Zoo"}</p>
                        <p>{"- Rhino Iguana Feeding experience"}</p>
                        <p>{"Private Tour: $200 (for up to 3 guests)"}</p>
                        <p>{"This tour is designed for small groups of up to three guests, ensuring a personal and unforgettable experience."}</p>
                    </>
                }
                tour3Price="$500"
                tour3Description={
                    <>
                        <p className="text-align-justify">{"Experience the wild in an exclusive setting with our Private Safari Wagon Tour for groups of 40 to 50 people! Explore the habitats of our extraordinary animal ambassadors and enjoy intimate, educational encounters. Perfect for large families, friends, or special occasions, this tour offers a unique and unforgettable connection with nature."}</p>
                    </>
                }
                tourDepartureDetails={true}
            />
        </main>
    );
};