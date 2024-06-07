import "../(components)/(Home)/Home.css";
import ToursHeader from "./(components)/ToursHeader";
import { HomeComponent2 } from "../(components)/(Home)/(components)/HomeComponent2/HomeComponent2";

export default function Tours() {
    return (
        <main>
            <ToursHeader />
            <HomeComponent2
                tour1Price="$15"
                tour1Description={
                    <>
                        <p className="text-align-justify">{"Join us for a wild ride on our Safari Wagon Tour! Get up close and personal with our incredible animal ambassadors as you journey through their habitats. This family-friendly tour is perfect for all ages and offers a unique opportunity to learn about and interact with a variety of animals."}</p>
                    </>
                }
                tour2Price="$200"
                tour2Description={
                    <>
                        <p className="text-align-justify">{"For an exclusive and personalized experience, our VIP ATV Tour offers the ultimate adventure. Spend two hours exploring our Safari Park on a private ATV ride, guided by our expert staff. You'll see magnificent animals up close, enjoy special activities not available to the public, and receive complimentary animal food for feeding."}</p>
                    </>
                }
                tour3Price="$500"
                tour3Description={
                    <>
                        <p className="text-align-justify">{"Experience the wild in an exclusive setting with our Private Safari Wagon Tour for groups of 40 to 50 people! Explore the habitats of our extraordinary animal ambassadors and enjoy intimate, educational encounters. Perfect for large families, friends, or special occasions, this tour offers a unique and unforgettable connection with nature."}</p>
                    </>
                }
                tourDepartureDetails={true} />
        </main>
    );
};